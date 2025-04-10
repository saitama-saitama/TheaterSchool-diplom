import { axiosInstance } from "./instance";
import { ApiRoutes } from "./constans";
import { City } from "@prisma/client";

export const getAll = async (): Promise<City[]> => {
    return (await axiosInstance.get<City[]>(ApiRoutes.CITY)).data
};