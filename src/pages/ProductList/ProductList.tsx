import { Box, Typography } from "@mui/material";
import { Product } from "../../types/product";
import ProductCard from "../../components/ProductCard/ProductCard";

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Lista de Productos
      </Typography>
      {products.length === 0 ? (
        <Typography variant="body1">No hay productos disponibles.</Typography>
      ) : (
        products.map((product, i) => (
          <ProductCard key={i} product={product} />
        ))
      )}
    </Box>
  );
};

export default ProductList;
