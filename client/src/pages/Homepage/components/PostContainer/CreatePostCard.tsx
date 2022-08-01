import avatarPlaceholder from "../../../../assets/images/avatarPlaceholder.png";

const CreatePostCard = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="p-3 px-5 bg-white rounded-full shadow">
      <div className="flex items-center h-full space-x-2">
        <img
          src={avatarPlaceholder}
          className="w-9 h-9 rounded-full object-cover"
          alt=""
        />

        <div
          onClick={onClick}
          className="flex items-center px-5 h-10 w-full hover:shadow-sm hover:shadow-indigo-300 cursor-text bg-gray-100 rounded-full"
        >
          <span className="text-gray-500">What's happening?</span>
        </div>
      </div>
    </div>
  );
};

export default CreatePostCard;
