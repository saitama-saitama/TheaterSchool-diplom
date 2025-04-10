import { useRouter, useSearchParams } from "next/navigation";
import { useSet } from "react-use";
import React from "react";

interface PriceProps {
    priceFrom?: number;
    priceTo?: number;
}

interface QueryFilters extends PriceProps {
    age: string;
    city: string;
    genre: string;
    time: string;
    language: string;
}

export interface Filters {
    prices: PriceProps;
    selectedCity: Set<string>;
    selectedGenre: Set<string>;
    age: Set<string>;
    time: Set<string>;
    language: Set<string>;
}

interface ReturnProps extends Filters {
    setPrices: (name: keyof PriceProps, value: number) => void;
    setAge: (value: string)=> void;
    setTime: (value: string)=> void;
    setLanguage: (value: string)=> void;
    setSelectedCity: (value: string)=> void;
    setSelectedGenre: (value: string)=> void;
}

export const useFilters = (): ReturnProps => {
    const searchParams = useSearchParams() as unknown as Map<keyof QueryFilters, string>;

    const [selectedCity, {toggle: toggleCity}] = useSet(new Set<string>(searchParams.get("city")?.split(",")));
    const [selectedGenre, {toggle: toggleGenre}] = useSet(new Set<string>(searchParams.get("genre")?.split(",")));
    const [age, {toggle: toggleAge}] = useSet(new Set<string>(searchParams.get("age") ? searchParams.get("age")?.split(",") : []));
    const [time, {toggle: toggleTime}] = useSet(new Set<string>(searchParams.get("time") ? searchParams.get("time")?.split(",") : []));
    const [language, {toggle: toggleLanguage}] = useSet(new Set<string>(searchParams.get("language") ? searchParams.get("language")?.split(",") : []));
    const [prices, setPrices] = React.useState<PriceProps>({
        priceFrom: Number(searchParams.get("priceFrom")) || undefined,
        priceTo: Number(searchParams.get("priceTo")) || undefined,
    });

    const updatePrice = (name: keyof PriceProps, value: number) => {
        setPrices((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return {selectedCity, selectedGenre, age, time, language, prices, setPrices: updatePrice, setAge: toggleAge, setTime: toggleTime, setLanguage: toggleLanguage, setSelectedCity: toggleCity, setSelectedGenre: toggleGenre}
}