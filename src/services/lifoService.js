// src/services/lifoService.js

/**
 * Aplica LIFO (Last In, First Out) a los lotes de un producto.
 * Descuenta desde el lote más reciente hacia atrás.
 *
 * @param {Product} producto - Documento de producto de Mongoose
 * @param {number} cantidadSolicitada - Cantidad total que se desea descontar
 * @throws Error si no hay stock suficiente
 */
async function aplicarLIFO(producto, cantidadSolicitada) {
  let cantidadRestante = cantidadSolicitada;

  // Ordenar lotes por fecha DESC (más nuevo primero)
  producto.lotes.sort((a, b) => b.fechaIngreso - a.fechaIngreso);

  for (const lote of producto.lotes) {
    if (cantidadRestante <= 0) break;

    if (lote.cantidad <= cantidadRestante) {
      cantidadRestante -= lote.cantidad;
      lote.cantidad = 0; // Lote agotado
    } else {
      lote.cantidad -= cantidadRestante;
      cantidadRestante = 0;
    }
  }

  // Si aún queda cantidad, no había suficiente stock
  if (cantidadRestante > 0) {
    throw new Error("Stock insuficiente según método LIFO.");
  }

  // Eliminar lotes vacíos
  producto.lotes = producto.lotes.filter((l) => l.cantidad > 0);

  return producto;
}

module.exports = { aplicarLIFO };
