import { useField, FieldHookConfig } from "formik";
import Style from "./style.module.css";

interface TextFieldProps {
  label?: string;
  size?: "small" | "medium" | "large";
}

const FloatingTextField = (props: TextFieldProps & FieldHookConfig<string>) => {
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
      <div className="relative">
        <input
          {...field}
          type={props.type}
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
export default FloatingTextField;
