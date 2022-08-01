import NavProfile from "./NavProfile";
import NavSearchBar from "./NavSearchbar";
import NavTitle from "./NavTitle";

const Navbar = () => {
  return (
    <nav className="h-14 w-full sticky bg-white top-0 left-0 shadow">
      <div className="h-full w-full flex justify-between">
        <div className="flex">
          <NavTitle />
          <NavSearchBar />
        </div>
        <NavProfile />
      </div>
    </nav>
  );
};

export default Navbar;
