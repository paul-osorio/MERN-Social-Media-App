interface ISearchBar {
  search: string;
  onChange: (e: any) => void;
}

export default ({ search, onChange }: ISearchBar) => {
  return (
    <div className="flex items-center group px-5">
      <input
        value={search}
        onChange={onChange}
        type="text"
        className="py-1 px-2 w-full transition outline-none border-b peer focus:border-b focus:border-indigo-300"
        placeholder="Search people"
      />
      <span
        className="
      peer-focus:text-indigo-300
      transition
      material-icons-outlined text-2xl text-gray-600"
      >
        search
      </span>
    </div>
  );
};
