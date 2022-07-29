import Styles from "./style.module.css";

interface SignInButtonProps {
  isSubmitting?: boolean;
}

const SignInButton = ({ isSubmitting }: SignInButtonProps) => {
  return (
    <button className={Styles.signInButton}>
      {isSubmitting ? (
        <span>
          <i className="fad fa-circle-notch animate-spin mr-2"></i>Signing In...
        </span>
      ) : (
        "Sign In"
      )}
    </button>
  );
};
export default SignInButton;
