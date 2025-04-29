import { render, screen, fireEvent } from '@testing-library/react';
import CreateProduct from './CreateProduct';

describe('CreateProduct', () => {
  const mockAddProduct = jest.fn();

  // beforeEach(() => {
  //   render(<CreateProduct addProduct={mockAddProduct} />);
  // });

  it('debe llenar y enviar el formulario correctamente', () => {
    fireEvent.change(screen.getByLabelText(/Código/i), { target: { value: 123 } });
    fireEvent.change(screen.getByLabelText(/Nombre/i), { target: { value: 'Producto Test' } });
    fireEvent.change(screen.getByLabelText(/Descripción/i), { target: { value: 'Descripción Test' } });
    fireEvent.change(screen.getByLabelText(/Cantidad/i), { target: { value: 5 } });

    fireEvent.click(screen.getByRole('button', { name: /Crear/i }));

    expect(mockAddProduct).toHaveBeenCalledWith(
      expect.objectContaining({
        codigo: 123,
        nombre: 'Producto Test',
        descripcion: 'Descripción Test',
        cantidad: 5,
        creacion: expect.any(Date),
      })
    );
  });

  it('debe resetear los campos después de crear el producto', () => {
    const codigoInput = screen.getByLabelText(/Código/i);
    const nombreInput = screen.getByLabelText(/Nombre/i);

    fireEvent.change(codigoInput, { target: { value: 999 } });
    fireEvent.change(nombreInput, { target: { value: 'Producto X' } });

    fireEvent.click(screen.getByRole('button', { name: /Crear/i }));

    expect(codigoInput).toHaveValue(999);
    expect(nombreInput).toHaveValue('Producto X');
  });
});
