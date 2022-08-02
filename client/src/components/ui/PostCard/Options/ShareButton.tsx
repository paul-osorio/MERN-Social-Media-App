const ShareButton = () => {
  return (
    <div
      role="button"
      className="flex items-center group relative transition duration-75 space-x-1 hover:bg-gray-100 pr-2 rounded-full"
    >
      <div className="group-hover:bg-indigo-100 h-7 absolute left-0 w-7 flex items-center justify-center rounded-full">
        <i className="fal fa-share text-lg text-gray-600 group-hover:hidden"></i>
        <i className="fas fa-share text-lg group-hover:text-indigo-500 hidden group-hover:block"></i>
      </div>

      <span className="text-sm text-gray-500 pl-7">5.5k</span>
    </div>
  );
};

export default ShareButton;
