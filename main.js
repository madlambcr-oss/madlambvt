let prendaSeleccionadaParaEnvio="";

window.addEventListener("load",()=>{

document.getElementById("preloader").style.display="none";

cargarPrendas();

cargarBitacora();

});

function cargarPrendas(filtro="todas"){

const galeria=document.getElementById("galeria");

const filtradas=filtro==="todas"
? prendas
: prendas.filter(p=>p.categoria===filtro);

galeria.innerHTML=filtradas.map(p=>`

<div class="card ${p.disponible?'':'is-sold-out'}">

<div class="carousel-container">

<img src="${p.fotos[0]}" loading="lazy">

</div>

<div class="card-info">

<h3>${p.nombre}</h3>

<p class="precio">₡${p.precio}</p>

<div class="specs">

Talla: ${p.talla} — Estado: ${p.estado}

</div>

<button class="btn-adquirir"

${p.disponible?'':'disabled'}

onclick="abrirModal('${p.nombre}')">

${p.disponible?'Adquirir':'Agotado'}

</button>

</div>

</div>

`).join("");

}


function cargarBitacora(){

const grid=document.getElementById("bitacora-grid");

grid.innerHTML=bitacora.map(b=>`

<div class="bitacora-item"

onclick="abrirLectura('${b.titulo}','${b.texto}')">

<span class="meta-bitacora">

${b.fecha} — ${b.tiempo}

</span>

<img src="${b.imagen}" loading="lazy">

<h3>${b.titulo}</h3>

<p>${b.texto.substring(0,120)}...</p>

</div>

`).join("");

}



function filtrar(cat){

document.querySelectorAll(".filter-btn")
.forEach(b=>b.classList.remove("active"));

event.target.classList.add("active");

cargarPrendas(cat);

}



function abrirModal(nombre){

prendaSeleccionadaParaEnvio=nombre;

document.getElementById("modal").style.display="flex";

}

function cerrarModal(){

document.getElementById("modal").style.display="none";

}



document.getElementById("form-pedido")
.addEventListener("submit",function(e){

e.preventDefault();

const cliente=document.getElementById("nombre-cliente").value;

const msg=`¡Saludos Madlamb! Soy ${cliente}. Me interesa comprar: ${prendaSeleccionadaParaEnvio}`;

window.open(
"https://wa.me/50683087480?text="+encodeURIComponent(msg),
"_blank"
);

cerrarModal();

});



function abrirLectura(titulo,texto){

document.getElementById("lectura-titulo").innerText=titulo;

document.getElementById("lectura-texto").innerText=texto;

document.getElementById("modal-lectura").style.display="flex";

}

function cerrarLectura(){

document.getElementById("modal-lectura").style.display="none";

}



function showSection(id){

document.querySelectorAll(".content-section")
.forEach(s=>s.classList.remove("active"));

document.getElementById(id).classList.add("active");

}
