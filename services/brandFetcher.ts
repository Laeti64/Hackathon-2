import { TBrand } from "../src/types/types";
import axiosInstance from "./axiosInstance";

const brandFetcher = {
  createBrand: async (data: string) => {
    try {
      await axiosInstance.post<TBrand[]>(
        "/brands",
        JSON.parse(JSON.stringify(data))
      );
    } catch (error) {
      throw error;
    } finally {
      console.log("createBrand is ok !");
    }
  },

  getBrands: async () => {
    try {
      const { data } = await axiosInstance.get<TBrand[]>("/brands");
      return data ? data : null;
    } catch (error) {
      throw error;
    } finally {
      console.log("getBrands is ok !");
    }
  },

  getBrandById: async (id: string) => {
    try {
      const { data } = await axiosInstance.get<TBrand>(`/brands/${id}`);
      return data ? data : null;
    } catch (err) {
      console.error(err);
    } finally {
      console.log("getBrandById is ok !");
    }
  },

  updateBrandById: async (id: string, data: string) => {
    try {
      await axiosInstance.put<TBrand>(
        `/brands/${id}`,
        JSON.parse(JSON.stringify(data))
      );
    } catch (err) {
      console.error(err);
    } finally {
      console.log("updateBrandById is ok !");
    }
  },

  deleteBrandById: async (id: string) => {
    try {
      await axiosInstance.delete<TBrand>(`/brands/${id}`);
    } catch (err) {
      console.error(err);
    } finally {
      console.log("deleteBrandById is ok !");
    }
  },
};

export default brandFetcher;
