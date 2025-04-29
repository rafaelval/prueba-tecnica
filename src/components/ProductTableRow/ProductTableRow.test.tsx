import { render, screen } from "@testing-library/react";
import ProductTableRow from "./ProductTableRow";
import { IProduct } from "../../store/global-state.interface";

describe("ProductCard", () => {
  const product: IProduct = {
    codigo: 1,
    nombre: "Producto 1",
    descripcion: "Una descripción",
    cantidad: 10,
    creacion: new Date(),
  };

  it("debe mostrar toda la información del producto", () => {
    render(<ProductTableRow product={product} onDelete={jest.fn} />);

    expect(screen.getByText("Producto 1")).toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("Una descripción")).toBeInTheDocument();
    expect(screen.getByText("10")).toBeInTheDocument();
  });
});
