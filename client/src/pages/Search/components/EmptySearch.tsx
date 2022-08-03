import { Link } from "react-router-dom";
import SearchIcon from "../../../assets/svg/nodata.svg";
export default () => {
  return (
    <div className="flex mt-20 items-center justify-center flex-col">
      <img src={SearchIcon} className="h-36" alt="search" />
      <p className="w-80 text-gray-500 mt-2 text-sm text-center">
        No results found for your search. Try a different search term or{" "}
        <Link to="/" className="text-indigo-500 hover:underline">
          go back to the homepage
        </Link>
        .
      </p>
    </div>
  );
};
