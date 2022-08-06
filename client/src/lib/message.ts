import axiosInstance from "./axiosClient";

export function sendMessage(message: any) {
  return axiosInstance.post("/message", message);
}

export function getMyInbox() {
  return axiosInstance.get("/message/inbox");
}

export function createConvo(friendId: any) {
  return axiosInstance.post("/message/convo", { friendId });
}

export function getMessages(convoId: any) {
  return axiosInstance.get(`/message/${convoId}`);
}
