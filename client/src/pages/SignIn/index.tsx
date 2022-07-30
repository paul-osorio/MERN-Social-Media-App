import { ImageContainer, AuthContainer } from "../../components/ui";
import LoginBackground from "../../assets/images/login.jpg";
import { FormCard } from "./components";

const SignIn = () => {
  return (
    <AuthContainer>
      <ImageContainer Image={LoginBackground} backgroundColor="#3B6CD2" />

      <FormCard />
    </AuthContainer>
  );
};
export default SignIn;
