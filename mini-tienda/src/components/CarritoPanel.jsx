import React from 'react';

export function CarritoPanel({ carrito, onQuitar, onVaciar }) {
  const total = carrito.reduce((acc, item) => acc + item.price, 0);

  return (
    <aside className="carrito-panel">
      <h2>Carrito de Compras</h2>
      {carrito.length === 0 ? (
        <p className="carrito-vacio">El carrito está vacío</p>
      ) : (
        <>
          <ul className="carrito-lista">
            {carrito.map((item) => (
              <li key={item.id} className="carrito-item">
                <span className="carrito-item-titulo">{item.title}</span>
                <span className="carrito-item-precio">${item.price.toFixed(2)}</span>
                <button onClick={() => onQuitar(item.id)} className="btn-quitar">
                  Quitar
                </button>
              </li>
            ))}
          </ul>
          <div className="carrito-resumen">
            <p>
              Cantidad de items: <strong>{carrito.length}</strong>
            </p>
            <p className="carrito-total">
              Total: <strong>${total.toFixed(2)}</strong>
            </p>
            <button onClick={onVaciar} className="btn-vaciar">
              Vaciar carrito
            </button>
          </div>
        </>
      )}
    </aside>
  );
}