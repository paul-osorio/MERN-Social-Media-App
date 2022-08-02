import axiosClient from "./axiosClient";

export function createPost(data: any) {
  return axiosClient.post("/posts", data);
}

export function getPosts() {
  return axiosClient.get("/posts");
}
