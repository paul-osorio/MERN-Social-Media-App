interface FilterButtonInterface {
  onClick?: () => void;
  Icon?: any;
  text?: string;
  isActive?: boolean;
}

const FilterButton = ({
  onClick,
  Icon,
  text,
  isActive,
}: FilterButtonInterface) => {
  return (
    <div
      role="button"
      onClick={onClick}
      className={
        (isActive ? "bg-indigo-400" : "bg-white hover:bg-gray-100") +
        " p-3  w-full flex items-center rounded-3xl space-x-3"
      }
    >
      <div
        className={
          (isActive ? "bg-white text-black" : "bg-gray-300 text-gray-700") +
          "  h-9 w-9 rounded-full flex items-center justify-center"
        }
      >
        {Icon}
      </div>
      <span className={isActive ? "text-white font-bold" : "text-gray-700"}>
        {text}
      </span>
    </div>
  );
};
export default FilterButton;
