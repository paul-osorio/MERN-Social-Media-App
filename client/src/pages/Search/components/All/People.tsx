import ProfileCard from "./ProfileCard";

const PeopleCard = ({ data }: { data: any }) => {
  return (
    <div className="p-5 rounded-3xl w-full bg-white shadow">
      <h1 className="text-lg font-black">People</h1>
      <div className="mt-1">
        {data.map((user: any, i: number) => {
          return <ProfileCard key={i} user={user} />;
        })}
      </div>
      <div className="mt-2">
        <div
          role="button"
          className="flex hover:bg-indigo-200 justify-center w-full py-2 bg-indigo-100 rounded-3xl"
        >
          See All
        </div>
      </div>
    </div>
  );
};

export default PeopleCard;
