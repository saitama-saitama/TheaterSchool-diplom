import { prisma } from "./prisma-client";
import { hashSync } from "bcrypt";

async function up() {
    await prisma.user.createMany({
        data: [
            {
                fullName: "User",
                email: "user@gmail.com",
                login: "UserUser",
                password: hashSync("111", 10),
                role: "USER",
                verified: true,
            },
            {
                fullName: "Admin",
                email: "admin@gmail.com",
                login: "Admin Admin",
                password: hashSync("111", 10),
                role: "ADMIN",
                verified: true,
            }
        ]
    })
    await prisma.performance.createMany ({
        data: [
            {
                name: "После тьмы",
                imgUrl: "/img/performance1.jpg"
            },
            {
                name: "1984",
                imgUrl: "/img/performance2.jpg"
            },
            {
                name: "Свобода",
                imgUrl: "/img/performance3.jpg"
            },
            {
                name: "Fahrenheit 451",
                imgUrl: "/img/performance4.jpg"
            },
            {
                name: "Панелька",
                imgUrl: "/img/performance5.jpg"
            },
            {
                name: "Курс на свет в конце тунелля",
                imgUrl: "/img/performance6.jpg"
            },
            {
                name: "Вечный неудачник",
                imgUrl: "/img/performance7.jpg"
            },
            {
                name: "Помни",
                imgUrl: "/img/performance8.jpg"
            },
            {
                name: "В толпе",
                imgUrl: "/img/performance9.jpg"
            },
            {
                name: "Маленькие женщины",
                imgUrl: "/img/performance10.jpg"
            },
            {
                name: "Когда дружба становится оружеем",
                imgUrl: "/img/performance11.jpg"
            },
            {
                name: "Помоги мне взлететь",
                imgUrl: "/img/performance12.jpg"
            },
            {
                name: "Все, везде и сразу",
                imgUrl: "/img/performance13.jpg"
            },
            {
                name: "The blair witch project",
                imgUrl: "/img/performance14.jpg"
            },
            {
                name: "По наклонной",
                imgUrl: "/img/performance15.jpg"
            },
            {
                name: "Клетка ворона",
                imgUrl: "/img/performance16.jpg"
            },
            {
                name: "Цель оправдывает средства",
                imgUrl: "/img/performance17.jpg"
            },
            {
                name: "Открывая лес",
                imgUrl: "/img/performance18.jpg"
            },
            {
                name: "Паршивая овца",
                imgUrl: "/img/performance19.jpg"
            },
            {
                name: "Пути",
                imgUrl: "/img/performance20.jpg"
            },
            {
                name: "Салимские ведьмы",
                imgUrl: "/img/performance21.jpg"
            },
            {
                name: "Ошибка",
                imgUrl: "/img/performance22.jpg"
            },
            {
                name: "West side story",
                imgUrl: "/img/performance23.jpg"
            },
            {
                name: "Загадка старого особняка",
                imgUrl: "/img/performance24.jpg"
            }
        ]
    })
    await prisma.city.createMany ({
        data: [
            {
                name: "Минск"
            },
            {
                name: "Гродно"
            },
            {
                name: "Брест"
            },
            {
                name: "Москва"
            },
            {
                name: "Могилев"
            },
            {
                name: "Санкт-Петербург"
            },
            {
                name: "Мозырь"
            },
            {
                name: "Екатеринбург"
            },
            {
                name: "Витебск"
            }
        ]
    })
    await prisma.genre.createMany({
        data: [
            {
                name: "Драма"
            },
            {
                name: "Триллер"
            },
            {
                name: "Психологическая драма"
            },
            {
                name: "Комедия"
            },
            {
                name: "Детектив"
            },
            {
                name: "Фантастика"
            },
            {
                name: "Мьюзикл"
            },
            {
                name: "Трагедия"
            },
            {
                name: "Трагикомедия"
            },
        ]
    })
    await prisma.course.createMany({
        data:[
            {
                name: "Нерассказанные истории",
                imgUrl: "/img/course1.jpg",
            },
            {
                name: "Сквозь маску",
                imgUrl: "/img/course2.jpg",
            },
            {
                name: "Падение в тишину",
                imgUrl: "/img/course3.jpg",
            },
            {
                name: "Театр - дело вкуса",
                imgUrl: "/img/course4.jpg",
            },
            {
                name: "Суть человека",
                imgUrl: "/img/course5.jpg",
            },
            {
                name: "Речь и эмоции",
                imgUrl: "/img/course6.jpg",
            },
            {
                name: "Свет и тень танца",
                imgUrl: "/img/course7.jpg",
            },
            {
                name: "Искусство выражения",
                imgUrl: "/img/course8.jpg",
            },
        ]
    })
}

async function down() {
    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Performance" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "City" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Genre" RESTART IDENTITY CASCADE`;
}

async function main() {
    try {
        await down();
        await up();
    } catch (e) {
        console.error(e);
    }
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });