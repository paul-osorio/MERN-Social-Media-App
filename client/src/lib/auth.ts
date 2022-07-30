import axios from "./axiosClient";

export function userSignUp(user: any) {
  return axios.post("/register", user);
}
