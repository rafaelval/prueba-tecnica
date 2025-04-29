import { Dispatch } from "redux";
import { ActionTypes } from "./action-types.interface";


export const getAllProducts = () => (dispatch: Dispatch) => {
  const products = localStorage.getItem("products") || "[]";
  const parsedProducts = JSON.parse(products);
  dispatch({
    type: "GET_PRODUCTS",
    payload: parsedProducts,
  });
  console.log("productos cargados")
};
