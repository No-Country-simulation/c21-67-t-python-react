import { z } from "zod";

export const FormSchema = z
  .object({
    name: z
      .string()
      .min(3, {
        message: "Nombre debe tener al menos 3 caracteres.",
      })
      .regex(/(^[A-Za-z]{1,10})([ ]{0,1})([A-Za-z]{2,16})/, {
        message: "Ingrese un nombre valido",
      }),
    lastname: z
      .string()
      .min(3, {
        message: "Apellido debe tener al menos 3 caracteres.",
      })
      .regex(/(^[A-Za-z]{1,10})([ ]{0,1})([A-Za-z]{2,16})/, {
        message: "Ingrese un apellido valido",
      }),
    address: z
      .string()
      .min(3, {
        message: "Direccion debe tener al menos 3 caracteres.",
      })
      .regex(/(^[A-Za-z]{1,10})([ ]{0,1})([A-Za-z]{2,16})/, {
        message: "Ingrese una direccion valido",
      }),
    cellphone: z
      .string()
      .max(15, { message: "El celular debe tener como maximo 15 caracteres" })
      .transform((data) => Number(data)),
    email: z
      .string()
      .email({
        message: "Ingrese un correo valido",
      })
      .regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, {
        message: "Ingrese un correo valido.",
      }),
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
    confirmPassword: z
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
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "Las contraseñas no coinciden",
        path: ["confirmPassword"],
      });
    }
  });

export function onSubmit(values: z.infer<typeof FormSchema>) {
  // Do something with the form values.
  // ✅ This will be type-safe and validated.
  alert("Ya nos pondremos en contacto");
}
