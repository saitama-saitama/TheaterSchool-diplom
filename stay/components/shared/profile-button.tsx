import { useSession } from "next-auth/react";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";


interface Props {
    onClickSingIn?: () => void;
    className?: string;
}

export const ProfileButton: React.FC<Props> = ({className, onClickSingIn}) => {
    const {data: session} = useSession();

    return (
        <div className={className}>
            {!session ? (
                <Button onClick={onClickSingIn}>
                    <Image src="/icon/user.svg" alt="logo" width={50} height={50} priority></Image> Войти
                </Button>
            ) : (
                <Link href={"/profile"}>
                    <Button className="flex items-center gap-2">
                        <Image src="/icon/user.svg" alt="logo" width={50} height={50} priority></Image> Профиль
                    </Button>
                </Link>
            )}
        </div>
    )
}