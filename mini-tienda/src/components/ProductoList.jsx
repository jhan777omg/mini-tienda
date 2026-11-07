import React from 'react';
import { ProductoCard } from './ProductoCard';

export function ProductoList({ productos, carrito, onAgregar }) {
  return (
    <div className="producto-list">
      {productos.map((producto) => {
        const enCarrito = carrito.some((item) => item.id === producto.id);
        return (
          <ProductoCard
            key={producto.id}
            producto={producto}
            enCarrito={enCarrito}
            onAgregar={onAgregar}
          />
        );
      })}
    </div>
  );
}