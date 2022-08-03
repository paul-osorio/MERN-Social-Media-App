import NotFoundSvg from "../../assets/svg/notfound.svg";

const EmptyPage = () => {
  return (
    <div className="h-full w-full flex flex-col mt-12 space-y-2 items-center justify-center">
      <img
        src={NotFoundSvg}
        className="w-96  object-contain"
        alt="404 Not Found"
      />

      <p className="text-center text-gray-500 text-lg">
        Sorry we couldn't find what you were looking for
      </p>
    </div>
  );
};
export default EmptyPage;
