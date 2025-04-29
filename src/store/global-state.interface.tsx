export interface GlobalState {
  products: IProduct[];
}

export interface IProduct {
  codigo: number;
  nombre: string;
  descripcion: string;
  cantidad: number;
  creacion: Date;
}
