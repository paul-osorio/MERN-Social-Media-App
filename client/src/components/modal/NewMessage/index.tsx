import { useMessageContext } from "../../../context/MessageContext";
import Backdrop from "../Backdrop";
import SearchBar from "./SearchBar";
import ProfileCard from "./ProfileCard";
import { useQuery } from "@tanstack/react-query";
import { getAllFriends } from "../../../lib/user";
import { useState } from "react";

const NewMessage = () => {
  const { setOpenNewMessage } = useMessageContext();
  const [search, setSearch] = useState<any>("");

  const handleClose = () => {
    setOpenNewMessage(false);
  };

  const { isLoading, error, data } = useQuery(["allfriend"], async () => {
    const response = await getAllFriends();
    return response.data.friends;
  });

  const onSearch = (e: any) => {
    setSearch(e.target.value);
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <Backdrop handleClose={handleClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white py-5 shadow-dark rounded-3xl w-96"
      >
        <div className="flex items-center space-x-2 mb-2 px-5">
          <button
            onClick={handleClose}
            className="h-10 w-10 hover:bg-gray-100 rounded-full"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
          <h1 className="text-lg text-gray-800">New Message</h1>
        </div>
        <SearchBar search={search} onChange={onSearch} />
        <div className="flex flex-col mt-2 max-h-[22rem] overflow-auto px-5">
          {data?.filter((friend: any) => {
            return (
              friend.nameFirst.toLowerCase().includes(search.toLowerCase()) ||
              friend.nameLast.toLowerCase().includes(search.toLowerCase()) ||
              friend.email.toLowerCase().includes(search.toLowerCase())
            );
          }).length > 0 ? (
            data
              ?.filter((friend: any) => {
                return (
                  friend.nameFirst
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  friend.nameLast
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  friend.email.toLowerCase().includes(search.toLowerCase())
                );
              })
              .map((friend: any) => {
                return <ProfileCard key={friend._id} friend={friend} />;
              })
          ) : (
            <div className="text-center text-gray-800">No results found </div>
          )}
        </div>
      </div>
    </Backdrop>
  );
};

export default NewMessage;
