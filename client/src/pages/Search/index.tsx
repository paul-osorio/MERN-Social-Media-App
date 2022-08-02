import { useSearchParams } from "react-router-dom";
import AllCard from "./components/All";
import Filters from "./components/FIlters";

const Search = () => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");

  return (
    <div className="grid grid-cols-5 w-full gap-x-5">
      <div className="col-span-3">{type === "All" && <AllCard />}</div>
      <div className="col-span-2">
        <Filters />
      </div>
    </div>
  );
};

export default Search;
