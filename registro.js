document.addEventListener("DOMContentLoaded", function() {
    const inventario = [
        { id: 1, nombre: "Producto A", precio: 10000 },
        { id: 2, nombre: "Producto B", precio: 20000 },
        { id: 3, nombre: "Producto C", precio: 30000 },
    ];

    const selectProducto = document.getElementById("producto");
    const carrito = [];
    
    // Cargar productos del inventario en el select
    inventario.forEach(producto => {
        const option = document.createElement("option");
        option.value = producto.id;
        option.textContent = `${producto.nombre} - $${producto.precio}`;
        selectProducto.appendChild(option);
    });

    const carritoUl = document.getElementById("carrito");
    const totalSinIvaSpan = document.getElementById("totalSinIva");
    const ivaSpan = document.getElementById("iva");
    const totalConIvaSpan = document.getElementById("totalConIva");

    document.getElementById("ventaForm").addEventListener("submit", function(e) {
        e.preventDefault();
        const productoId = parseInt(selectProducto.value);
        const cantidad = parseInt(document.getElementById("cantidad").value);

        // Buscar producto en inventario
        const productoSeleccionado = inventario.find(prod => prod.id === productoId);

        // Agregar al carrito
        const itemCarrito = {
            nombre: productoSeleccionado.nombre,
            precio: productoSeleccionado.precio,
            cantidad: cantidad,
            subtotal: productoSeleccionado.precio * cantidad
        };

        carrito.push(itemCarrito);
        actualizarCarrito();
    });

    function actualizarCarrito() {
        // Limpiar lista del carrito
        carritoUl.innerHTML = "";
        
        let totalSinIva = 0;

        carrito.forEach(item => {
            const li = document.createElement("li");
            li.textContent = `${item.nombre} x${item.cantidad} - $${item.subtotal}`;
            carritoUl.appendChild(li);
            totalSinIva += item.subtotal;
        });

        // Calcular IVA y total con IVA
        const iva = totalSinIva * 0.19;
        const totalConIva = totalSinIva + iva;

        // Actualizar totales en pantalla
        totalSinIvaSpan.textContent = `$${totalSinIva.toFixed(2)}`;
        ivaSpan.textContent = `$${iva.toFixed(2)}`;
        totalConIvaSpan.textContent = `$${totalConIva.toFixed(2)}`;
    }
});
