import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import PostCard from "../../../../components/ui/PostCard";
import { searchPosts } from "../../../../lib/search";
import EmptySearch from "../EmptySearch";

const Posts = () => {
  const [searchParams] = useSearchParams();

  const q = searchParams.get("q");

  const { isLoading, data } = useQuery(
    ["searchPeople", q],
    async () => {
      const response = await searchPosts(String(q));
      return response.data;
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col space-y-3 w-full mb-5">
      {data?.posts ? (
        data?.posts.length > 0 ? (
          data?.posts.map((post: any, i: number) => {
            return <PostCard key={i} data={post} />;
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

export default Posts;
