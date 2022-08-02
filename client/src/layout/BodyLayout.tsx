import { Outlet } from "react-router-dom";

const BodyLayout = () => {
  return (
    <div className="h-10 grid grid-cols-5 mb-3 gap-x-5 mx-5">
      <div className="col-span-1 "></div>
      <div className="col-span-4 ">
        <Outlet />
      </div>
    </div>
  );
};
export default BodyLayout;
