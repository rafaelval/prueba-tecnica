import { renderHook, act } from "@testing-library/react";
import { useForm } from "./useForm";

describe("useForm", () => {
  const initialForm = {
    codigo: "",
    nombre: "",
    descripcion: "",
    cantidad: "",
  };

  it("debe inicializar el formulario correctamente", () => {
    const { result } = renderHook(() => useForm(initialForm));
    expect(result.current.formState).toEqual(initialForm);
  });

  it("debe cambiar los valores del formulario", () => {
    const { result } = renderHook(() => useForm(initialForm));

    act(() => {
      result.current.onInputChange({
        target: { name: "nombre", value: "Nuevo Producto" },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.formState.nombre).toBe("Nuevo Producto");
  });

  it("debe resetear el formulario al estado inicial", () => {
    const { result } = renderHook(() => useForm(initialForm));

    act(() => {
      result.current.onInputChange({
        target: { name: "nombre", value: "Nuevo Producto" },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    act(() => {
      result.current.onResetForm();
    });

    expect(result.current.formState).toEqual(initialForm);
  });
});
