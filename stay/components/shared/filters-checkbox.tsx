import React from "react";
import { Checkbox } from "@/components/ui/checkbox";

export interface FilterCheckboxProps {
    text: string;
    value: string;
    endAdornment?: React.ReactNode;
    onCheckedChange?: (checked: boolean) => void;
    checked?: boolean;
    name?: string;
}

export const FilterCheckbox: React.FC<FilterCheckboxProps> = ({
    text,
    value,
    endAdornment,
    onCheckedChange,
    checked,
    name
}) => {
    return (
        <div className="flex gap-[5px] items-center space-x-2">
            <Checkbox
                onCheckedChange={onCheckedChange}
                checked={checked}
                value={value}
                className="rounded-[5px] w-6 h-6 filters-checkbox"
                id={`checkbox-${String(name)}-${String(value)}`}
            />
            <label htmlFor={`checkbox-${String(name)}-${String(value)}`} className="cursor-pointer text-white text-2xl">{text}</label>
            {endAdornment}
        </div>
    );
};