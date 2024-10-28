import { z } from "zod";
export type FormValues = {
  email: string;
  password: string;
};
export const FormSchema = z.object({
  password: z
    .string({ message: "Ingrese una contraseña valida" })
    .regex(/(^[A-Za-z]{1,10})([ ]{0,1})([A-Za-z]{2,16})/, {
      message: "Ingrese una contraseña valida",
    })
    .min(8, {
      message: "Password debe tener al menos 10 caracteres.",
    })
    .max(8, {
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
