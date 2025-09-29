
// Mobile menu
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
if (burger && menu){
  burger.addEventListener('click', () => menu.classList.toggle('open'));
}

// Smooth anchor scrolling (RTL safe)
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el){
      e.preventDefault();
      el.scrollIntoView({behavior:'smooth', block: 'start'});
      if (menu && menu.classList.contains('open')) menu.classList.remove('open');
    }
  });
});

// WhatsApp helper
function openWhatsApp(message="مرحباً، أود الاستفسار عن برامج BTEC"){
  const phone = "962795459833"; // رقم واتساب (الأردن)
  const encoded = encodeURIComponent(message);
  const url = `https://wa.me/${phone}?text=${encoded}`;
  window.open(url, "_blank");
}

// Contact form -> WhatsApp
const wForm = document.getElementById('whatsappForm');
if (wForm){
  wForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = wForm.querySelector('[name="name"]').value.trim();
    const phone = wForm.querySelector('[name="phone"]').value.trim();
    const msg = wForm.querySelector('[name="msg"]').value.trim();
    const text = `الاسم: ${name}\nالهاتف: ${phone}\nالرسالة: ${msg || "أرغب بالتسجيل والاستفسار"}`;
    openWhatsApp(text);
  });
}

// Expose to buttons
window.openWhatsApp = openWhatsApp;
