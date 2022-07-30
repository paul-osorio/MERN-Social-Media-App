const NavSearchBar = () => {
  return (
    <div className="mx-14 h-full flex items-center">
      <div className="relative flex items-center">
        <input
          placeholder="Search..."
          className="bg-gray-100 min-w-[420px] py-2 px-5 rounded-full outline-none focus:ring-1 focus:ring-indigo-300"
        />
        <i className="fal fa-search absolute right-4"></i>
      </div>
    </div>
  );
};

export default NavSearchBar;
