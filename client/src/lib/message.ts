import axiosInstance from "./axiosClient";

export function sendMessage(message: any) {
  return axiosInstance.post("/message", message);
}

export function getMyInbox() {
  return axiosInstance.get("/message/inbox");
}
