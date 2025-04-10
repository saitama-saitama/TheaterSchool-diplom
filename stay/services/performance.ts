import { Performance } from "@prisma/client";
import { axiosInstance } from "./instance";
import { ApiRoutes } from "./constans";

export const search = async (query: string): Promise<Performance[]> => {
    return (await axiosInstance.get<Performance[]>(ApiRoutes.SEARCH_PERFORMANCE, {params: {query}})).data;
};