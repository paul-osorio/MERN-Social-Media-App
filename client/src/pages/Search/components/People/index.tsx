import ProfileCard from "./ProfileCard";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { searchPeople } from "../../../../lib/search";
import NoPeopleFound from "../All/NoPeopleFound";
import EmptySearch from "../EmptySearch";

export default () => {
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q");

  const { isLoading, data, isError } = useQuery(
    ["searchPeople", q],
    async () => {
      const response = await searchPeople(String(q));
      return response.data;
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div className="flex flex-col space-y-3 w-full mb-5">
      {data?.users ? (
        data?.users.length > 0 ? (
          data?.users.map((user: any, i: number) => {
            return <ProfileCard key={i} user={user} />;
          })
        ) : (
          <EmptySearch />
        )
      ) : (
        <EmptySearch />
      )}
    </div>
  );
};
