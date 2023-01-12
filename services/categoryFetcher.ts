import { TCategory } from "../src/types/types";
import axiosInstance from "./axiosInstance";

const categoryFetcher = {
  createCategory: async (data: string) => {
    try {
      await axiosInstance.post<TCategory[]>(
        "/categories",
        JSON.parse(JSON.stringify(data))
      );
    } catch (error) {
      throw error;
    } finally {
      console.log("createCategory is ok !");
    }
  },

  getCategories: async () => {
    try {
      const { data } = await axiosInstance.get<TCategory[]>("/categories");
      return data ? data : null;
    } catch (error) {
      throw error;
    } finally {
      console.log("getCategories is ok !");
    }
  },

  getCategoryById: async (id: string) => {
    try {
      const { data } = await axiosInstance.get<TCategory>(`/categories/${id}`);
      return data ? data : null;
    } catch (err) {
      console.error(err);
    } finally {
      console.log("getCategoryById is ok !");
    }
  },

  updateCategoryById: async (id: string, data: string) => {
    try {
      await axiosInstance.put<TCategory>(
        `/categories/${id}`,
        JSON.parse(JSON.stringify(data))
      );
    } catch (err) {
      console.error(err);
    } finally {
      console.log("updateCategoryById is ok !");
    }
  },

  deleteCategoryById: async (id: string) => {
    try {
      await axiosInstance.delete<TCategory>(`/categories/${id}`);
    } catch (err) {
      console.error(err);
    } finally {
      console.log("deleteCategoryById is ok !");
    }
  },
};

export default categoryFetcher;
