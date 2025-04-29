import { render, screen } from "@testing-library/react";
import ProductList from "./ProductList";
import { Product } from "../../types/product";

describe("ProductList", () => {
  const products: Product[] = [
    {
      codigo: 1,
      nombre: "Producto A",
      descripcion: "Desc A",
      cantidad: 5,
      creacion: new Date(),
    },
    {
      codigo: 2,
      nombre: "Producto B",
      descripcion: "Desc B",
      cantidad: 10,
      creacion: new Date(),
    },
  ];

  it("debe renderizar la lista de productos", () => {
    render(<ProductList products={products} />);

    expect(screen.getByText(/Producto A/i)).toBeInTheDocument();
    expect(screen.getByText(/Producto B/i)).toBeInTheDocument();
  });

  it("debe mostrar mensaje cuando no hay productos", () => {
    render(<ProductList products={[]} />);

    expect(
      screen.getByText(/No hay productos disponibles/i)
    ).toBeInTheDocument();
  });
});
