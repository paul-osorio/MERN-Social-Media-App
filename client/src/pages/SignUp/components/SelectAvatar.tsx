import { useSignUpContext } from "../../../context/SignUpContext";
import avatarPlaceholder from "../../../assets/images/avatarPlaceholder.png";

const SelectAvatar = () => {
  const { setOpenModal, avatar } = useSignUpContext();
  const handleModal = () => setOpenModal(true);

  return (
    <div className="w-full flex flex-col items-center justify-center mb-3">
      <img
        src={avatar || avatarPlaceholder}
        alt=""
        className="w-20 h-20 rounded-full object-cover shadow border"
      />
      <button
        onClick={handleModal}
        type="button"
        className="border px-2 hover:bg-gray-100 py-1 rounded text-sm mt-2"
      >
        Select Avatar
      </button>
    </div>
  );
};

export default SelectAvatar;
