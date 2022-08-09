import axiosInstance from "./axiosClient";

export function getUserDetails() {
  return axiosInstance.get("/user");
}

export function AddFriend(friendID: any) {
  return axiosInstance.post("/friend/add", { friendID });
}

export function RejectFriend(friendID: any) {
  return axiosInstance.post("/friend/reject", { friendID });
}
export function AcceptFriend(friendID: any) {
  return axiosInstance.post("/friend/accept", { friendID });
}

export function getFriend(friendID: any) {
  return axiosInstance.get("/friend", { params: { friendID } });
}

export function getAllFriends() {
  return axiosInstance.get("/friend/all");
}

export function getUserPartialDetails(data: any) {
  return axiosInstance.post("/user/partial", data);
}
