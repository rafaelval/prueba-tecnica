import { Dispatch } from "redux";
import { IProduct } from "./global-state.interface";

export const getAllProducts = () => (dispatch: Dispatch) => {
  const products = localStorage.getItem("products") || "[]";
  const parsedProducts = JSON.parse(products);
  const normalizedProducts: IProduct[] = parsedProducts.map((p: any) => ({
    ...p,
    cantidad: Number(p.cantidad),
  }));
  dispatch({
    type: "GET_PRODUCTS",
    payload: normalizedProducts,
  });
};

export const addProduct = (product: IProduct) => (dispatch: Dispatch) => {
  const products = localStorage.getItem("products") || "[]";
  const parsedProducts = JSON.parse(products);
  parsedProducts.push(product);
  localStorage.setItem("products", JSON.stringify(parsedProducts));
  dispatch({
    type: "ADD_PRODUCT",
    payload: product,
  });
  console.log("producto añadido");
};

export const removeProduct = (codigo: number) => (dispatch: Dispatch) => {
  const products = localStorage.getItem("products") || "[]";
  const parsedProducts: IProduct[] = JSON.parse(products);

  // Asegúrate de que el código sea un número para evitar la comparación errónea
  const updatedProducts = parsedProducts.filter(product => product.codigo !== codigo);

  localStorage.setItem("products", JSON.stringify(updatedProducts));

  dispatch({
    type: "REMOVE_PRODUCT",
    payload: codigo,
  });

  console.log("Producto eliminado");
};
