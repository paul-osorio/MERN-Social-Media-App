import Style from "./Typing.module.css";

const Typing = () => {
  return (
    <div className="flex justify-start w-full p-1 px-2">
      <div className="p-3 break-words rounded-t-[20px] max-w-[60%] rounded-br-[20px] bg-gray-200">
        <div className={Style.bouncingLoader}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Typing;
