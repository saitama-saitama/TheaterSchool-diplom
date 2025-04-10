"use client"

import { cn } from "@/lib/utils";
import React from "react";
import { Container } from "./container";
import Image from "next/image";
import "/styles/header.scss"
import { useSession, signIn } from "next-auth/react";
import { ProfileButton } from "./profile-button";
import { AuthModal } from "./modals/auth.modal/auth-modal";


interface Props {
    className?: string;
}

export const Header: React.FC<Props> = ({className}) => {
    const {data: session} = useSession();
    const [openAuthModal, setOpenAuthModal] = React.useState(false);
    return (
        <header className={cn("", className)} >
            <Container className="flex items-center justify-between">
                <div className="logo-container">
                    <Image src="/icon/logo.svg" alt="logo" width={155} height={50} priority></Image>
                </div>
                <div>
                    <nav>
                    <ul className="flex items-center justify-between nav">
                        <a href="#about" className="nav-items"><li>О нас</li></a>
                        <a href="#course" className="nav-items"><li>Курсы</li></a>
                        <a href="#performance" className="nav-items"><li>Билеты</li></a>
                        <a href="#contact" className="nav-items"><li>Контакты</li></a>
                    </ul>
                    </nav>
                </div>
                <div className="user-container">
                    <AuthModal open={openAuthModal} onClose={() => setOpenAuthModal(false)}/>
                    <ProfileButton onClickSingIn={() => setOpenAuthModal(true)}/>
                </div>
            </Container>
        </header>
    );
};