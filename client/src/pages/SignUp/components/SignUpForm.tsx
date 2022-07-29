import { Form, Formik } from "formik";
import * as Yup from "yup";
import { FloatingTextField } from "../../../components/form";

import avatarPlaceholder from "../../../assets/images/avatarPlaceholder.png";
import ReactSelect from "react-select";

/**
 * Interface  props for Sign Up form values
 */

interface FormValues {
  nameFirst: string;
  nameLast: string;
  email: string;
  gender: string;
  avatar: string;
  profile: string;
  password: string;
  passwordConfirm: string;
}

const SignUpForm = () => {
  const options = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Others", label: "Others" },
  ];

  /**
   * declare a variable for the form intialValues
   */

  const initialValues: FormValues = {
    nameFirst: "",
    nameLast: "",
    email: "",
    gender: "",
    avatar: "",
    profile: "",
    password: "",
    passwordConfirm: "",
  };

  /**
   * Create validation schema
   */

  const validationSchema = Yup.object().shape({
    nameFirst: Yup.string().trim().required("First name is required"),
    nameLast: Yup.string().trim().required("Last name is required"),
    gender: Yup.string().required("Gender is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    passwordConfirm: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Password confirmation is required"),
  });

  /**
   * Create function to submit form
   */

  const handleSubmit = (values: FormValues) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className="w-[85%]">
          <div className="w-full flex flex-col items-center justify-center mb-3">
            <img
              src={avatarPlaceholder}
              alt=""
              className="w-20 h-20 rounded-full object-cover shadow border"
            />
            <button className="border px-2 py-1 rounded text-sm mt-2">
              Select Avatar
            </button>
          </div>

          <div className="grid grid-cols-2 gap-x-2 gap-y-4">
            <FloatingTextField
              name="nameFirst"
              placeholder="First Name"
              size="medium"
            />
            <FloatingTextField
              name="nameLast"
              placeholder="Last Name"
              size="medium"
            />
            <div className="col-span-full">
              <FloatingTextField
                name="email"
                placeholder="Email Address"
                size="medium"
              />
            </div>
            <div className="col-span-1">
              <span className="block text-end">Gender:</span>
            </div>

            <div className="col-span-1">
              <ReactSelect options={options} />
            </div>

            <FloatingTextField
              type="password"
              name="password"
              placeholder="Password"
              size="medium"
            />
            <FloatingTextField
              type="password"
              name="passwordConfirm"
              placeholder="Confirm Password"
              size="medium"
            />
            <div className="col-span-1" />

            <div className="col-span-1">
              <button className="bg-indigo-500 text-white w-full py-2 rounded">
                Sign Up
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
