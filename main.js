<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>MADLAMB. | Archive Supply</title>

<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&family=Playfair+Display:italic,wght@700&display=swap" rel="stylesheet">

<style>

:root { 
--bg: #f4f4f4;
--negro: #000000;
--gris: #888888;
--gris-claro: #dddddd;
--rojo-agotado: #a30000;
--transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

/* PRELOADER */

#preloader{
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:var(--negro);
z-index:10000;
display:flex;
justify-content:center;
align-items:center;
transition:opacity .8s;
}

#preloader h2{
color:white;
font-weight:900;
letter-spacing:5px;
font-size:1.5rem;
animation:pulse 1.5s infinite;
}

@keyframes pulse{
0%{opacity:.5}
50%{opacity:1}
100%{opacity:.5}
}

body{
margin:0;
font-family:'Inter',sans-serif;
background-color:var(--bg);
color:var(--negro);
padding-top:60px;
overflow-x:hidden;
}

/* HEADER */

.site-header{
background:rgba(244,244,244,.9);
backdrop-filter:blur(10px);
padding:.8rem 5%;
display:flex;
justify-content:space-between;
align-items:center;
position:fixed;
top:0;
width:100%;
z-index:1000;
box-sizing:border-box;
border-bottom:1px solid var(--gris-claro);
}

.site-header h1{
font-weight:900;
font-size:1.2rem;
letter-spacing:-.5px;
margin:0;
cursor:pointer;
}

.nav-menu ul{
display:flex;
gap:2rem;
list-style:none;
margin:0;
padding:0;
}

.nav-menu a{
color:var(--negro);
text-decoration:none;
font-size:.65rem;
font-weight:700;
text-transform:uppercase;
letter-spacing:1.5px;
opacity:.4;
cursor:pointer;
transition:var(--transition);
}

.nav-menu a.active,
.nav-menu a:hover{
opacity:1;
}

/* SECCIONES */

.content-section{
display:none;
animation:fadeIn .8s ease;
}

.content-section.active{
display:block;
}

@keyframes fadeIn{
from{opacity:0}
to{opacity:1}
}

/* HERO */

.hero{
padding:8rem 5% 2rem;
}

.hero h2{
font-size:clamp(3rem,12vw,8rem);
font-weight:900;
line-height:.8;
margin:0;
letter-spacing:-4px;
text-transform:uppercase;
}

.hero p{
font-family:'Playfair Display',serif;
font-size:1.5rem;
margin-top:20px;
color:var(--gris);
}

/* FILTROS */

.filter-bar{
padding:2rem 5%;
border-bottom:1px solid var(--gris-claro);
display:flex;
gap:1.5rem;
overflow-x:auto;
}

.filter-btn{
background:none;
border:none;
font-size:.65rem;
font-weight:700;
text-transform:uppercase;
letter-spacing:1.5px;
cursor:pointer;
opacity:.4;
}

.filter-btn.active,
.filter-btn:hover{
opacity:1;
border-bottom:1px solid var(--negro);
}

/* GRID */

.main-container{
max-width:1400px;
margin:0 auto;
padding:4rem 5%;
}

.grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(350px,1fr));
gap:1px;
background:var(--gris-claro);
border:1px solid var(--gris-claro);
}

/* TARJETA */

.card{
background:var(--bg);
padding:20px;
position:relative;
opacity:0;
transform:translateY(20px);
animation:fadeUp .6s forwards;
}

@keyframes fadeUp{
to{
opacity:1;
transform:translateY(0);
}
}

.badge{
position:absolute;
top:30px;
left:30px;
z-index:20;
padding:5px 12px;
font-size:.6rem;
font-weight:900;
text-transform:uppercase;
letter-spacing:1px;
background:var(--negro);
color:white;
}

.badge.agotado{
background:var(--rojo-agotado);
}

/* CAROUSEL */

.carousel-container{
position:relative;
width:100%;
height:500px;
overflow:hidden;
margin-bottom:20px;
background:#eee;
}

