import {
  Box,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Paper,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { getAllProducts, removeProduct } from "../../store/actions";
import { GlobalDispatch } from "../../store/store";
import { IProduct } from "../../store/global-state.interface";
import ProductTableRow from "../../components/ProductTableRow/ProductTableRow";

const ProductList: React.FC = () => {
  const dispatch = useDispatch<GlobalDispatch>();
  const products = useSelector((state: any) => state.products);
  const [filterName, setFilterName] = useState("");
  const [sortBy, setSortBy] = useState<keyof IProduct>("nombre");

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const handleDelete = (codigo: number) => {
    dispatch(removeProduct(codigo));
  };

  const filteredProducts = useMemo(() => {
    return [...products]
      .filter((product: IProduct) =>
        product.nombre.toLowerCase().includes(filterName.toLowerCase())
      )
      .sort((a: IProduct, b: IProduct) => {
        if (sortBy === "creacion") {
          return new Date(a.creacion).getTime() - new Date(b.creacion).getTime();
        }
        if (typeof a[sortBy] === "string") {
          return (a[sortBy] as string).localeCompare(b[sortBy] as string);
        }
        return (a[sortBy] as number) - (b[sortBy] as number);
      });
  }, [products, filterName, sortBy]);

  return (
    <Box sx={{ maxWidth: "1300px", mx: "auto"}}>
      <Typography
        variant="h5"
        gutterBottom
        sx={{ textAlign: "center", fontWeight: "bold" }}
      >
        Lista de Productos
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          justifyContent: "space-between",
          mb: 2,
        }}
      >
        <TextField
          label="Filtrar por nombre"
          variant="outlined"
          size="small"
          value={filterName}
          onChange={(e) => setFilterName(e.target.value)}
          sx={{ minWidth: 200 }}
        />
        <FormControl size="small" sx={{ minWidth: 200 }}>
          <InputLabel>Ordenar por</InputLabel>
          <Select
            value={sortBy}
            label="Ordenar por"
            onChange={(e) =>
              setSortBy(e.target.value as keyof IProduct)
            }
          >
            <MenuItem value="nombre">Nombre</MenuItem>
            <MenuItem value="cantidad">Cantidad</MenuItem>
            <MenuItem value="codigo">Código</MenuItem>
            <MenuItem value="creacion">Creación</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {filteredProducts.length === 0 ? (
        <Typography variant="body1">No hay productos disponibles.</Typography>
      ) : (
        <TableContainer component={Paper} elevation={3}>
          <Table sx={{ minWidth: 900 }} size="small">
            <TableHead>
              <TableRow>
                <TableCell><b>Código</b></TableCell>
                <TableCell><b>Nombre</b></TableCell>
                <TableCell><b>Descripción</b></TableCell>
                <TableCell><b>Cantidad</b></TableCell>
                <TableCell><b>Creación</b></TableCell>
                <TableCell align="center"><b>Acción</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredProducts.map((product: IProduct) => (
                <ProductTableRow
                  key={product.codigo}
                  product={product}
                  onDelete={handleDelete}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default ProductList;
