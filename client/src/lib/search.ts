import axiosClient from "./axiosClient";

export function searchAll(search: string) {
  return axiosClient.get("/search/all", {
    params: {
      q: search,
    },
  });
}
