import useAvatar from "../../../../hooks/useAvatar";
import useFullname from "../../../../hooks/useFullname";
import Buttons from "../People/Buttons";

const ProfileCard = ({ user }: { user: any }) => {
  const fullname = useFullname(user);
  const avatar = useAvatar(user);
  return (
    <div
      role="button"
      className="p-5 flex items-center justify-between hover:bg-gray-100 rounded-3xl"
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
      <Buttons user={user} />
    </div>
  );
};
export default ProfileCard;
