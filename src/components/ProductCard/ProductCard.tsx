import { Button, Card, CardContent, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { removeProduct } from "../../store/actions";
import { IProduct } from "../../store/global-state.interface";

interface ProductCardProps {
  product: IProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {

  const dispatch = useDispatch<any>();

  const handleDelete = (codigo: number) => {
    dispatch(removeProduct(codigo));
  };
  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <Typography variant="h6">{product.nombre}</Typography>
          <Typography variant="body2" color="text.secondary">
            Código: {product.codigo}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Descripción: {product.descripcion}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Cantidad: {product.cantidad}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Creado: {new Date(product.creacion).toLocaleString()}
          </Typography>
        </div>
        <div>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => handleDelete(product.codigo)}
          >
            Eliminar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
