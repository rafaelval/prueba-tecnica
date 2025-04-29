import { render, screen } from '@testing-library/react';
import ProductCard from './ProductCard';
import { Product } from '../../types/product';

describe('ProductCard', () => {
  const product: Product = {
    codigo: 1,
    nombre: 'Producto 1',
    descripcion: 'Una descripción',
    cantidad: 10,
    creacion: new Date(),
  };

  it('debe mostrar toda la información del producto', () => {
    render(<ProductCard product={product} />);

    expect(screen.getByText(/Producto 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Código: 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Una descripción/i)).toBeInTheDocument();
    expect(screen.getByText(/Cantidad: 10/i)).toBeInTheDocument();
  });
});
