# Success Inc. Travels & Tourism — Website

এটি Success Inc. Travels & Tourism, Sylhet-এর GitHub Pages-এর জন্য প্রস্তুত responsive static website। ফোন ও desktop—দুই ধরনের screen-এ কাজ করার জন্য layout তৈরি করা হয়েছে। এতে Home, About, Services, Visa Assistance, Tour Plans, Work-permit Guidance, Travel Guides, Leadership এবং Contact—মোট নয়টি পৃষ্ঠা রয়েছে।

## Website-এ কী আছে

- মালিক-সরবরাহকৃত ফ্লাইট, ভিসা ও Malaysia work-sector poster-গুলো বিষয় অনুযায়ী সাজানো এবং হালকা WebP format-এ রাখা হয়েছে।
- `index.html` ও `services.html`-এ free public flight-search option রয়েছে। Airport code ও তারিখ দিয়ে Google Flights বা Skyscanner-এ অনুসন্ধান করা যায়। সাইটটি নিজে live fare দেখায় না এবং টিকিট বুক করে না।
- `guides.html`-এ পাঁচটি ব্যবহারিক Bangla travel article ও সাধারণ প্রশ্নোত্তর রয়েছে।
- Founder M A Halim Rahi ও Director & Manager সবুজ বিশ্বাস (Sabuj Biswas)-এর portrait এবং প্রয়োজনীয় profile details রাখা হয়েছে।
- Contact page-এ অফিসের ঠিকানা ও মালিক-দেওয়া Google Maps link রয়েছে: **কুইন্স টাওয়ার (নিচতলা), কদমতলী, হুমায়ুন চত্বর, সিলেট**।
- Contact form server-এ তথ্য জমা দেয় না; এটি WhatsApp-এ একটি draft তৈরি করে।
- Static website-এ কোনো API key বা backend service ব্যবহার করা হয়নি।
- সরবরাহকৃত Success Inc. logo desktop/mobile header ও footer-এ আসল অনুপাত বজায় রেখে ব্যবহার করা হয়েছে; শুধু স্বচ্ছ ফাঁকা মার্জিন losslessভাবে trim করা হয়েছে। নতুন favicon এবং social-share image metadata-ও যোগ করা হয়েছে।

## GitHub Pages-এ আপলোড ও domain চালু করা

1. `successinc-github` ফোল্ডারের সব ফাইল ও `assets` ফোল্ডারসহ আপনার GitHub repository-র root-এ upload করুন। `index.html` অবশ্যই root-এ থাকবে।
2. Repository-তে **Settings → Pages** খুলুন। **Deploy from a branch** বেছে নিয়ে আপনার branch (যেমন `main`) এবং folder হিসেবে **/(root)** নির্বাচন করে Save করুন।
3. Root-এর `CNAME` ফাইলে `successinc.pro.bd` আগে থেকেই আছে। Pages settings-এর **Custom domain**-এ একই domain লিখুন।
4. DNS provider-এ apex domain ও চাইলে `www`-এর জন্য GitHub Pages-এর বর্তমান নির্দেশিত DNS records দিন। GitHub-এর নির্দেশনা: [Managing a custom domain for your GitHub Pages site](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).
5. DNS propagation ও Pages build শেষ হলে Settings → Pages-এ **Enforce HTTPS** চালু করুন।

এই প্রস্তুতিতে কোনো repository-তে upload, GitHub setting পরিবর্তন বা DNS পরিবর্তন করা হয়নি।

## Flight search সম্পর্কে

Search form-এ তিন অক্ষরের IATA airport code দিন (যেমন Sylhet `ZYL`, Dhaka `DAC`) এবং ঐচ্ছিক departure/return date বাছুন। Search button বাইরের provider-এ নতুন tab খুলবে। Search ফল, availability ও fare ওই provider-এর; booking-এর আগে airline/seller-এর final price, baggage, change/refund, transit ও payment terms যাচাই করুন।

## Poster ও চাকরির সতর্কতা

Poster-গুলো promotional artwork হিসেবে দেখানো হয়েছে, live inventory বা সরকারি/নিয়োগকর্তার endorsement হিসেবে নয়। Poster-এ থাকা কোনো ভাড়া, বেতন, vacancy, visa outcome বা availability এই সাইটে যাচাই করা হয়নি। বিশেষত work-permit page-এ RM 1,700-এর উল্লেখকে নিশ্চিত বেতন বা বর্তমান offer হিসেবে ধরা যাবে না। চাকরি, permit বা visa approval-এর নিশ্চয়তা দেওয়া হয়নি।

## ফাইল কাঠামো

- `index.html`, `about.html`, `services.html`, `visa-assistance.html`, `tour-packages.html`, `work-permit.html`, `guides.html`, `leadership.html`, `contact.html`: নয়টি static পৃষ্ঠা
- `assets/site.css`, `assets/site.js`: shared responsive style, mobile menu, form-to-WhatsApp এবং external flight search
- `assets/successinc-logo.png`, `assets/successinc-favicon.png`: supplied brand logo এবং তার plane-mark favicon
- `assets/posters/`: topic অনুযায়ী ১৬টি compressed WebP poster
- `assets/ma-halim-rahi.jpg`, `assets/sabuj-biswas.jpg`: leadership portraits
- `CNAME`: `successinc.pro.bd`
- `.nojekyll`, `robots.txt`, `sitemap.xml`: GitHub Pages ও crawler setup

## যোগাযোগ

- WhatsApp/Phone: `+8801613076654`
- Email: `info@successinc.pro.bd`
- Office: `কুইন্স টাওয়ার (নিচতলা), কদমতলী, হুমায়ুন চত্বর, সিলেট`
- Founder personal website: [rahi.bro.bd](https://rahi.bro.bd)
