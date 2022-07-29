import { Form, Formik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { FloatingTextField, SignInButton } from "../../../components/form";

interface FormValues {
  email: string;
  password: string;
}

interface SubmitProps {
  setSubmitting: (isSubmitting: boolean) => void;
}

const SignInForm = () => {
  /**
   * declare a variable for the form values
   */
  const initialValues: FormValues = {
    email: "",
    password: "",
  };

  /**
   * function to handle the form submit
   */
  const handleSubmit = async (
    values: FormValues,
    { setSubmitting }: SubmitProps
  ) => {
    console.log(values);
  };

  /**
   * validation schema for the form
   *  - email: required, email
   *  - password: required
   */
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      validateOnBlur={false}
    >
      {({ isSubmitting }) => (
        <Form className="min-w-[320px]">
          <div className="mb-3">
            <FloatingTextField name="email" placeholder="Email Address" />
          </div>
          <FloatingTextField name="password" placeholder="Password" />
          <Link
            to="/forgotpassword"
            className="text-end block text-sm text-gray-500 hover:text-gray-800"
          >
            Forgot Password
          </Link>
          <br />
          <SignInButton isSubmitting={isSubmitting} />
          <span className="text-sm text-gray-700 block mt-2">
            Not Registered Yet?
            <Link to="/register" className="ml-1 font-medium text-blue-500 ">
              Create an Account
            </Link>
          </span>
        </Form>
      )}
    </Formik>
  );
};

export default SignInForm;
