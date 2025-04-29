// src/components/ProductTableRow/ProductTableRow.tsx
import { TableRow, TableCell, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { IProduct } from "../../store/global-state.interface";

interface ProductTableRowProps {
  product: IProduct;
  onDelete: (codigo: number) => void;
}

const ProductTableRow: React.FC<ProductTableRowProps> = ({ product, onDelete }) => {
  return (
    <TableRow sx={{ height: "38px" }}>
      <TableCell>{product.codigo}</TableCell>
      <TableCell>{product.nombre}</TableCell>
      <TableCell>{product.descripcion}</TableCell>
      <TableCell>{product.cantidad}</TableCell>
      <TableCell>{new Date(product.creacion).toLocaleString()}</TableCell>
      <TableCell align="center">
        <IconButton
          color="error"
          size="small"
          onClick={() => onDelete(product.codigo)}
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default ProductTableRow;
