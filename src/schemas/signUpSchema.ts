import {z} from 'zod'

export const usernameValidations = z
    .string()
    .min(2, "Username must be atleast 2 characters")
    .max(20, "Username must be atmost 20 characters")
    .regex(/^[a-zA-Z0-9_]+$/, "Username must not contain special character")



export const signUpSchema = z.object({
    username: usernameValidations,
    email: z.string().email({message:"invalid email address"}),
    password: z.string().min(6,{message:"minimum password must be atleast 6 characters"})
})