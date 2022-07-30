import { FormContainer } from "../../../components/ui";
import SignInForm from "./SignInForm";
import VybinLogo from "../../../assets/svg/VybinLogo";

const FormCard = () => {
  return (
    <FormContainer>
      <div className="min-w-[320px] mb-10 flex items-center justify-center">
        <VybinLogo className="fill-indigo-700 h-16 w-16" />
        <span className="text-3xl font-bold text-gray-700">VYBIN</span>
      </div>

      <SignInForm />
    </FormContainer>
  );
};

export default FormCard;
