import avatarPlaceholder from "../assets/images/avatarPlaceholder.png";

const useAvatar = (user: any) => {
  const baseUrl = import.meta.env.VITE_APP_BASE_URL;

  if (user?.profile) {
    return `${baseUrl}/profile/${user.profile}`;
  } else if (user?.avatar) {
    return `${baseUrl}/avatar/${user.avatar}.png`;
  } else {
    return avatarPlaceholder;
  }
};

export default useAvatar;