.carousel-track{
display:flex;
width:100%;
height:100%;
transition:transform .6s cubic-bezier(.16,1,.3,1);
}

.carousel-track img{
min-width:100%;
width:100%;
height:100%;
object-fit:cover;
filter:grayscale(100%);
transition:transform .8s ease,filter .5s ease;
cursor:pointer;
}

.card:hover img{
filter:grayscale(0%);
transform:scale(1.05);
}

.card.is-sold-out img{
opacity:.4;
filter:grayscale(100%)!important;
transform:none!important;
}

/* BOTONES CAROUSEL */

.nav-btn{
position:absolute;
top:50%;
transform:translateY(-50%);
background:rgba(255,255,255,.8);
border:none;
font-size:1.5rem;
cursor:pointer;
opacity:0;
transition:.3s;
width:40px;
height:40px;
display:flex;
align-items:center;
justify-content:center;
z-index:10;
border-radius:50%;
}

.card:hover .nav-btn{
opacity:.5;
}

/* INFO */

.card-info h3{
font-size:.85rem;
font-weight:700;
text-transform:uppercase;
margin:0;
}

.precio{
font-size:.85rem;
color:var(--gris);
margin:5px 0 10px;
}

.specs{
font-size:.65rem;
color:var(--gris);
text-transform:uppercase;
letter-spacing:1px;
margin-bottom:20px;
font-weight:600;
}

/* BOTON */

.btn-adquirir{
background:var(--negro);
color:#fff;
padding:14px;
border:none;
width:100%;
font-size:.7rem;
font-weight:700;
text-transform:uppercase;
letter-spacing:2px;
cursor:pointer;
}

/* FULLSCREEN IMAGE */

#img-viewer{
display:none;
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:black;
z-index:99999;
justify-content:center;
align-items:center;
}

#img-viewer img{
max-width:95%;
max-height:95%;
object-fit:contain;
}

footer{
padding:5rem;
text-align:center;
border-top:1px solid var(--gris-claro);
font-size:.6rem;
font-weight:700;
letter-spacing:2px;
text-transform:uppercase;
opacity:.5;
}

</style>
</head>

<body>

<div id="preloader"><h2>MADLAMB.</h2></div>

<header class="site-header">
<h1 onclick="showSection('suministros')">MADLAMB.</h1>

<nav class="nav-menu">
<ul>
<li><a id="nav-suministros" class="active" onclick="showSection('suministros')">Suministros</a></li>
<li><a id="nav-bitacora" onclick="showSection('bitacora')">Bitácora</a></li>
</ul>
</nav>
</header>

<section id="suministros" class="content-section active">

<div class="hero">
<h2>Archivo<br>Madlamb</h2>
<p><i>Historia & Legado</i></p>
</div>

<div class="filter-bar">

<button class="filter-btn active" onclick="filtrar('todas')">Todas</button>
<button class="filter-btn" onclick="filtrar('chaquetas')">Chaquetas</button>
<button class="filter-btn" onclick="filtrar('hoodies')">Hoodies</button>
<button class="filter-btn" onclick="filtrar('camisetas')">Camisetas</button>

</div>

<div class="main-container">
<div class="grid" id="galeria"></div>
</div>

</section>

<div id="img-viewer" onclick="cerrarImagen()">
<img id="img-full">
</div>

<footer>
© 2026 MADLAMB. | CURATED IN SAN JOSÉ, COSTA RICA
</footer>

<script>

let prendaSeleccionadaParaEnvio="";
const carruselPositions={};

window.addEventListener('load',()=>{
const preloader=document.getElementById('preloader');
preloader.style.opacity='0';
setTimeout(()=>preloader.style.display='none',800);
});

function showSection(id){

document.querySelectorAll('.content-section')
.forEach(s=>s.classList.remove('active'));

document.querySelectorAll('.nav-menu a')
.forEach(a=>a.classList.remove('active'));

document.getElementById(id).classList.add('active');
document.getElementById('nav-'+id).classList.add('active');

window.scrollTo(0,0);
}

/* INVENTARIO */

