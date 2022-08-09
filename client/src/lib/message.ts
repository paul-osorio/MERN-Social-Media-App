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

export function readMessage(data: any) {
  return axiosInstance.get(`/message/read`, {
    params: {
      id: data.id,
      message_id: data.message_id,
      sender_id: data.sender_id,
    },
  });
}
