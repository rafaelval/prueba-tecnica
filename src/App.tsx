import { Container, AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useState } from "react";
import ProductList from './pages/ProductList/ProductList';
import CreateProduct from './pages/CreateProduct/CreateProduct';

function App() {
  
  const [showList, setShowList] = useState(true); // alternar vista

  const toggleView = () => setShowList(!showList);

  return (
    <>
        <AppBar position="static" color="primary" sx={{ borderRadius: 3}}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h5">
            {showList ? "Lista de Productos" : "Crear Producto"}
          </Typography>
          <Button color="inherit" onClick={toggleView}>
            {showList ? "Crear Producto" : "Ver Productos"}
          </Button>
        </Toolbar>
      </AppBar>

      {/* Contenido */}
      <Container maxWidth="xl" sx={{ paddingTop: 4 }}>
        {showList ? (
          <ProductList/>
        ) : (
          <CreateProduct />
        )}
      </Container>
    </>
  );
}

export default App;
