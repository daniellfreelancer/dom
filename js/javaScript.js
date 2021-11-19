// DOM

const p = document.createElement("p");
p.textContent = "Principio de Listado de productos";
p.appendChild
const div = document.querySelector("div.principal");
div.appendChild(p);

let items = [
  {id: 1, nombre: "Delantal", categoria: "Indumentaria", precio: 15000, color: "blanco" },
  {id: 2, nombre: "Remera", categoria: "Indumentaria", precio: 7990, color: "Rosa" },
  {id: 3, nombre: "Bowl", categoria: "Utencilios", precio: 4500, color: "Plateado" },
  {id: 4, nombre: "Espatula", categoria: "Utencilios", precio: 2500, color: "Negro" },

];
console.log(items);

let listItems = document.querySelector("#items");

for ( let i = 0; i < items.length; i++){

  listItems.innerHTML += `
    <h3>${items[i].nombre}</h3>
  `

}


