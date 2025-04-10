import { axiosInstance } from "./instance";
import { ApiRoutes } from "./constans";
import { Genre } from "@prisma/client";

export const getAll = async (): Promise<Genre[]> => {
    return (await axiosInstance.get<Genre[]>(ApiRoutes.GENRE)).data
};