import z from "zod";


export const LoginSchema = z.object({
email: z.string().email({message:"email is required"}),
password: z.string().min(1,{message: "password is required"})
});



export const UserRegisterSchema = z.object({
    email: z.string().email({message:"email is required"}),
    password: z.string().min(1,{message: "password is required"}),
    username: z.string().optional()
    });






export const CreatorRegisterSchema = z.object({
    title: z.string().min(1, "Title is required"),
    description: z.string().min(1, "Description is required"),
    website: z.string().optional(), // Optional since it was commented out
    social_link: z.string(),
    expertise: z.string().min(1, "Expertise is required"),
    // bank_account: z.number().nonnegative("Bank account must be a number"),
    // bank_account: z
    // .string()
    // .transform((val) => Number(val)) // Transform string to number
    // .refine((val) => !isNaN(val), "Invalid bank account number"),
    // avatar: z.instanceof(File).refine(file => file.size > 0, "Avatar is required"),
});
    
    



export type TLogin = z.infer<typeof LoginSchema>;
export type TUserRegister = z.infer<typeof UserRegisterSchema>;
export type TCreatorRegister = z.infer<typeof CreatorRegisterSchema>;
