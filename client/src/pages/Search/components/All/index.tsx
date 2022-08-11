import { useSearchParams } from "react-router-dom";
import { searchAll } from "../../../../lib/search";
import PeopleCard from "./People";
import { useQuery } from "@tanstack/react-query";
import PostCard from "../../../../components/ui/PostCard";
import NoPeopleFound from "./NoPeopleFound";
import EmptySearch from "../EmptySearch";
import SharePost from "../../../../components/modal/SharePost";
import { useAppContext } from "../../../../context/AppProvider";

const AllCard = () => {
  const { sharePost, setSharePost } = useAppContext();
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q");

  const { isLoading, data } = useQuery(
    ["searchAll", q],
    async () => {
      const response = await searchAll(String(q));
      return response.data;
    },
    {
      refetchOnWindowFocus: false,
    }
  );
  const handleClose = () => setSharePost(null);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="flex flex-col space-y-3 w-full mb-5 ">
        {data?.users || data?.posts ? (
          <>
            {data?.users.length > 0 ? (
              <PeopleCard data={data?.users} />
            ) : (
              <NoPeopleFound />
            )}
            <div className="flex flex-col space-y-3">
              {data?.posts.map((post: any) => (
                <PostCard key={post._id} data={post} />
              ))}
            </div>
          </>
        ) : (
          <EmptySearch />
        )}
      </div>
      {sharePost && <SharePost handleClose={handleClose} />}
    </>
  );
};

export default AllCard;
