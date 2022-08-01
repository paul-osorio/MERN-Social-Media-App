const CommentButton = () => {
  return (
    <div
      role="button"
      className="flex items-center space-x-1 group hover:bg-gray-100 pr-2 relative rounded-full"
    >
      <div className="group-hover:bg-green-100 h-7 absolute left-0 w-7 flex items-center justify-center rounded-full">
        <i className="fal fa-comment-alt text-gray-600 group-hover:hidden"></i>
        <i className="fas fa-comment-alt group-hover:text-green-600 hidden group-hover:block"></i>
      </div>

      <span className="text-sm text-gray-500 pl-7">5.5k</span>
    </div>
  );
};

export default CommentButton;
