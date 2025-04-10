import React from "react";
import Image from "next/image";
import "/styles/performance.scss";
import Link from 'next/link';
import { Button } from "@/components/ui/button"

export default function CoursePage() {
    return (
        <section className="course">
            <Link href="/course-pop-up" className="grid place-items-center">
                <Button className="course__btn">Записаться на курс</Button>
            </Link>
        </section>
    )
}