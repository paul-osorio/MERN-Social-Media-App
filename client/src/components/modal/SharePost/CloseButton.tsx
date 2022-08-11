const CloseButton = ({ onClick }: { onClick: any }) => {
  return (
    <div
      role="button"
      onClick={onClick}
      className="h-8 w-8 rounded-full items-center justify-center flex hover:bg-gray-100"
    >
      <span className="material-icons">close</span>
    </div>
  );
};

export default CloseButton;
