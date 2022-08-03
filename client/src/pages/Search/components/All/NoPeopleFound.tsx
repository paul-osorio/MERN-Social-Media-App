import { useSearchParams } from "react-router-dom";

export default () => {
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q");

  return (
    <div className="p-5 rounded-3xl w-full bg-white shadow">
      <h1 className="text-lg font-black">People</h1>
      <div className="w-full flex justify-center opacity-70 mb-1">
        <img
          src="https://www.svgrepo.com/show/408696/search-magnifier-magnifying-emoji-no-results.svg"
          className="w-10 h-10"
        />
      </div>
      <p className="text-center text-gray-500">
        found 0 user results for{" "}
        <q>
          <b>
            <i>{q}</i>
          </b>
        </q>
      </p>
    </div>
  );
};
