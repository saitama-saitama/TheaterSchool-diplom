import React from "react";
import { formLoginSchema, TFormLoginValues } from "./schemas";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { FormInput } from "@/components/shared/form/form-input";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";

interface Props {
    onClose?: VoidFunction;
}

export const LoginForm: React.FC<Props> = ({onClose}) => {
    const form = useForm<TFormLoginValues>({
        resolver: zodResolver(formLoginSchema),
        defaultValues: {
            login: "",
            password: "",
        },
    });

    const onSubmit = async (data: TFormLoginValues) => {
        try {
            const resp = await signIn("credentials", {
                ...data,
                redirect: false,
                callbackUrl: "/profile",
            });

            if (!resp?.ok) {
                throw Error();
            }

            toast.success("Вы успешно вошли в аккаунт");

            onClose?.();
        } catch (error) {
            console.error("Error LOGIN", error);
            toast.error("Не удалось войти в аккаунт");
        }
    }

    return <FormProvider {...form}>
        <form className="flex flex-col gap-5" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex justify-between items-center">
                <div className="mr-2">
                    <h2>Вход в аккаунт</h2>
                    <p className="">Введите логин</p>
                </div>
                <Image src="/icon/google.svg" alt="logo" width={30} height={30}></Image>
            </div>

            <FormInput name="login" label="Логин" required/>
            <FormInput name="password" label="Пароль" type="password" required/>

            <Button loading={form.formState.isSubmitting} className="h-12 text-base" type="submit">
                Войти
            </Button>
        </form>
    </FormProvider>
}