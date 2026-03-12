let prendaSeleccionadaParaEnvio = "";
const carruselPositions = {};

function showSection(id){

document.querySelectorAll('.content-section')
.forEach(s=>s.classList.remove('active'));

document.querySelectorAll('.nav-menu a')
.forEach(a=>a.classList.remove('active'));

document.getElementById(id).classList.add('active');
document.getElementById('nav-'+id).classList.add('active');

window.scrollTo(0,0);
}

function cargar(filtro='todas'){

const galeria=document.getElementById('galeria');

const filtradas=filtro==='todas'
? prendas
: prendas.filter(p=>p.categoria===filtro);

galeria.innerHTML=filtradas.map((p,pIndex)=>{

const fotosHTML=p.fotos
.map(f=>`<img src="${f}" alt="${p.nombre}">`)
.join('');

const botonesNav=p.fotos.length>1?

`
<button class="nav-btn prev-btn" onclick="moveCarousel(${pIndex},-1)">←</button>
<button class="nav-btn next-btn" onclick="moveCarousel(${pIndex},1)">→</button>
`

:'';

return`

<div class="card ${p.disponible?'':'is-sold-out'}">

<div class="carousel-container">

<div class="carousel-track" id="track-${pIndex}">
${fotosHTML}
</div>

${botonesNav}

</div>

<div class="card-info">

<h3>${p.nombre}</h3>

<p class="precio">₡${p.precio}</p>

<div class="specs">
Talla: ${p.talla} — Estado: ${p.estado}
</div>

<button class="btn-adquirir"
${p.disponible?'':'disabled'}
onclick="abrirModal('${p.nombre.replace(/'/g,"\\'")}')">

${p.disponible?'Adquirir':'Agotado'}

</button>

</div>

</div>

`;

}).join('');

}

function filtrar(cat){
document.querySelectorAll('.filter-btn')
.forEach(b=>b.classList.remove('active'));

event.target.classList.add('active');

cargar(cat);
}

function moveCarousel(pIndex,direction){

const track=document.getElementById(`track-${pIndex}`);

const totalFotos=prendas[pIndex].fotos.length;

if(!carruselPositions[pIndex])carruselPositions[pIndex]=0;

carruselPositions[pIndex]+=direction;

if(carruselPositions[pIndex]<0)
carruselPositions[pIndex]=totalFotos-1;

if(carruselPositions[pIndex]>=totalFotos)
carruselPositions[pIndex]=0;

track.style.transform=
`translateX(-${carruselPositions[pIndex]*100}%)`;
}

function abrirModal(nombre){
prendaSeleccionadaParaEnvio=nombre;
document.getElementById('modal').style.display='flex';
}

document
.getElementById('form-pedido')
.addEventListener('submit',function(e){

e.preventDefault();

const cliente=document.getElementById('nombre-cliente').value;

const msg=`¡Saludos Madlamb.! Soy ${cliente}. Me interesa comprar la pieza: ${prendaSeleccionadaParaEnvio}.`;

window.open(
"https://wa.me/50683087480?text="+encodeURIComponent(msg),
'_blank'
);

});

cargar();
