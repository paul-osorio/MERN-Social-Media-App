import useAvatar from "../../../../hooks/useAvatar";
import useFullname from "../../../../hooks/useFullname";

const ProfileCard = ({ user }: { user: any }) => {
  const fullname = useFullname(user);
  const avatar = useAvatar(user);
  return (
    <div
      role="button"
      className="p-5 flex items-center justify-between hover:shadow-indigo-300 bg-white shadow rounded-3xl"
    >
      <div className="flex items-center space-x-4">
        <img
          src={avatar}
          alt=""
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="">
          <p className="leading-4">{fullname}</p>
          <p className="leading-4 text-gray-400">{user?.email}</p>
        </div>
      </div>
      <div>
        <button className="bg-gray-700 py-1 px-5 hover:bg-gray-800 rounded-3xl text-white">
          Add Friend
        </button>
      </div>
    </div>
  );
};
export default ProfileCard;
