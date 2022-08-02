const useFullname = (user: any) => {
  return user?.nameFirst + " " + user?.nameLast;
};

export default useFullname;
