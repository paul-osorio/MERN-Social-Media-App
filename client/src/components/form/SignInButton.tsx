import Styles from "./style.module.css";

interface SignInButtonProps {
  isSubmitting?: boolean;
}

const SignInButton = ({ isSubmitting }: SignInButtonProps) => {
  return (
    <button
      type="submit"
      className="w-full bg-indigo-500 hover:bg-indigo-600 py-3 shadow shadow-black/20 transition-all rounded  active:shadow-inner active:shadow-black/20 text-white"
    >
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
