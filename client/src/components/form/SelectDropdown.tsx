import ReactSelect, { StylesConfig } from "react-select";
import { useField, FieldProps } from "formik";
import Style from "./style.module.css";

interface SelectDropdown {
  label?: string;
  options: Array<{ value: string; label: string }>;
  placeholder: string;
  name: string;
}

const SelectDropdown = (props: FieldProps & SelectDropdown) => {
  const [field, meta, { setValue, setTouched }] = useField<any>(
    props.field.name
  );

  const handleChange = (options: any) => {
    setValue(options.value);
  };

  const customStyles: StylesConfig = {
    control: (base: any) => ({
      ...base,
      border: meta.touched && meta.error ? "1px solid #fca5a5" : "",
      paddingTop: "0.12rem",
      paddingBottom: "0.12rem",
    }),
  };

  return (
    <div>
      <ReactSelect
        styles={customStyles}
        name={props.name}
        placeholder={props.placeholder}
        options={props.options}
        onChange={handleChange}
        onBlur={() => {
          setTouched(true);
        }}
      />
      {meta.touched && meta.error ? (
        <div className={Style.error}>{meta.error}</div>
      ) : null}
    </div>
  );
};

export default SelectDropdown;
