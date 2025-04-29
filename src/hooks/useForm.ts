import { useState } from "react";

export function useForm<T extends Object>(initialForm: T) {
  const [formState, setFormState] = useState(initialForm);

  const onResetForm = () => {
    setFormState(initialForm);
  };

  const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = target;

    setFormState({
      ...formState,
      [name]: type === "number" ? Number(value) : value,
    });
  };

  return {
    formState,
    onInputChange,
    onResetForm,
  };
}
