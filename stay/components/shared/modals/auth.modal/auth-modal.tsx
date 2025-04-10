"use client"

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import React from "react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { LoginForm } from "./form/login-form";
import { RegisterForm } from "./form/register-form";

interface Props {
    open: boolean;
    onClose: () => void;
}

export const AuthModal: React.FC<Props> = ({open, onClose}) => {
    const [type, setType] = React.useState<"login" | "register">("login");

    const onSwitchType = () => {
        setType(type == "login" ? "register" : "login");
    };

    const handleClose = () => {
        onClose();
    };

    return (
        <Dialog open={open} onOpenChange={handleClose}>
            <DialogContent className="w-[450px] bg-white p-10">
                {
                    type == "login" ? <LoginForm onClose={handleClose}/> : <RegisterForm onClose={handleClose} />
                }
                <hr />
                <div className="flex gap-2">
                    <Button
                        onClick={() => 
                            signIn("github", {
                                callbackUrl: "/",
                                redirect: true,
                            })
                        }
                        type="button"
                        variant={"secondary"}
                        className="gap-2 h-12 p-2 flex-1"
                    >
                        <Image src={"/icon/github.svg"} alt={"img"} width={30} height={30}></Image>
                        GitHub
                    </Button>
                    <Button
                        onClick={() => 
                            signIn("google", {
                                callbackUrl: "/",
                                redirect: true,
                            })
                        }
                        type="button"
                        variant={"secondary"}
                        className="gap-2 h-12 p-2 flex-1"
                    >
                    <Image src={"/icon/google.svg"} alt={"img"} width={30} height={30}></Image>
                    Google
                    </Button>
                </div>
                <Button variant="outline" onClick={onSwitchType} type="button" className="h-12">
                    {type !== "login" ? "Войти" : "Регистрация"}            
                </Button>
            </DialogContent>
        </Dialog>
    )
}