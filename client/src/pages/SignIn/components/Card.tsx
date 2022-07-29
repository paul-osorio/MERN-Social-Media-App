import { FormContainer } from "../../../components/ui";
import SignInForm from "./SignInForm";

const FormCard = () => {
  return (
    <FormContainer>
      <div className="min-w-[320px] mb-10 flex items-center justify-center">
        <img src="https://www.svgrepo.com/show/209153/connection.svg" alt="" />
        <h1>VYBIN</h1>
      </div>

      <SignInForm />
    </FormContainer>
  );
};

export default FormCard;