const prendas=[

{ id:1,nombre:"HOODIE UNDER ARMOUR 'REAL TREE'",precio:"35,000",talla:"L",estado:"10/10",categoria:"hoodies",fotos:["Hoodie under armour real tree.jpg"],disponible:true },

{ id:2,nombre:"CARHARRT DETROIT '100 AÑOS'",precio:"50,000",talla:"L",estado:"8.5/10",categoria:"chaquetas",fotos:["Carharrt Detroit 100 años.jpg"],disponible:true },

{ id:3,nombre:"WINDBREAKER PLAYBOY",precio:"25,000",talla:"M",estado:"9/10",categoria:"chaquetas",fotos:["Windbreaker PlayBoy.jpg","Windbreaker PlayBoy2.jpg","Windbreaker PlayBoy3.jpg"],disponible:false },

{ id:4,nombre:"T-SHIRT GALLERY DEPT. 'TOKYO' EDITION",precio:"35,000",talla:"M",estado:"10/10",categoria:"camisetas",fotos:["Gallery dept. tokyo edition.jpg","Gallery dept. tokyo edition2.jpg"],disponible:true },

{ id:5,nombre:"ONEITA 'LOSER' TEE 'VINTAGE'",precio:"50,000",talla:"L",estado:"9/10",categoria:"camisetas",fotos:["Oneita loser tee.jpg","Oneita loser tee2.jpg"],disponible:true }

];

/* ORDEN AUTOMATICO */

function ordenarInventario(lista){

return lista.sort((a,b)=>{
return b.disponible-a.disponible
})

}

function cargar(filtro='todas'){

const galeria=document.getElementById('galeria');

let filtradas=filtro==='todas'
?prendas
:prendas.filter(p=>p.categoria===filtro);

filtradas=ordenarInventario(filtradas);

galeria.innerHTML=filtradas.map((p,pIndex)=>{

const fotosHTML=p.fotos.map(f=>`<img src="${f}" onclick="verImagen('${f}')">`).join('');

const botonesNav=p.fotos.length>1?`

<button class="nav-btn" style="left:10px" onclick="moveCarousel(${pIndex},-1)">←</button>
<button class="nav-btn" style="right:10px" onclick="moveCarousel(${pIndex},1)">→</button>

`:''

return`

<div class="card ${p.disponible?'':'is-sold-out'}">

${p.disponible?'<div class="badge">Disponible</div>':'<div class="badge agotado">Agotado</div>'}

<div class="carousel-container">

<div class="carousel-track" id="track-${pIndex}">
${fotosHTML}
</div>

${botonesNav}

</div>

<div class="card-info">

<h3>${p.nombre}</h3>

<p class="precio">₡${p.precio}</p>

<div class="specs">Talla: ${p.talla} — Estado: ${p.estado}</div>

<button class="btn-adquirir" ${p.disponible?'':'disabled'}>
${p.disponible?'Adquirir':'Agotado'}
</button>

</div>

</div>

`

}).join('');

}

/* CAROUSEL */

function moveCarousel(pIndex,direction){

const track=document.getElementById(`track-${pIndex}`);
const totalFotos=prendas[pIndex].fotos.length;

if(!carruselPositions[pIndex])
carruselPositions[pIndex]=0;

carruselPositions[pIndex]+=direction;

if(carruselPositions[pIndex]<0)
carruselPositions[pIndex]=totalFotos-1;

if(carruselPositions[pIndex]>=totalFotos)
carruselPositions[pIndex]=0;

track.style.transform=`translateX(-${carruselPositions[pIndex]*100}%)`;

}

/* FULLSCREEN */

function verImagen(src){

document.getElementById('img-full').src=src;
document.getElementById('img-viewer').style.display='flex';

}

function cerrarImagen(){

document.getElementById('img-viewer').style.display='none';

}

function filtrar(cat){

document.querySelectorAll('.filter-btn')
.forEach(b=>b.classList.remove('active'));

event.target.classList.add('active');

cargar(cat);

}

cargar();

</script>

</body>
</html>
