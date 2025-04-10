import { Api } from "@/services/api-client";
import { Genre } from "@prisma/client";
import React from "react";

export const useGenre = () => {
    const [genre, setGenre] = React.useState<Genre[]>([]);
    const [loadingGenre, setLoadingGenre] = React.useState(true);

    React.useEffect(() => {
        async function fetchCity() {
            try {
                setLoadingGenre(true);
                const city = await Api.city.getAll();
                setGenre(city);
            } catch (error) {
                console.log(error);
            } finally {
                setLoadingGenre(false);
            }
        }
        fetchCity();
    }, []);

    return { genre, loadingGenre, }
}