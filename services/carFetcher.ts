import { TCar } from "../src/types/types";
import axiosInstance from "./axiosInstance";

const carFetcher = {
  createCar: async (data: string) => {
    try {
      await axiosInstance.post<TCar>("/cars", JSON.parse(JSON.stringify(data)));
    } catch (error) {
      throw error;
    } finally {
      console.log("createCar is ok !");
    }
  },

  getCars: async () => {
    try {
      const { data } = await axiosInstance.get<TCar[]>("/cars");
      return data ? data : null;
    } catch (error) {
      throw error;
    } finally {
      console.log("getCars is ok !");
    }
  },

  getCarById: async (id: string) => {
    try {
      const { data } = await axiosInstance.get<TCar>(`/cars/${id}`);
      return data ? data : null;
    } catch (err) {
      console.error(err);
    } finally {
      console.log("getCarById is ok !");
    }
  },

  updateCarById: async (id: string, data: string) => {
    try {
      await axiosInstance.put<TCar>(
        `/cars/${id}`,
        JSON.parse(JSON.stringify(data))
      );
    } catch (err) {
      console.error(err);
    } finally {
      console.log("updateCarById is ok !");
    }
  },

  deleteCarById: async (id: string) => {
    try {
      await axiosInstance.delete<TCar>(`/cars/${id}`);
    } catch (err) {
      console.error(err);
    } finally {
      console.log("deleteCarById is ok !");
    }
  },
};

export default carFetcher;
