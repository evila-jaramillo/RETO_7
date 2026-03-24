let carrito = [];
let total = 0;

function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  total += precio;
  actualizarCarrito();
}

function actualizarCarrito() {
  const lista = document.getElementById("lista-carrito");
  const totalElemento = document.getElementById("total");
  const contador = document.getElementById("contador");

  lista.innerHTML = "";

  carrito.forEach((producto, index) => {
    const li = document.createElement("li");
    li.textContent = `${producto.nombre} - $${producto.precio}`;

    // Botón eliminar
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "X";
    btnEliminar.style.marginLeft = "10px";
    btnEliminar.style.background = "#e60073";
    btnEliminar.style.color = "white";
    btnEliminar.style.border = "none";
    btnEliminar.style.borderRadius = "5px";
    btnEliminar.style.cursor = "pointer";
    btnEliminar.onclick = () => {
      eliminarDelCarrito(index);
    };

    li.appendChild(btnEliminar);
    lista.appendChild(li);
  });

  totalElemento.textContent = total.toFixed(2);
  contador.textContent = carrito.length;
}

function eliminarDelCarrito(indice) {
  total -= carrito[indice].precio;
  carrito.splice(indice, 1);
  actualizarCarrito();
}

function toggleCarrito() {
  const panel = document.getElementById("carrito-panel");
  if (panel.style.display === "block") {
    panel.style.display = "none";
  } else {
    panel.style.display = "block";
  }
}

function realizarPago() {
  if (carrito.length === 0) {
    alert("El carrito está vacío.");
    return;
  }
  alert(`Gracias por su compra. Total a pagar: $${total.toFixed(2)}`);
  carrito = [];
  total = 0;
  actualizarCarrito();
  toggleCarrito();
}