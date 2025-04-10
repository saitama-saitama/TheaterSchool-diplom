import { useRouter } from "next/navigation";
import qs from "qs";
import React from "react";
import { Filters } from "./use-filters";


export const useQueryFilters = (filters: Filters) => {
    const router = useRouter();
    React.useEffect(() => {
        const params = {
            ...filters.prices,
            age: Array.from(filters.age),
            city: Array.from(filters.selectedCity),
            genre: Array.from(filters.selectedGenre),
            time: Array.from(filters.time),
            language: Array.from(filters.language),
        }
        const query = qs.stringify(params, {
            arrayFormat: "comma",
        });
        router.push(`?${query}`, {
            scroll: false,
        });
    }, [filters, router]);
}