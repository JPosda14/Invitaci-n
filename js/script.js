// fade-in on scroll
const observer=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target);}});},{threshold:0.15});
document.querySelectorAll('.fade-in').forEach(el=>observer.observe(el));

// cover tap
function handleTap(){
  const cover=document.getElementById('cover');
  cover.classList.add('hide');
  const main=document.getElementById('main-content');
  main.classList.add('show');
  setTimeout(()=>{
    const b=document.getElementById('bride');
    const g=document.getElementById('groom');
    if(b)b.style.transform='translateX(-50%) scale(1)';
    if(g)g.style.transform='translateX(-50%) scale(1)';
  },100);
  setTimeout(()=>{
    document.querySelectorAll('.heart').forEach((h,i)=>{
      setTimeout(()=>h.classList.add('show'),i*200);
    });
  },400);
}

// countdown
(function(){
  function update(){
    const target=new Date('2026-08-22T16:00:00-05:00');
    const now=new Date();
    let diff=target-now;
    if(diff<0)diff=0;
    const s=Math.floor(diff/1000)%60;
    const m=Math.floor(diff/60000)%60;
    const h=Math.floor(diff/3600000)%24;
    const d=Math.floor(diff/86400000);
    document.getElementById('cd-d').textContent=String(d).padStart(2,'0');
    document.getElementById('cd-h').textContent=String(h).padStart(2,'0');
    document.getElementById('cd-m').textContent=String(m).padStart(2,'0');
    document.getElementById('cd-s').textContent=String(s).padStart(2,'0');
  }
  update();
  setInterval(update,1000);
})();
