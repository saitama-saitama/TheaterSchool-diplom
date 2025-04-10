"use client"

import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { useClickAway, useDebounce } from "react-use";
import React from "react";
import Link from 'next/link';
import Image from "next/image";
import { Api } from "@/services/api-client";
import { Performance } from '@prisma/client';

interface Props {
    className?: string;
}

export const SearchInput: React.FC<Props> = ({ className }) => {
    const [searchQuery, setSearchQuery] = React.useState("");
    const [focused, setFocused] = React.useState(false);
    const [performance, setPerformance] = React.useState<Performance[]>([]);
    const ref = React.useRef(null);

    useClickAway(ref, () => {
        setFocused(false);
    })

    useDebounce(
        async () => {
            try {
                const response = await Api.performance.search(searchQuery);
                setPerformance(response);
            } catch (error) {
                console.log(error);
            }
        }
    )

    /*useDebounce(() => {
        Api.performance.search(searchQuery).then(items => {
            setPerformance(items);
        });
    }, 100, [searchQuery]);*/

    const onClickItem = () => {
        setFocused(false);
        setSearchQuery("");
        setPerformance([]);
    }

    return (
        <>
            {focused && <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/70 z-30" />}
            <div className="relative">
                <div ref={ref} className={cn("flex rounded-2xl flex-1 justify-between relative h-11 z-30", className)}>
                    <Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400"/>
                    <input className="rounded-2xl outline-none w-full bg-gray-100 pl-11" type="text" placeholder="Найти постановку.." onFocus={() => setFocused(true)} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
                </div>

                {performance.length > 0 && (
                    <div className={cn("absolute w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30", focused && "visible opacity-100 top-12")}>
                    {performance.map((performance) => (
                        <Link href={`/performance-page/${performance.id}`} className="flex items-center gap-3 w-full px-3 py-2 hover:bg-primary/10" key={performance.id} onClick={onClickItem}>
                        <Image className="rounded-sm h-8 w-8" src={"/icon/mask.svg"} alt={"img"} width={50} height={50}></Image>
                        <span>{performance.name}</span>
                        </Link>
                    ))}
                    </div>
                )}
            </div>
        </>
    )
}