import { useField, FieldHookConfig } from "formik";
import { useRef, useState } from "react";
import Style from "./style.module.css";

interface TextFieldProps {
  label?: string;
  size?: "small" | "medium" | "large";
}

const PasswordTextField = (props: TextFieldProps & FieldHookConfig<string>) => {
  const [showPassword, setShowPassword] = useState(false);
  const ref = useRef<any>(null);
  const [field, meta] = useField<any>(props);

  const { label, size } = props;

  const inputSize =
    size === "small" ? "py-1" : size === "medium" ? "py-2" : "py-3";

  const labelSize =
    size === "small"
      ? Style.smallLabel
      : size === "medium"
      ? Style.mediumLabel
      : Style.largeLabel;

  return (
    <div className="">
      <div className="relative flex items-center">
        <input
          {...field}
          ref={ref}
          type={showPassword ? "text" : "password"}
          placeholder={props.placeholder}
          className={
            Style.floatingInput +
            " " +
            inputSize +
            " " +
            /**
             * if the field is touched and has an error, add the error class
             */

            (meta.touched && meta.error && Style.inputError)
          }
          autoComplete="off"
        />
        <div
          className="absolute right-3 cursor-pointer text-gray-700 hover:text-gray-900"
          onClick={() => {
            setShowPassword(!showPassword);
            ref.current.focus();
          }}
        >
          {!showPassword ? (
            <i className="fa-solid fa-eye"></i>
          ) : (
            <i className="fa-solid fa-eye-slash"></i>
          )}
        </div>
        <label className={Style.floatingLabel + " " + labelSize}>
          {props.placeholder}
        </label>
      </div>

      {meta.touched && meta.error ? (
        <div className={Style.error}>{meta.error}</div>
      ) : null}
    </div>
  );
};
export default PasswordTextField;
