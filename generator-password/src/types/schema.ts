import { z } from "zod";

export const formSchema = z.object({
  specialCharacters: z.boolean().optional(),
  passwordLength: z.number().gte(8, { message: "O tamanho mínimo para senha é 8 caracteres." }).lte(32, { message: "O tamanho máximo para senha é 32 caracteres" }),
})

export type formSchemaInputs = z.infer<typeof formSchema>