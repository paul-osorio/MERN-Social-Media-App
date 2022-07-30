import { FormContainer } from "../../../components/ui";
import SignUpForm from "./SignUpForm";

const FormCard = () => {
  return (
    <FormContainer>
      <h1 className="text-2xl font-medium text-gray-700 border-b mb-2 border-gray-500">
        VYBIN
      </h1>
      <SignUpForm />
    </FormContainer>
  );
};

export default FormCard;
