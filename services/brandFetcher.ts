import { TBrand } from "../src/types/types";
import axiosInstance from "./axiosInstance";

const modelFetcher = {
  createModel: async (data: string) => {
    try {
      await axiosInstance.post<TModel[]>(
        "/carModels",
        JSON.parse(JSON.stringify(data))
      );
    } catch (error) {
      throw error;
    } finally {
      console.log("createModel is ok !");
    }
  },

  getModels: async () => {
    try {
      const { data } = await axiosInstance.get<TModel[]>("/carModels");
      return data ? data : null;
    } catch (error) {
      throw error;
    } finally {
      console.log("getModels is ok !");
    }
  },

  getModelById: async (id: string) => {
    try {
      const { data } = await axiosInstance.get<TModel>(`/carModels/${id}`);
      return data ? data : null;
    } catch (err) {
      console.error(err);
    } finally {
      console.log("getModelById is ok !");
    }
  },

  updateModelById: async (id: string, data: string) => {
    try {
      await axiosInstance.put<TModel>(
        `/carModels/${id}`,
        JSON.parse(JSON.stringify(data))
      );
    } catch (err) {
      console.error(err);
    } finally {
      console.log("updateModelById is ok !");
    }
  },

  deleteModelById: async (id: string) => {
    try {
      await axiosInstance.delete<TModel>(`/carModels/${id}`);
    } catch (err) {
      console.error(err);
    } finally {
      console.log("deleteModelById is ok !");
    }
  },
};

export default modelFetcher;
