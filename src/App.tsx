import { useEffect, useState } from 'react';
import { Container, Divider } from '@mui/material';
import { Product } from './types/product';
// import CreateProduct from './pages/CreateProduct/CreateProduct';
import ProductList from './pages/ProductList/ProductList';
import { getAllProducts } from './store/actions';
import { useDispatch } from 'react-redux';


function App() {
  const [products, setProducts] = useState<Product[]>([]);

  // const handleAddProduct = (product: Product) => {
  //   setProducts((prev) => [...prev, product]);
  // };
  const dispatch = useDispatch<any>()
  

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])
  

  return (
    <Container maxWidth="sm" sx={{ paddingTop: 4 }}>
      {/* <CreateProduct onAddProduct={handleAddProduct} />
      <Divider sx={{ marginY: 4 }} /> */}
      <ProductList products={products} />
    </Container>
  );
}

export default App;
