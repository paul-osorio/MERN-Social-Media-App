import io from "socket.io-client";

const socket = io(import.meta.env.VITE_APP_BASE_URL);

const postSocket = io(import.meta.env.VITE_APP_BASE_URL + "/posts");

export { socket, postSocket };
