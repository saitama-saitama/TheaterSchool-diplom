"use client"

import React from "react";
import "/styles/filters.scss";
import { Input } from "@/components/ui/input";
import { RangeSlider } from "@/components/shared/range-slider";
import { CheckboxFiltersGroup } from "./checkbox-group";
import { useCity } from "@/hooks/use-city";
import { useFilters } from "@/hooks/use-filters";
import { useQueryFilters } from "@/hooks/use-query-filters";
import { useGenre } from "@/hooks/use-genre";

interface Props {
    className?: string;
}

export const Filters: React.FC<Props> = ({className}) => {
    const {city, loading} = useCity();
    const {genre, loadingGenre} = useGenre();

    const filters = useFilters();
    
    useQueryFilters(filters);
    
    const itemsCity = city.map((item) => ({value: String(item.id), text:item.name}))
    const itemsGenre = genre.map((item) => ({value: String(item.id), text:item.name}))

    const updatePrices = (prices: number[]) => {
        filters.setPrices("priceFrom", prices[0]);
        filters.setPrices("priceTo", prices[1]);
    }
    
    return (
        <div className="filters-container">
            <p className="filters-title">Фильтрация:</p>
            <div className="filters-content-container">
                <div className="filters-left-container">
                    <div className="filters-input-container">
                    <p className="title">Цена от/до:</p>
                        <Input className="filters-input" type="number" placeholder="0" min={0} max={300} value={String(filters.prices.priceFrom)} onChange={(e) => filters.setPrices("priceFrom", Number(e.target.value))}></Input>
                        <Input className="filters-input" type="number" placeholder="300" min={100} max={300} value={String(filters.prices.priceTo)} onChange={(e) => filters.setPrices("priceTo", Number(e.target.value))}></Input>
                    </div>
                    <RangeSlider className="filters-slider" min={0} max={300} step={10} value={[filters.prices.priceFrom || 0, filters.prices.priceTo || 300]} onValueChange={updatePrices}></RangeSlider>
                    <div className="filters-left-checkbox-container">
                        <CheckboxFiltersGroup
                            title="Ограничение по возрасту:"
                            name="age"
                            className="filters-city-checkbox"
                            onClickCheckbox={filters.setAge}
                            selectedIds={filters.age} 
                            items={[
                                {text: "6-12 лет", value: "1"},
                                {text: "12-16 лет", value: "2"},
                                {text: "16-18 лет", value: "3"},
                                {text: ">18 лет", value: "4"}
                            ]}                        
                        />
                    </div>
                </div>
                <div className="filters-city-container">
                    <CheckboxFiltersGroup
                        title="Город:"
                        name="city"
                        className="filters-city-checkbox"
                        limit={6}
                        loading={loading}
                        defaultItems={itemsCity.slice(0, 6)}
                        items={itemsCity}  
                        onClickCheckbox={filters.setSelectedCity}
                        selectedIds={filters.selectedCity}
                    />
                </div>
                <div className="filters-genre-container">
                    <CheckboxFiltersGroup
                        title="Жанр:"
                        name="genre"
                        className="filters-genre-checkbox"
                        limit={6}
                        loading={loadingGenre}
                        defaultItems={itemsGenre.slice(0, 6)}
                        items={itemsGenre}  
                        onClickCheckbox={filters.setSelectedGenre}
                        selectedIds={filters.selectedGenre}
                    />
                </div>
                <div className="filters-right-container">
                    <div className="filters-right-checkbox-container">
                        <CheckboxFiltersGroup
                            title="Продолжительность показа:"
                            name="time"
                            className="filters-city-checkbox"
                            onClickCheckbox={filters.setTime}
                            selectedIds={filters.time} 
                            items={[
                                {text: "<1 часа", value: "1"},
                                {text: "1-2 часа", value: "2"},
                                {text: ">2 часов", value: "3"}
                            ]}                        
                        />
                    </div>
                    <div className="filters-left-checkbox-container">
                        <CheckboxFiltersGroup
                            title="Язык:"
                            name="language"
                            className="filters-city-checkbox"
                            onClickCheckbox={filters.setLanguage}
                            selectedIds={filters.language} 
                            items={[
                                {text: "Русский", value: "1"},
                                {text: "Белорусский", value: "2"},
                                {text: "Английский", value: "3"}
                            ]}                        
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};