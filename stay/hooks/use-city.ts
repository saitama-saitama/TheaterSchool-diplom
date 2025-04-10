import { Api } from "@/services/api-client";
import { City } from "@prisma/client";
import React from "react";

export const useCity = () => {
    const [city, setCity] = React.useState<City[]>([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        async function fetchCity() {
            try {
                setLoading(true);
                const city = await Api.city.getAll();
                setCity(city);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        fetchCity();
    }, []);

    return { city, loading, }
}