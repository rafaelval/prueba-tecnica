import { IProduct } from "../store/global-state.interface";

export function createProductFromForm(formState: any): IProduct {
  return {
    codigo: Number(formState.codigo),
    nombre: formState.nombre,
    descripcion: formState.descripcion,
    cantidad: Number(formState.cantidad),
    creacion: new Date(),
  };
}
