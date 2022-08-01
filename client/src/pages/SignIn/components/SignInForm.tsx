import { Form, Formik, FormikHelpers } from "formik";
import { Link, Navigate, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { FloatingTextField, SignInButton } from "../../../components/form";
import { userSignIn } from "../../../lib/auth";
import { PasswordTextField } from "../../../components/form";

interface FormValues {
  email: string;
  password: string;
}

type FormikSubmitHandler<V> = (value: V, actions: FormikHelpers<V>) => void;

const SignInForm = () => {
  const navigate = useNavigate();
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
  const handleSubmit: FormikSubmitHandler<FormValues> = async (
    values,
    { setSubmitting, setFieldError }
  ) => {
    setSubmitting(true);

    try {
      await userSignIn(values);

      navigate("/");
      setSubmitting(false);
    } catch (error: any) {
      const errorMessage = error.response.data.message;

      if (errorMessage === "User not found") {
        setFieldError("email", "User not found");
      }
      if (errorMessage === "Incorrect password") {
        setFieldError("password", "Incorrect password");
      }
    }
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
          <div className="mb-4">
            <FloatingTextField name="email" placeholder="Email Address" />
          </div>
          <PasswordTextField name="password" placeholder="Password" />
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
