import { render, screen, fireEvent } from "@testing-library/react";
import CreateProduct from "./CreateProduct";
import configureMockStore from "redux-mock-store";
import { thunk } from "redux-thunk";
import { GlobalState } from "../../store/global-state.interface";
import { Provider } from "react-redux";

let initialState: GlobalState = { products: [] };

const middlewares: any = [thunk];
const mockStoreConfigure = configureMockStore(middlewares);
let store = mockStoreConfigure({ ...initialState });

describe("CreateProduct", () => {
  const mockAddProduct = jest.fn();
  store.dispatch = mockAddProduct;

  beforeEach(() => {
    render(
      <Provider store={store}>
        <CreateProduct />
      </Provider>
    );
  });

  test("debe llenar y enviar el formulario correctamente", () => {
    fireEvent.change(screen.getByLabelText(/Código/i), {
      target: { value: 123 },
    });
    fireEvent.change(screen.getByLabelText(/Nombre/i), {
      target: { value: "Producto Test" },
    });
    fireEvent.change(screen.getByLabelText(/Descripción/i), {
      target: { value: "Descripción Test" },
    });
    fireEvent.change(screen.getByLabelText(/Cantidad/i), {
      target: { value: 5 },
    });
    fireEvent.click(screen.getByRole("button", { name: /Crear/i }));
    expect(store.dispatch).toHaveBeenCalled();
  });

  test("debe resetear los campos después de crear el producto", () => {
    const codigoInput = screen.getByLabelText(/Código/i);
    const nombreInput = screen.getByLabelText(/Nombre/i);

    fireEvent.change(codigoInput, { target: { value: 999 } });
    fireEvent.change(nombreInput, { target: { value: "Producto X" } });

    fireEvent.click(screen.getByRole("button", { name: /Crear/i }));

    expect(codigoInput).toHaveValue(999);
    expect(nombreInput).toHaveValue("Producto X");
  });
});
