import { useNavigate, useSearchParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

const NavSearchBar = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [searchParams] = useSearchParams();
  const searchquery = searchParams.get("q");

  const onSearch = (e: any) => {
    if (e.key === "Enter") {
      queryClient.invalidateQueries(["searchAll", searchquery]);
      navigate({
        pathname: "/search",
        search: `?type=All&q=${e.target.value}`,
      });
    }
  };

  return (
    <div className="mx-14 h-full flex items-center">
      <div className="relative flex items-center">
        <input
          type="text"
          onKeyDown={onSearch}
          placeholder="Search..."
          className="bg-gray-100 min-w-[420px] py-2 px-5 rounded-full outline-none focus:ring-1 focus:ring-indigo-300"
        />
        <i className="fal fa-search absolute right-4"></i>
      </div>
    </div>
  );
};

export default NavSearchBar;
