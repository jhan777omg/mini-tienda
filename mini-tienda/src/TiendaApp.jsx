import React, { useState } from 'react';
import { useProductos } from './hooks/useProductos';
import { ProductoList } from './components/ProductoList';
import { CarritoPanel } from './components/CarritoPanel';

export function TiendaApp() {
  const { productos, cargando, error } = useProductos();
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    if (!carrito.some((item) => item.id === producto.id)) {
      setCarrito([...carrito, producto]);
    }
  };

  const quitarDelCarrito = (id) => {
    setCarrito(carrito.filter((item) => item.id !== id));
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  if (cargando) {
    return <div className="loading">Cargando...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}. Verifique su conexión a internet.</div>;
  }

  return (
    <div className="tienda-container">
      <header className="tienda-header">
        <h1>Mini Tienda</h1>
      </header>
      <div className="tienda-main">
        <ProductoList
          productos={productos}
          carrito={carrito}
          onAgregar={agregarAlCarrito}
        />
        <CarritoPanel
          carrito={carrito}
          onQuitar={quitarDelCarrito}
          onVaciar={vaciarCarrito}
        />
      </div>
    </div>
  );
}

export default TiendaApp;