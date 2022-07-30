import { Field, Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { FloatingTextField, SelectDropdown } from "../../../components/form";
import { useSignUpContext } from "../../../context/SignUpContext";
import { userSignUp } from "../../../lib/auth";
import SelectAvatar from "./SelectAvatar";

import SubmitButton from "./SubmitButton";

/**
 * Interface  props for Sign Up form values
 */

interface FormValues {
  nameFirst: string;
  nameLast: string;
  email: string;
  gender: string;
  password: string;
  passwordConfirm: string;
}

type FormikSubmitHandler<V> = (value: V, actions: FormikHelpers<V>) => void;

const SignUpForm = () => {
  const { avatar, selectedAvatar } = useSignUpContext();

  /**
   * Define Gender Dropdown options
   */
  const genderOptions = [
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

  const handleSubmit: FormikSubmitHandler<FormValues> = async (
    values,
    { setSubmitting }
  ) => {
    setSubmitting(true);

    /**
     * Create a new user
     */
    const data = {
      nameFirst: values.nameFirst,
      nameLast: values.nameLast,
      email: values.email,
      password: values.password,
      avatar: selectedAvatar,
      profile: avatar,
      gender: values.gender,
    };

    try {
      await userSignUp(data);
      setSubmitting(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validateOnBlur={false}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, setFieldValue }) => (
        <Form className="w-[85%]">
          <SelectAvatar />
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
              <span className="block text-end text-sm text-gray-700">
                Gender:
              </span>
            </div>

            <div className="col-span-1">
              <Field
                component={SelectDropdown}
                name="gender"
                options={genderOptions}
                placeholder="Select Gender"
              />
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
            <SubmitButton isSubmitting={isSubmitting} />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
