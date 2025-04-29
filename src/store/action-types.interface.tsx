import { IProduct } from "./global-state.interface";

export interface GetProducts {
  type: "GET_PRODUCTS";
  payload: IProduct[];
}

export interface AddProduct {
  type: "ADD_PRODUCT";
  payload: IProduct;
}

export interface SearchProduct {
  type: "SEARCH_PRODUCT";
  payload: string;
}

export type ActionTypes = GetProducts | AddProduct | SearchProduct;
