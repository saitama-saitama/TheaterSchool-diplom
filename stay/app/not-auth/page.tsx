import { InfoBlock } from "@/components/shared/info-block";

export default function UnauthorizedPage() {
    return(
        <div className="flex flex-col items-center justify-center mt-40">
            <InfoBlock 
                title={"Доступ запрещен"} 
                text={"Данную страницу могут просматривать только авторизованные пользователи"}
                imageUrl="/img/lock.png"
            />
        </div>
    );
}