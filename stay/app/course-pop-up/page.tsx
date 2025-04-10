"use client"

import { GroupVariants } from "@/components/shared/group-variants";
import Image from "next/image";
import "/styles/course-pop-up.scss";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { useState } from "react";
import toast from "react-hot-toast";

export default function CoursePage() {
    const { data: session } = useSession();
    const [isLoading, setIsLoading] = useState(false);
    const [selectedMethod, setSelectedMethod] = useState<string | undefined>(undefined);
    const [selectedPeriod, setSelectedPeriod] = useState<string | undefined>(undefined);
    const [selectedTeacher, setSelectedTeacher] = useState<string | undefined>(undefined);

    const itemsMethod = [
        { name: "Индивидуально", value: "1" },
        { name: "В паре", value: "2" },
    ];
    
    const itemsPeriod = [
        { name: "6 месяца", value: "1" },
        { name: "8 месяцев", value: "2" },
        { name: "1 год", value: "3", disabled: true },
    ];
    
    const itemsTeacher = [
        { name: "Регина Громова", value: "1", picture: "/img/image 39.jpg" },
        { name: "Жан Моро", value: "2", picture: "/img/image 39.jpg" },
    ];

    const writeToDatabase = async () => {
        const userId = Number(session.user.id);
    
        const methodName = itemsMethod.find(item => item.value === selectedMethod)?.name;
        const periodName = itemsPeriod.find(item => item.value === selectedPeriod)?.name;
        const teacherName = itemsTeacher.find(item => item.value === selectedTeacher)?.name;
    
        if (!methodName || !periodName || !teacherName) {
            throw new Error("Не удалось найти выбранные параметры.");
        }
    
        const response = await fetch("/api/sign-up", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                method: methodName,
                period: periodName,
                teacher: teacherName,
                courseName: "Нерассказанные истории",
                userId: userId,
            }),
        });
    
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(errorText || "Ошибка при записи на курс.");
        }
    
        return await response.json();
    };
    
    const sendEmail = async () => {
        const response = await fetch("/api/send-email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        });
    
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(errorText || "Ошибка при отправке email.");
        }
    
        return await response.json();
    };

    const handleSignUp = async () => {
        if (!session?.user?.id) {
            toast.error("Сессия не загружена. Пожалуйста, войдите в систему.");
            return;
        }
    
        if (!selectedMethod || !selectedPeriod || !selectedTeacher) {
            toast.error("Пожалуйста, выберите все параметры.");
            return;
        }
    
        setIsLoading(true);
    
        try {
            // Step 1: Write to the database
            const signUpData = await writeToDatabase();
            console.log("Sign-up successful:", signUpData);
    
            // Step 2: Send an email
            const emailData = await sendEmail();
            console.log("Email sent:", emailData);
    
            // Show success message
            toast.success("Вы успешно записаны на курс! Проверьте свою почту.");
        } catch (error) {
            console.error("Error:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="course-pop-up">
            <div className="course-pop-up__img">
                <Image src={"/img/course1.jpg"} alt={"img"} width={450} height={400} />
            </div>
            <div className="course-pop-up__btn-container">
                <h2 className="course-pop-up__title">Нерассказанные истории</h2>
                <GroupVariants
                    items={itemsMethod}
                    onClick={setSelectedMethod}
                    selectedValue={selectedMethod}
                />
                <GroupVariants
                    items={itemsPeriod}
                    onClick={setSelectedPeriod}
                    selectedValue={selectedPeriod}
                />
                <GroupVariants
                    items={itemsTeacher}
                    onClick={setSelectedTeacher}
                    selectedValue={selectedTeacher}
                />
                <Button className="course-pop-up__btn" onClick={handleSignUp} disabled={isLoading}>
                    {isLoading ? "Отправка..." : "Записаться"}
                </Button>
            </div>
        </section>
    );
}