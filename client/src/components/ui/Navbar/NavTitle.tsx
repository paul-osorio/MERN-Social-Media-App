import { useNavigate } from "react-router-dom";
import VybinLogo from "../../../assets/svg/VybinLogo";

const NavTitle = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };
  return (
    <div
      role="button"
      onClick={goToHome}
      className="h-full flex items-center mx-5"
    >
      <VybinLogo className="fill-indigo-800 h-10 w-10" />
      <h1 className=" text-gray-700 text-xl font-bold">VYBIN</h1>
    </div>
  );
};

export default NavTitle;
