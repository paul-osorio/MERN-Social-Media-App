import axiosClient from "./axiosClient";

export function createPost(data: any) {
  return axiosClient.post("/posts", data);
}

export function getPosts() {
  return axiosClient.get("/posts");
}
export function getOnePost(id: any) {
  return axiosClient.get(`/posts/one/${id}`);
}

export function likePost(postId: any) {
  return axiosClient.post(`/posts/like`, { postId });
}
export function unlikePost(postId: any) {
  return axiosClient.post(`/posts/unlike`, { postId });
}

export function checkIsLiked(postId: any) {
  return axiosClient.post(`/posts/islike`, { postId });
}

export function getLikesCount(postId: any) {
  return axiosClient.get(`/posts/like/${postId}`);
}
export function getSharesCount(postId: any) {
  return axiosClient.get(`/posts/share/${postId}`);
}

export function sharePost(postId: any) {
  return axiosClient.post(`/posts/share`, { postId });
}
