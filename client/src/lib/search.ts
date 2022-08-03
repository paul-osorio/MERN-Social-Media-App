import axiosClient from "./axiosClient";

export function searchAll(search: string) {
  return axiosClient.get("/search/all", {
    params: {
      q: search,
    },
  });
}

export function searchPeople(search: string) {
  return axiosClient.get("/search/people", {
    params: {
      q: search,
    },
  });
}

export function searchPosts(search: string) {
  return axiosClient.get("/search/posts", {
    params: {
      q: search,
    },
  });
}
