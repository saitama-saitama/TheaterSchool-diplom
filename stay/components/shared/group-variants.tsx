/*"use client"

import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";

type Variant = {
    name: string;
    value: string;
    disabled?: boolean;
    picture?: string;
};

interface Props {
    items: readonly Variant[];
    onClick?: (value: Variant["value"]) => void;
    selectedValue?: Variant["value"];
    className?: string;
}

export const GroupVariants: React.FC<Props> = ({ items, onClick, className, selectedValue }) => {
    return (
        <div className={cn(className, "flex justify-between p-1 select-none gap-5 mb-[35px]")}>
            {items.map((item) => (
                <button
                    key={item.name}
                    onClick={() => onClick?.(item.value)}
                    className={cn(
                        "flex flex-col items-center justify-center bg-[#FFFDD0] cursor-pointer px-3 py-3 flex-1 gap-2",
                        {
                            "bg-[#B81E1E] shadow": item.value === selectedValue,
                            "text-gray-500 opacity-50 pointer-events-none": item.disabled,
                        }
                    )}
                >
                    {item.picture && (
                        <div className="w-full h-[200px] relative">
                            <Image
                                src={item.picture}
                                alt={item.name}
                                fill
                                className="object-cover"
                                sizes="100%"
                            />
                        </div>
                    )}
                    <span className="text-[16px] text-center">{item.name}</span>
                </button>
            ))}
        </div>
    );
};*/

"use client"

import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";

type Variant = {
    name: string;
    value: string;
    disabled?: boolean;
    picture?: string;
};

interface Props {
    items: readonly Variant[];
    onClick?: (value: Variant["value"]) => void;
    selectedValue?: Variant["value"];
    className?: string;
}

export const GroupVariants: React.FC<Props> = ({ items, onClick, className, selectedValue }) => {
    return (
        <div className={cn(className, "flex justify-between p-1 select-none gap-5 mb-[35px]")}>
            {items.map((item) => (
                <button
                    key={item.name}
                    onClick={() => onClick?.(item.value)}
                    className={cn(
                        "flex flex-col items-center justify-center bg-[#FFFDD0] cursor-pointer px-3 py-3 flex-1 gap-2",
                        {
                            "bg-[#B81E1E] shadow": item.value === selectedValue,
                            "text-gray-500 opacity-50 pointer-events-none": item.disabled,
                        }
                    )}
                >
                    {item.picture && (
                        <div className="w-full h-[200px] relative">
                            <Image
                                src={item.picture}
                                alt={item.name}
                                fill
                                className="object-cover"
                                sizes="100%"
                            />
                        </div>
                    )}
                    <span className="text-[16px] text-center">{item.name}</span>
                </button>
            ))}
        </div>
    );
};