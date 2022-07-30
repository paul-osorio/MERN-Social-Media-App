import axiosInstance from "./axiosClient";

export function userSignUp(user: any) {
  return axiosInstance.post("/register", user);
}

export function checkEmail(email: string) {
  return axiosInstance.post(`/checkEmail`, { email });
}

export function userSignIn(user: any) {
  return axiosInstance.post("/login", user);
}

export function userSession() {
  return axiosInstance.get("/session");
}

export function userSignOut() {
  return axiosInstance.post("/logout");
}
