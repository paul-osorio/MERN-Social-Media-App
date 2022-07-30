import { AuthContainer, ImageContainer } from "../../components/ui";
import { FormCard } from "./components";
import registerImage from "../../assets/images/register.jpg";
import AvatarsModal from "./components/AvatarsModal";
import SignUpProvider, { useSignUpContext } from "../../context/SignUpContext";
import { AnimatePresence } from "framer-motion";

const SignUpChildren = () => {
  const { openModal, setOpenModal } = useSignUpContext();
  const handleModal = () => setOpenModal(false);

  return (
    <>
      <AuthContainer>
        <ImageContainer Image={registerImage} backgroundColor="#FFDE7C" />
        <FormCard />
      </AuthContainer>

      <AnimatePresence>
        {openModal && <AvatarsModal handleClose={handleModal} />}
      </AnimatePresence>
    </>
  );
};

const SignUp = () => {
  return (
    <SignUpProvider>
      <SignUpChildren />
    </SignUpProvider>
  );
};

export default SignUp;
