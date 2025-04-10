import { z } from "zod";

export const passwordSchema = z.string().min(2, {message: "Пароль должен быть не менее 6 символов"});

export const formLoginSchema = z.object({
    login: z.string().min(1, {message: "Введите значение"}),
    password: passwordSchema,
});

export const formRegisterSchema = formLoginSchema
    .merge(
        z.object({
            fullName: z.string().min(2, {message: "Введите имя и фамилию"}),
            email: z.string().email({message: "Корректно заполните поле"}),
            confirmPassword: passwordSchema,
        }),
    )
    .refine((data) => data.password === data.confirmPassword, {
        message: "Вы ввели разные пароли",
        path: ["confirmPassword"],
    });

export type TFormLoginValues = z.infer<typeof formLoginSchema>;
export type TFormRegisterValues = z.infer<typeof formRegisterSchema>;