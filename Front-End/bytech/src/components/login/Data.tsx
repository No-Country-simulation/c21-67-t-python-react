import { z } from "zod";
export type FormValues = {
  email: string;
  password: string;
};
export const FormSchema = z.object({
  password: z
    .string({ message: "Ingrese una contraseña valida" })
    .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,10}$/, {
      message: "Ingrese una contraseña valida",
    })
    .min(8, {
      message: "Password debe tener al menos 8 caracteres.",
    })
    .max(10, {
      message: "Password debe tener maximo 10 caracteres.",
    }),
  email: z
    .string()
    .email({
      message: "Ingrese un correo valido",
    })
    .regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, {
      message: "Ingrese un correo valido.",
    }),
});

export function onSubmit(values: z.infer<typeof FormSchema>) {
  // Do something with the form values.
  // ✅ This will be type-safe and validated.
  alert("Ya nos pondremos en contacto");
}
