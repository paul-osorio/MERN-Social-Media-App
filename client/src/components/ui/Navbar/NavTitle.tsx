import VybinLogo from "../../../assets/svg/VybinLogo";

const NavTitle = () => {
  return (
    <div className="h-full flex items-center mx-5">
      <VybinLogo className="fill-indigo-800 h-10 w-10" />
      <h1 className=" text-gray-700 text-xl font-bold">VYBIN</h1>
    </div>
  );
};

export default NavTitle;
