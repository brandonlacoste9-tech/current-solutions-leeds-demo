const I18N = {
en: {
  "nav.services": "Services", "nav.why": "Why us", "nav.reviews": "Reviews", "nav.contact": "Contact",
  "nav.call": "07775 311353",
  "hero.kicker": "Leeds, England · Electrical installation specialists since 2010",
  "hero.title": "Power that works.<br>Done right.",
  "hero.sub": "Rated 5.0 out of 5 across 21 Google reviews — Current Solutions is Leeds' trusted electrician for rewires, installations, fire alarms and CCTV, open 7 days a week.",
  "hero.cta1": "Get a free quote", "hero.cta2": "See services",
  "stats.hoursNum": "Mon – Sun", "stats.hours": "Open 7 days a week",
  "stats.sinceNum": "2010", "stats.since": "Serving Leeds since 2010",
  "stats.rateNum": "5.0 ★", "stats.rate": "Google rating (21 reviews)",
  "stats.quoteNum": "Free", "stats.quote": "Quotes before every job",
  "services.kicker": "What we do", "services.title": "Full electrical services for homes & businesses",
  "services.s1t": "Electrical installation", "services.s1d": "New installations and upgrades done to a professional standard — neat, tested and certified.",
  "services.s2t": "Full & partial rewires", "services.s2d": "Bring your wiring up to date — whole homes or single rooms, with minimal disruption.",
  "services.s3t": "Small maintenance jobs", "services.s3d": "Sockets, switches, lights and fixes — no job too small, same care every time.",
  "services.s4t": "Fire alarms", "services.s4d": "Fire alarm installation and maintenance to keep your property safe and compliant.",
  "services.s5t": "CCTV", "services.s5d": "Security camera systems installed cleanly — see what's happening, wherever you are.",
  "services.s6t": "Electric gates", "services.s6d": "Electric gate installation and repairs — secure, convenient entry to your property.",
  "walkin.w1t": "Mon – Sun 9am – 5pm", "walkin.w1d": "Open 7 days a week",
  "walkin.w2t": "Small jobs welcome", "walkin.w2d": "Sockets, switches & fixes",
  "walkin.w3t": "Domestic & commercial", "walkin.w3d": "Homes and businesses",
  "why.kicker": "Why choose us", "why.title": "Leeds' electrician since 2010",
  "why.intro": "Over a decade of electrical work across Leeds, from quick fixes to full rewires. Straightforward pricing, tidy work and a free quote before every job.",
  "why.l1t": "Honest pricing", "why.l1d": "Free quotes up front — you'll know the cost before we start.",
  "why.l2t": "No job too small", "why.l2d": "From a single socket to a full rewire, every job gets the same care.",
  "why.l3t": "Open 7 days", "why.l3d": "Monday to Sunday, 9am to 5pm — electrical help when you need it.",
  "why.l4t": "Rated 5.0 on Google", "why.l4d": "21 customers rate us five stars for reliable, tidy work.",
  "gallery.kicker": "Recent work", "gallery.title": "Neat work, every time",
  "gallery.c1": "Full & partial rewires, neatly run cables",
  "gallery.c2": "CCTV installed cleanly on homes & businesses",
  "gallery.c3": "Modern lighting installed to a high finish",
  "reviews.kicker": "What people say", "reviews.title": "Five stars across Leeds",
  "reviews.more": "Rated 5.0 out of 5 across 21 Google reviews — see what customers say",
  "faq.kicker": "Good to know", "faq.title": "Frequently asked questions",
  "faq.q1": "Do I need an appointment, or can I just call?",
  "faq.a1": "Just call us on 07775 311353 — we're open 7 days a week, 9am to 5pm, and we'll book you in at a time that suits you.",
  "faq.q2": "Do you do free quotes?",
  "faq.a2": "Yes — every job starts with a free, no-obligation quote so you know exactly what it will cost before we begin.",
  "faq.q3": "Do you take on small jobs?",
  "faq.a3": "Absolutely. Small maintenance jobs — sockets, switches, lights and repairs — are a core part of what we do.",
  "faq.q4": "What are your opening hours?",
  "faq.a4": "Monday to Sunday, 9:00 AM to 5:00 PM — open 7 days a week.",
  "faq.q5": "Where are you based?",
  "faq.a5": "10 Harehills Park View, Leeds LS9 6BN — serving homes and businesses across Leeds.",
  "contact.kicker": "Get in touch", "contact.title": "Get your free quote",
  "contact.addr": "Address", "contact.phone": "Phone", "contact.hours": "Hours",
  "contact.hoursVal": "Mon – Sun: 9:00 AM – 5:00 PM",
  "contact.cta": "Call for a free quote",
  "nav.gallery": "Gallery", "nav.faq": "FAQ",
  "footer.tag": "Electrical installation specialists · Leeds, England"
}};

const lang = "en";

function applyLang() {
  document.documentElement.lang = "en";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const val = I18N.en[key];
    if (val !== undefined) el.innerHTML = val;
  });
  document.title = "Current Solutions Leeds — Electrician in Leeds | Rewires, CCTV & Fire Alarms";
}

const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");
menuBtn.addEventListener("click", () => mainNav.classList.toggle("open"));
mainNav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => mainNav.classList.remove("open")));

applyLang();
