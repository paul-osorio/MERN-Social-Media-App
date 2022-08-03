import EmptyPageSVG from "../../assets/svg/notfound.svg";

export default () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <img src={EmptyPageSVG} alt="" className="w-96" />
      <p className="text-4xl mt-2 text-gray-600 font-bold">PAGE NOT FOUND</p>
      <p className="text-lg text-gray-600">
        The page you are looking for does not exist.
      </p>
    </div>
  );
};
