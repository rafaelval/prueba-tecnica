import { Box, Button, TextField, Typography } from "@mui/material";
import { useForm } from "../../hooks/useForm";
import { Product } from "../../types/product";
import { createProductFromForm } from "../../utils/formUtils";

interface CreateProductProps {
  onAddProduct: (product: Product) => void;
}

const initialForm = {
  codigo: 0,
  nombre: "",
  descripcion: "",
  cantidad: "",
};

const CreateProduct: React.FC<CreateProductProps> = ({ onAddProduct }) => {
  const { formState, onInputChange, onResetForm } = useForm(initialForm);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newProduct = createProductFromForm(formState);
    onAddProduct(newProduct);
    onResetForm();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
    >
      <Typography variant="h5">Crear Producto</Typography>
      <TextField
        label="Código"
        name="codigo"
        type="number"
        value={formState.codigo}
        onChange={onInputChange}
        required
      />

      <TextField
        label="Nombre"
        name="nombre"
        value={formState.nombre}
        onChange={onInputChange}
        required
      />
      <TextField
        label="Descripción"
        name="descripcion"
        value={formState.descripcion}
        onChange={onInputChange}
        required
      />
      <TextField
        label="Cantidad"
        name="cantidad"
        type="number"
        value={formState.cantidad}
        onChange={onInputChange}
        required
      />
      <Button type="submit" variant="contained">
        Crear
      </Button>
    </Box>
  );
};

export default CreateProduct;
