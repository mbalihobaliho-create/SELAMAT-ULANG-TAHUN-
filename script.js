/* =========================
   NAMA PACAR (UBAH DI SINI)
========================= */
const pacar = "PURI ";
let i = 0;
const nameEl = document.getElementById("name");

function typeName(){
  if(i < pacar.length){
    nameEl.innerHTML += pacar.charAt(i);
    i++;
    setTimeout(typeName,150);
  }
}
typeName();

/* =========================
   SLIDESHOW FOTO
========================= */
const images = [
  "foto/1.jpg",
  "photos/2.jpg",
  "photos/3.jpg"
];

let index = 0;
const slide = document.getElementById("slide");

setInterval(() => {
  index = (index + 1) % photos.length;
  slide.src = photos[index];
}, 3000);

/* =========================
   MUSIK
========================= */
const music = document.getElementById("music");

function toggleMusic(){
  if(music.paused){
    music.play();
  } else {
    music.pause();
  }
}

/* =========================
   TOMBOL HADIAH VIDEO
========================= */
function openGift(){
  const box = document.getElementById("giftBox");
  const video = document.getElementById("giftVideo");

  box.style.display = "flex";
  video.currentTime = 0;
  video.play();

  // musik berhenti saat video diputar
  music.pause();
}

function closeGift(){
  const box = document.getElementById("giftBox");
  const video = document.getElementById("giftVideo");

  video.pause();
  box.style.display = "none";

  // musik lanjut lagi
  music.play();
}

/* =========================
   BINTANG
========================= */
const starCanvas = document.getElementById("stars");
const sctx = starCanvas.getContext("2d");

starCanvas.width = innerWidth;
starCanvas.height = innerHeight;

let stars = Array.from({length:120}, () => ({
  x: Math.random() * starCanvas.width,
  y: Math.random() * starCanvas.height,
  r: Math.random() * 1.5,
  d: Math.random() * 0.5
}));

function drawStars(){
  sctx.clearRect(0,0,starCanvas.width,starCanvas.height);
  sctx.fillStyle = "white";

  stars.forEach(s => {
    sctx.beginPath();
    sctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    sctx.fill();

    s.y += s.d;
    if(s.y > starCanvas.height){
      s.y = 0;
      s.x = Math.random() * starCanvas.width;
    }
  });

  requestAnimationFrame(drawStars);
}
drawStars();

/* =========================
   KEMBANG API
========================= */
const fireCanvas = document.getElementById("fireworks");
const fctx = fireCanvas.getContext("2d");

fireCanvas.width = innerWidth;
fireCanvas.height = innerHeight;

let particles = [];

setInterval(() => {
  let x = Math.random() * fireCanvas.width;
  let y = Math.random() * fireCanvas.height / 2;

  for(let i=0;i<40;i++){
    particles.push({
      x, y,
      dx:(Math.random()-0.5)*4,
      dy:(Math.random()-0.5)*4,
      life:60
    });
  }
}, 1500);

function animateFireworks(){
  fctx.clearRect(0,0,fireCanvas.width,fireCanvas.height);

  particles.forEach((p,i)=>{
    fctx.fillStyle = "rgba(199,125,255,0.8)";
    fctx.beginPath();
    fctx.arc(p.x,p.y,2,0,Math.PI*2);
    fctx.fill();

    p.x += p.dx;
    p.y += p.dy;
    p.life--;

    if(p.life <= 0){
      particles.splice(i,1);
    }
  });

  requestAnimationFrame(animateFireworks);
}
animateFireworks();
