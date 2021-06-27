import axiosService from "../commons/axiosService";
import { API_ENDPOINT } from "../constants";

const url = "auth";

export const loginAPI = (data) => {
  return axiosService.post(`${API_ENDPOINT}/${url}/login`, data);
};
