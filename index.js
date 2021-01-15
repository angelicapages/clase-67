
const productos = [
  {
    nombre: 'Zapato negro',
    tipo: 'zapato',
    color: 'negro',
    img: './img/taco-negro.jpg',
  },
  {
    nombre: 'Zapato azul',
    tipo: 'zapato',
    color: 'azul',
    img: './img/taco-azul.jpg',
  },
  {
    nombre: 'Bota negra',
    tipo: 'bota',
    color: 'negro',
    img: './img/bota-negra.jpg',
  },
  {
    nombre: 'Bota azul',
    tipo: 'bota',
    color: 'azul',
    img: './img/bota-azul.jpg',
  },
  {
    nombre: 'Zapato rojo',
    tipo: 'zapato',
    color: 'rojo',
    img: './img/zapato-rojo.jpg',
  },
];


const form = document.forms[0];
const listado = document.getElementById('lista-de-productos');
const filtro = document.querySelector("#filtro")
const selectTipo = document.querySelector("#tipo")
const selectColor = document.querySelector("#color")

productos.map(zapato => {

  form.onsubmit = (e) => {
    e.preventDefault()

    let zapatoFiltrado = productos.filter(zapato => {
      if (zapato.tipo && selectColor.value) {
        return zapato.tipo === selectTipo.value && zapato.color === selectColor.value
      }
      else if (selectTipo.value) {
        return zapato.tipo === selectTipo.value
      }


      else if (selectColor.value) {
        return zapato.color === selectColor.value
      }
      else {
        return zapato
      }
    });

    console.log(zapatoFiltrado)
 
    let crearHtml = (zapato , zapatoFiltrado) => {
      listado.innerHTML = ` `
      if (zapatoFiltrado !== " "){
        listado.innerHTML = `
        <div class="contenedorProducto">
        <div class="foto"><img src="${zapato.img}"></div>
        <div class="titulo">${zapato.nombre}</div>
        </div>
        `;
      }
      else{
      listado.innerHTML = `
    <div class="contenedorProducto">
    <div class="foto"><img src="${zapato.img}"></div>
    <div class="titulo">${zapato.nombre}</div>
    </div>
    `;
      }
    }
     crearHtml(zapatoFiltrado)
  }
})

