import { useSignUpContext } from "../../../context/SignUpContext";
import React, { useRef } from "react";

const OwnProfile = () => {
  const { setAvatar, setProfile } = useSignUpContext();
  const ref = useRef<any>(null);

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];

    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setAvatar(objectUrl);
      setProfile(file);
    }
  };

  const clickHandler = () => {
    ref.current.click();
  };

  return (
    <div className="mb-5 flex flex-col items-center">
      <span className="block text-lg font-medium">Choose an Avatar</span>
      <span className="block text-sm font-medium">or</span>
      <button
        type="button"
        onClick={clickHandler}
        className="hover:bg-gray-100 border px-2 py-1 rounded text-sm mt-2"
      >
        Upload your own
      </button>
      <input ref={ref} type="file" hidden onChange={handleFileChange} />
    </div>
  );
};

export default OwnProfile;
