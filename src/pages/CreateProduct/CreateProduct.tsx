import { Box, Button, Snackbar, TextField, Typography, Alert } from "@mui/material";
import { useForm } from "../../hooks/useForm";
import { createProductFromForm } from "../../utils/formUtils";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addProduct } from "../../store/actions";
import { GlobalDispatch } from "../../store/store";
import { IProduct } from "../../store/global-state.interface";

const initialForm = {
  codigo: 0,
  nombre: "",
  descripcion: "",
  cantidad: "",
};

const CreateProduct: React.FC = () => {
  const { formState, onInputChange, onResetForm } = useForm(initialForm);
  const dispatch = useDispatch<GlobalDispatch>();
  const products = useSelector((state: any) => state.products);

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">("success");

  const handleSnackbarClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") return;
    setSnackbarOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newProduct = createProductFromForm(formState);

    const codigoYaExiste = products.some(
      (product: IProduct) => product.codigo === newProduct.codigo
    );

    if (codigoYaExiste) {
      setSnackbarMessage("Ya existe un producto con ese código.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
      return;
    }

    dispatch(addProduct(newProduct));
    onResetForm();

    setSnackbarMessage("Producto creado exitosamente.");
    setSnackbarSeverity("success");
    setSnackbarOpen(true);
  };

  return (
    <>
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

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default CreateProduct;
