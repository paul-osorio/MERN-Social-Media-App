import axiosInstance from "./axiosClient";

export function getUserDetails() {
  return axiosInstance.get("/user");
}
