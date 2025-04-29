import { Product } from "../types/product";

export function createProductFromForm(formState: any): Product {
  return {
    codigo: Number(formState.codigo),
    nombre: formState.nombre,
    descripcion: formState.descripcion,
    cantidad: Number(formState.cantidad),
    creacion: new Date(),
  };
}
