import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import ProductList from "./ProductList";
import { thunk } from "redux-thunk";
import configureMockStore from "redux-mock-store";
import { GlobalState } from "../../store/global-state.interface";

let initialState: GlobalState = { products: [] };

const middlewares: any = [thunk];
const mockStoreConfigure = configureMockStore(middlewares);
let store = mockStoreConfigure({ ...initialState });

const mockDispatch = jest.fn();
store.dispatch = mockDispatch;

const productsTest = [
  {
    codigo: 10,
    nombre: "Producto A",
    descripcion: "Descripción A",
    cantidad: 12,
    creacion: new Date(),
  },
  {
    codigo: 2,
    nombre: "Producto B",
    descripcion: "Descripción B",
    cantidad: 12,
    creacion: new Date(),
  },
];

describe("Componente ProductList", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("muestra un mensaje cuando no hay productos", () => {
    render(
      <Provider store={store}>
        <ProductList />
      </Provider>
    );

    expect(
      screen.getByText(/No hay productos disponibles/i)
    ).toBeInTheDocument();
  });

  test("renders product cards when products are available", () => {
    initialState = { ...initialState, products: productsTest };
    store = mockStoreConfigure({ ...initialState });
    render(
      <Provider store={store}>
        <ProductList />
      </Provider>
    );

    expect(screen.getByText(/Lista de Productos/i)).toBeInTheDocument();
    expect(screen.getByText(/Producto A/i)).toBeInTheDocument();
    expect(screen.getByText(/Producto B/i)).toBeInTheDocument();
  });

  test("Debe permitir borrar un producto", () => {
    initialState = { ...initialState, products: productsTest };
    store = mockStoreConfigure({ ...initialState });
    jest.spyOn(store, "dispatch");
    render(
      <Provider store={store}>
        <ProductList />
      </Provider>
    );
    const deleteButtons = screen.getByTestId("delete_button_10");
    fireEvent.click(deleteButtons);
    expect(store.dispatch).toHaveBeenCalled();
  });
});
