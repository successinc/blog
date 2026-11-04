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

  document.querySelectorAll('[data-flight-search]').forEach(form=>{
    form.addEventListener('submit',event=>{
      event.preventDefault();
      const data=new FormData(form);
      const from=String(data.get('from')||'').trim().toUpperCase();
      const to=String(data.get('to')||'').trim().toUpperCase();
      const depart=String(data.get('depart')||'');
      const returning=String(data.get('return')||'');
      const provider=event.submitter?.dataset.flightProvider||'google';
      const fromField=form.elements.namedItem('from');
      const toField=form.elements.namedItem('to');
      fromField.setCustomValidity(/^[A-Z]{3}$/.test(from)?'':'Enter a three-letter airport code, such as ZYL or DAC.');
      toField.setCustomValidity(/^[A-Z]{3}$/.test(to)?'':'Enter a three-letter airport code, such as DXB.');
      if(depart&&returning&&returning<depart){
        form.elements.namedItem('return').setCustomValidity('Return date must be on or after the departure date.');
      }else{
        form.elements.namedItem('return').setCustomValidity('');
      }
      if(!form.reportValidity())return;

      const dateText=value=>value?new Date(`${value}T12:00:00`).toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric'}):'';
      const query=`Flights from ${from} to ${to}${depart?' on '+dateText(depart):''}${returning?' returning '+dateText(returning):''}`;
      let url;
      if(provider==='skyscanner'){
        const shortDate=value=>value?value.slice(2,4)+value.slice(5,7)+value.slice(8,10):'';
        let path=`/transport/flights/${from.toLowerCase()}/${to.toLowerCase()}/`;
        if(depart){
          path+=shortDate(depart)+'/';
          if(returning)path+=shortDate(returning)+'/';
        }
        const params=new URLSearchParams({adultsv2:'1',cabinclass:'economy',currency:'BDT',locale:'en-GB',market:'BD',rtn:returning?'1':'0'});
        url=`https://www.skyscanner.net${path}?${params.toString()}`;
      }else{
        const search=new URL('https://www.google.com/travel/flights');
        search.searchParams.set('q',query);
        search.searchParams.set('curr','BDT');
        url=search.toString();
      }
      window.open(url,'_blank','noopener,noreferrer');
    });
  });

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
})();
