import React from 'react';

export function ProductoCard({ producto, enCarrito, onAgregar }) {
  return (
    <div className={`producto-card ${enCarrito ? 'en-carrito' : ''}`}>
      <img src={producto.thumbnail} alt={producto.title} className="producto-img" />
      <div className="producto-info">
        <span className="producto-categoria">{producto.category}</span>
        <h3 className="producto-titulo">{producto.title}</h3>
        <p className="producto-precio">${producto.price.toFixed(2)}</p>
        <button
          onClick={() => onAgregar(producto)}
          disabled={enCarrito}
          className="btn-agregar"
        >
          {enCarrito ? 'Agregado' : 'Agregar'}
        </button>
      </div>
    </div>
  );
}