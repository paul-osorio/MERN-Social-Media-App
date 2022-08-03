import { useSearchParams } from "react-router-dom";
import AllCard from "./components/All";
import EmptyPage from "../../components/ui/EmptyPage";
import Filters from "./components/FIlters";
import People from "./components/People";
import Posts from "./components/Posts";

const Search = () => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");
  const q = searchParams.get("q");

  const hasParams = type === null || q === null;
  return (
    <div className="grid grid-cols-5 w-full gap-x-5">
      {!hasParams ? (
        <div className="col-span-3 ">
          {type === "All" && <AllCard />}
          {type === "People" && <People />}
          {type === "Posts" && <Posts />}
        </div>
      ) : (
        <div className="col-span-4 ">
          <EmptyPage />
        </div>
      )}
      <div className="col-span-2 ">{!hasParams && <Filters />}</div>
    </div>
  );
};

export default Search;
