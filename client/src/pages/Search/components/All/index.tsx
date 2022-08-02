import { useSearchParams } from "react-router-dom";
import { searchAll } from "../../../../lib/search";
import PeopleCard from "./People";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import PostCard from "../../../../components/ui/PostCard";

const AllCard = () => {
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q");

  const { isLoading, data } = useQuery(["searchAll", q], async () => {
    const response = await searchAll(String(q));
    return response.data;
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col space-y-3 w-full">
      {data?.users.length > 0 && <PeopleCard data={data?.users} />}
      <div className="flex flex-col space-y-3">
        {data?.posts.map((post: any) => (
          <PostCard key={post._id} data={post} />
        ))}
      </div>
    </div>
  );
};

export default AllCard;
