import { z } from "zod";
export type FormValues = {
  name: string;
  description: string;
};
export const FormSchema = z.object({
  name: z
    .string()
    .min(3, {
      message: "Nombre debe tener al menos 3 caracteres.",
    })
    .max(255, { message: "Nombre debe tener no mas de 255 caracteres." })
    .regex(/(^[A-Za-z]{1,10})([ ]{0,1})([A-Za-z]{2,16})/, {
      message: "Ingrese un nombre valido",
    }),
  description: z
    .string()
    .min(3, {
      message: "Descripcion debe tener al menos 3 caracteres.",
    })
    .regex(/(^[A-Za-z]{1,10})([ ]{0,1})([A-Za-z]{2,16})/, {
      message: "Ingrese una descripcion valido",
    }),
});

export function onSubmit(values: z.infer<typeof FormSchema>) {
  // Do something with the form values.
  // ✅ This will be type-safe and validated.
  alert("Ya nos pondremos en contacto");
}
