import { TAgency } from "../src/types/types";
import axiosInstance from "./axiosInstance";

const agencyFetcher = {
  createAgency: async (data: string) => {
    try {
      await axiosInstance.post<TAgency>(
        "/agencies",
        JSON.parse(JSON.stringify(data))
      );
    } catch (error) {
      throw error;
    } finally {
      console.log("Agency creation is ok !");
    }
  },

  getAgencies: async () => {
    try {
      const { data } = await axiosInstance.get<TAgency[]>("/agencies");
      return data ? data : null;
    } catch (error) {
      throw error;
    } finally {
      console.log("get Agencies is ok !");
    }
  },

  getAgencyById: async (id: string | undefined) => {
    try {
      const { data } = await axiosInstance.get<TAgency>(`/agencies/${id}`);
      return data ? data : null;
    } catch (err) {
      console.error(err);
    } finally {
      console.log("getAgencyById is ok !");
    }
  },

  updateAgencyById: async (id: string, data: string) => {
    try {
      await axiosInstance.put<TAgency>(
        `/agencies/${id}`,
        JSON.parse(JSON.stringify(data))
      );
    } catch (err) {
      console.error(err);
    } finally {
      console.log("updateAgencyById is ok !");
    }
  },

  deleteAgencyById: async (id: string) => {
    try {
      await axiosInstance.delete<TAgency>(`/agencies/${id}`);
    } catch (err) {
      console.error(err);
    } finally {
      console.log("deleteAgencyById is ok !");
    }
  },
};

export default agencyFetcher;
