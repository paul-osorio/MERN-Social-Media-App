import { useNavigate, useSearchParams } from "react-router-dom";
import ProfileCard from "./ProfileCard";

const PeopleCard = ({ data }: { data: any }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");
  const q = searchParams.get("q");

  const onGo = () => {
    navigate({
      pathname: "/search",
      search: `?type=People&q=${q}`,
    });
  };

  return (
    <div className="p-5 rounded-3xl w-full bg-white shadow">
      <h1 className="text-lg font-black">People</h1>
      <div className="mt-1">
        {data.slice(0, 3).map((user: any, i: number) => {
          return <ProfileCard key={i} user={user} />;
        })}
      </div>
      {data.length >= 3 && (
        <div className="mt-2">
          <div
            onClick={onGo}
            role="button"
            className="flex hover:bg-indigo-200 justify-center w-full py-2 bg-indigo-100 rounded-3xl"
          >
            See All
          </div>
        </div>
      )}
    </div>
  );
};

export default PeopleCard;
