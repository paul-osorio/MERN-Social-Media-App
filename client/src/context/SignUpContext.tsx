import React, { createContext, useContext, useState } from "react";

interface SignUpInterface {
  openModal: boolean;
  setOpenModal: (openModal: boolean) => void;
  avatar: any;
  setAvatar: (avatar: any) => void;
  selectedAvatar: any;
  setSelectedAvatar: (selectedAvatar: any) => void;
  profile: any;
  setProfile: (profile: any) => void;
}

export const SignUpContext = createContext<SignUpInterface>({
  openModal: false,
  setOpenModal: () => {},
  avatar: null,
  setAvatar: () => {},
  selectedAvatar: null,
  setSelectedAvatar: () => {},
  profile: null,
  setProfile: () => {},
});

const SignUpProvider = ({ children }: { children: React.ReactNode }) => {
  const [openModal, setOpenModal] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [profile, setProfile] = useState(null);

  const signupContext: SignUpInterface = {
    openModal,
    setOpenModal,
    avatar,
    setAvatar,
    selectedAvatar,
    setSelectedAvatar,
    profile,
    setProfile,
  };

  return (
    <SignUpContext.Provider value={signupContext}>
      {children}
    </SignUpContext.Provider>
  );
};

export const useSignUpContext = () => useContext(SignUpContext);

export default SignUpProvider;
