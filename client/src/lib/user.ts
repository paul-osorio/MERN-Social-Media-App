import axiosInstance from "./axiosClient";

export function getUserDetails() {
  return axiosInstance.get("/user");
}

export function AddFriend(recipientID: any) {
  return axiosInstance.post("/user/friend", { recipientID });
}
