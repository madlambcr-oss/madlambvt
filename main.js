let prendaSeleccionada="";

function cargarPrendas(filtro="todas"){

const galeria=document.getElementById("galeria");

const filtradas=
filtro==="todas"
? prendas
: prendas.filter(p=>p.categoria===filtro);

galeria.innerHTML=filtradas.map(p=>`

<div class="card">

<img src="${p.fotos[0]}">

<div class="card-info">

<h3>${p.nombre}</h3>

<p class="precio">₡${p.precio}</p>

<div class="specs">
Talla: ${p.talla} — Estado: ${p.estado}
</div>

<button class="btn-adquirir"
onclick="abrirModal('${p.nombre}')">
Adquirir
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

<span>${b.fecha} — ${b.tiempo}</span>

<img src="${b.imagen}">

<h3>${b.titulo}</h3>

<p>${b.texto.substring(0,120)}...</p>

</div>

`).join("");

}



function filtrar(cat){

cargarPrendas(cat);

}



function abrirModal(nombre){

prendaSeleccionada=nombre;

document.getElementById("modal").style.display="flex";

}



document
.getElementById("form-pedido")
.addEventListener("submit",function(e){

e.preventDefault();

const cliente=
document.getElementById("nombre-cliente").value;

const msg=
`¡Saludos Madlamb.! Soy ${cliente}. Me interesa comprar la pieza: ${prendaSeleccionada}.`;

window.open(
"https://wa.me/50683087480?text="+encodeURIComponent(msg),
"_blank"
);

});



function showSection(id){

document
.querySelectorAll(".content-section")
.forEach(s=>s.classList.remove("active"));

document
.getElementById(id)
.classList.add("active");

}



cargarPrendas();
cargarBitacora();
