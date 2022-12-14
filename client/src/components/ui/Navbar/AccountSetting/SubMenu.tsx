import { Link, useNavigate } from "react-router-dom";

interface ISubMenuProps {
  to?: string;
  Name: string;
  Icon: JSX.Element;
  Type?: string;
  onClick?: () => void;
}

const SubMenu = ({ to, Name, Icon, Type = "link", onClick }: ISubMenuProps) => {
  const navigate = useNavigate();

  const navigateTo = () => {
    if (to) {
      navigate(to);
    }
  };

  return (
    <div
      onClick={Type === "link" ? navigateTo : onClick}
      className="flex items-center p-2 px-4 space-x-3 hover:bg-gray-100 rounded-3xl"
    >
      <div className="text-xl text-gray-700">{Icon}</div>
      <span className="text-gray-700">{Name}</span>
    </div>
  );
};

export default SubMenu;
