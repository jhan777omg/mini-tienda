import { useState, useEffect } from 'react';
import { fetchProductos } from '../services/fetchProductos';

export function useProductos() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    fetchProductos()
      .then((data) => {
        if (isMounted) {
          setProductos(data);
          setCargando(false);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err.message);
          setCargando(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return { productos, cargando, error };
}