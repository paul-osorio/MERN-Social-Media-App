import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const NavSearchBar = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");

  const [query, setQuery] = useState<any>(searchParams.get("q") || "");

  const onSearch = (e: any) => {
    if (e.key === "Enter") {
      queryClient.invalidateQueries(["searchAll", query]);
      queryClient.invalidateQueries(["searchPeople", query]);
      queryClient.invalidateQueries(["searchPosts", query]);
      let Type = type;

      if (type === null) {
        Type = "All";
      }
      navigate({
        pathname: "/search",
        search: `?type=${Type}&q=${query}`,
      });
    }
  };

  useEffect(() => {
    if (location.pathname !== "/search") {
      setQuery("");
    }
  }, [location]);

  return (
    <div className="mx-14 h-full flex items-center">
      <div className="relative flex items-center">
        <input
          type="text"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          value={query}
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
