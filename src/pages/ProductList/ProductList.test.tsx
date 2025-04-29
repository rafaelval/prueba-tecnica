// import { render, screen } from "@testing-library/react";
// import { Provider } from "react-redux";
// import ProductList from "./ProductList";
// import { getAllProducts } from "../../store/actions";
// import { store } from "../../store/store";
// import { useDispatch } from "react-redux";

// jest.mock("react-redux", () => ({
//   ...jest.requireActual("react-redux"),
//   useDispatch: jest.fn(),
// }));

// describe("Componente ProductList", () => {
//   afterEach(() => {
//     jest.clearAllMocks();
//   });
 
//   test("muestra un mensaje cuando no hay productos", () => {
//     render(
//       <Provider store={store}>
//         <ProductList />
//       </Provider>
//     );

//     expect(
//       screen.getByText(/No hay productos disponibles/i)
//     ).toBeInTheDocument();
//   });

//   test("renders product cards when products are available", () => {

//     render(
//       <Provider store={store}>
//         <ProductList />
//       </Provider>
//     );

//     expect(screen.getByText(/Lista de Productos/i)).toBeInTheDocument();
//   });

//   test("dispatches getAllProducts on mount", () => {
//     const dispatch = jest.fn();
//     jest.spyOn(require("react-redux"), "useDispatch").mockReturnValue(dispatch);

//     render(<ProductList />);

//     expect(dispatch).toHaveBeenCalledWith(getAllProducts());
//   });
// });
export{}