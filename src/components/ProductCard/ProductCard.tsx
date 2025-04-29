import { Card, CardContent, Typography } from "@mui/material";
import { Product } from "../../types/product";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
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
      </CardContent>
    </Card>
  );
};

export default ProductCard;
