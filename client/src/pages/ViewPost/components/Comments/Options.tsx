const Options = ({ setOpenComment }: { setOpenComment: any }) => {
  return (
    <div className="flex space-x-2 mt-1 text-sm mx-2">
      <div
        role="button"
        className=" flex items-center justify-center rounded-full"
      >
        <i className="fal text-gray-500 fa-heart"></i>
      </div>
      <div
        role="button"
        onClick={() => setOpenComment(true)}
        className=" flex items-center justify-center rounded-full"
      >
        <i className="fas text-gray-500 fa-reply"></i>
      </div>
    </div>
  );
};
export default Options;
