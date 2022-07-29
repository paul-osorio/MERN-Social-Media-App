import Style from "./style.module.css";

/**
 * Container component for the SignIn page.
 */

interface ContainerProps {
  children: React.ReactNode;
}

/**
 * Main container component for the SignIn page.
 */
const Container = ({ children }: ContainerProps) => {
  return (
    <div className={Style.container}>
      <div className={Style.containerGrid}>{children}</div>
    </div>
  );
};

/**
 * Image container component for the SignIn page.
 */
export const ImageContainer = ({ Image }: { Image: string }) => {
  return (
    <div
      className={Style.imageContainer}
      style={{
        backgroundImage: `url(${Image})`,
        backgroundColor: "#3B6CD2",
      }}
    ></div>
  );
};

/**
 * Form container for the SignIn page.
 */

export const FormContainer = ({ children }: ContainerProps) => {
  return (
    <div className={Style.formContainer}>
      <div className={Style.formContainerAlign}>{children}</div>
    </div>
  );
};

export default Container;
