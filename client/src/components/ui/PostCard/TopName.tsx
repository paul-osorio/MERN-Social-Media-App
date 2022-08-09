import moment from "moment";
import useAvatar from "../../../hooks/useAvatar";

const TopName = ({ author, timestamp }: { author: any; timestamp: any }) => {
  const fullname = author?.nameFirst + " " + author?.nameLast;
  const fromnow = moment(timestamp).fromNow();

  const avatar = useAvatar(author);

  return (
    <div className="w-full flex justify-between items-center h-10">
      <div className="flex items-center space-x-2">
        <img
          src={avatar}
          className="w-9 h-9 object-cover rounded-full"
          alt=""
        />
        <div className="">
          <span className="block leading-3 font-medium text-gray-600">
            {fullname}
          </span>
          <span className="text-sm block text-gray-400">{fromnow}</span>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default TopName;
