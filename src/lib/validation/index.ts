import * as z from "zod"
export const SignupValidation = z.object({
    name: z.string().min(2,{message:'Too Short'}).max(10,{message:'Too Long'}),
    username: z.string().min(2,{message:'Too Short'}).max(15,{message:'Too Long'}),
    email: z.string().email(),
    password: z.string().min(8,{message:'Password must be at least 8 characters'}).max(15,{message:'Too Long'}),
})
