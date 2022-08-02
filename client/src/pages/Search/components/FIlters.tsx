import { useNavigate, useSearchParams } from "react-router-dom";
import FilterButton from "./FilterButton";

const Filters = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const type = searchParams.get("type");

  const onChangeType = (type: string) => {
    navigate({
      pathname: "/search",
      search: `?type=${type}&q=${searchParams.get("q")}`,
    });
  };

  return (
    <div className="bg-white rounded-3xl p-5 shadow w-full sticky top-20">
      <h1 className="font-medium text-gray-600 mb-2">Filters</h1>
      <hr />
      <div className="flex flex-col mt-2 space-y-1">
        <FilterButton
          Icon={<i className="fa-solid fa-scroll"></i>}
          text="All"
          isActive={type === "All"}
          onClick={() => onChangeType("All")}
        />
        <FilterButton
          Icon={<span className="material-icons text-xl">feed</span>}
          text="Posts"
          isActive={type === "Posts"}
          onClick={() => onChangeType("Posts")}
        />
        <FilterButton
          Icon={<span className="material-icons text-xl">people</span>}
          text="People"
          isActive={type === "People"}
          onClick={() => onChangeType("People")}
        />
      </div>
    </div>
  );
};

export default Filters;
