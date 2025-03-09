import axios from "axios";
import { endpoints } from "./endpoints";

const API_KEY = import.meta.env.VITE_STRAPI_API_KEY;

const axiosClient = axios.create({
  baseURL: "http://localhost:1337/api",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
});

const createResumeApi = (data) =>
  axiosClient.post(endpoints.createResume, data);

const getUserResumeApi = (userEmail) =>
  axiosClient.get("/user-resumes?filters[userEmail][$eq]=" + userEmail);

export default { createResumeApi, getUserResumeApi };
