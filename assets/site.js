(()=>{
  const toggle=document.querySelector('[data-menu-toggle]');
  const mobile=document.querySelector('[data-mobile-nav]');
  if(toggle&&mobile){
    toggle.addEventListener('click',()=>{
      const open=mobile.classList.toggle('open');
      toggle.setAttribute('aria-expanded',String(open));
      toggle.setAttribute('aria-label',open?'Close navigation menu':'Open navigation menu');
    });
    mobile.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
      mobile.classList.remove('open');
      toggle.setAttribute('aria-expanded','false');
      toggle.setAttribute('aria-label','Open navigation menu');
    }));
  }

  const year=document.querySelector('[data-year]');
  if(year)year.textContent=new Date().getFullYear();

  const form=document.querySelector('#inquiry-form');
  if(form){
    form.addEventListener('submit',event=>{
      event.preventDefault();
      const data=new FormData(form);
      const name=String(data.get('name')||'').trim();
      const service=String(data.get('service')||'Travel enquiry');
      const message=String(data.get('message')||'').trim();
      const phone=String(data.get('phone')||'').trim();
      const text=`Hello Success Inc., I would like to enquire about ${service}.\nName: ${name}\nPhone: ${phone}\nMessage: ${message}`;
      window.location.href='https://wa.me/8801613076654?text='+encodeURIComponent(text);
    });
  }

  let dhakaParts;
  try{
    dhakaParts=new Intl.DateTimeFormat('en-US',{
      timeZone:'Asia/Dhaka',
      weekday:'long',
      year:'numeric',
      month:'2-digit',
      day:'2-digit'
    }).formatToParts(new Date());
  }catch(error){
    dhakaParts=[];
  }
  const dateParts=Object.fromEntries(dhakaParts.map(part=>[part.type,part.value]));
  if(dateParts.weekday==='Friday'){
    const dateKey=`${dateParts.year}-${dateParts.month}-${dateParts.day}`;
    const sessionKey=`successInc.fridayPosterShown.${dateKey}`;
    let alreadyShown=false;
    try{alreadyShown=sessionStorage.getItem(sessionKey)==='1';}catch(error){}

    if(!alreadyShown){
      try{sessionStorage.setItem(sessionKey,'1');}catch(error){}
      const dialog=document.createElement('dialog');
      dialog.className='friday-popup';
      dialog.setAttribute('aria-labelledby','friday-popup-title');

      const heading=document.createElement('h2');
      heading.id='friday-popup-title';
      heading.className='sr-only';
      heading.textContent='Friday poster';

      const header=document.createElement('div');
      header.className='friday-popup__top';
      const closeButton=document.createElement('button');
      closeButton.className='friday-popup__close';
      closeButton.type='button';
      closeButton.setAttribute('aria-label','Close Friday poster');
      closeButton.textContent='×';
      header.append(closeButton);

      const poster=document.createElement('img');
      poster.className='friday-popup__image';
      poster.src='assets/posters/friday-popup.png';
      poster.alt='Success Inc. Friday flight-ticket poster';
      poster.width=2048;
      poster.height=2048;
      poster.decoding='async';
      poster.fetchPriority='high';

      dialog.append(heading,header,poster);
      document.body.append(dialog);
      closeButton.addEventListener('click',()=>dialog.close());
      dialog.addEventListener('click',event=>{
        const rect=dialog.getBoundingClientRect();
        const clickedOutside=event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom;
        if(event.target===dialog||clickedOutside)dialog.close();
      });
      dialog.addEventListener('close',()=>dialog.remove(),{once:true});
      if(typeof dialog.showModal==='function')dialog.showModal();
      else{
        dialog.setAttribute('open','');
        dialog.classList.add('friday-popup--fallback-open');
      }
      closeButton.focus();
    }
  }
})();
