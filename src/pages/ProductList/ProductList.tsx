import { Box, Typography } from "@mui/material";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllProducts } from "../../store/actions";
import { GlobalDispatch } from "../../store/store";
import { useSelector } from "react-redux";
import { IProduct } from "../../store/global-state.interface";


const ProductList: React.FC = () => {

  const products = useSelector((state: any) => state.products);
  const dispatch = useDispatch<GlobalDispatch>();

  useEffect(() => {
    dispatch(getAllProducts()); // eslint-disable-next-line
  }, [dispatch]);

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Lista de Productos
      </Typography>
      {products.length === 0 ? (
        <Typography variant="body1">No hay productos disponibles.</Typography>
      ) : (
        products.map((product:IProduct) => (
          <Box key={product.codigo} sx={{ marginBottom: 2 }}>
            <ProductCard product={product} />
          </Box>
        ))
      )}
    </Box>
  );
};

export default ProductList;
