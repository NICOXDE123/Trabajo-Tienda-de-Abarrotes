// src/utils/validarStock.js

/**
 * Valida si el stock total (suma de lotes) cubre la cantidad solicitada.
 */
function validarStock(producto, cantidadNecesaria) {
  const total = producto.lotes.reduce((acc, lote) => acc + lote.cantidad, 0);
  return total >= cantidadNecesaria;
}

module.exports = { validarStock };
