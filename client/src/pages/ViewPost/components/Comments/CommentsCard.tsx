import Options from "./Options";

const CommentsCard = () => {
  return (
    <div className="w-full">
      <div className="flex space-x-2">
        <div>
          <div className="w-8 h-8 rounded-full bg-red-500"></div>
        </div>
        <div className="w-[93%]">
          <div className="bg-gray-100 shadow p-3 rounded-3xl  text">
            <div className="text-sm">
              <span className="font-medium">Juan Del </span>
              <span className=" text-gray-500">• 9h</span>
            </div>
            <div className="break-words text-sm overflow-hidden text-ellipsis">
              afsjassssssssssssssssssssssssssssssskafsjassssssssssssssssssssssssssssssskafsjassssssssssssssssssssssssssssssskafsjassssssssssssssssssssssssssssssskafsjassssssssssssssssssssssssssssssskafsjasssssssssssssssssssssssssssssssk
            </div>
          </div>
          <Options />
        </div>
      </div>
    </div>
  );
};

export default CommentsCard;
