import { Link } from "react-router-dom";

const SubmitButton = ({ isSubmitting }: { isSubmitting: boolean }) => {
  return (
    <>
      <div className="col-span-1 flex justify-center">
        <span className="text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-500 font-medium">
            Sign In
          </Link>
        </span>
      </div>
      <div className="col-span-1">
        <button
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-600 text-white w-full py-2 rounded"
        >
          {isSubmitting ? (
            <span>
              <i className="fad fa-circle-notch animate-spin mr-2"></i>Signing
              Up...
            </span>
          ) : (
            "Sign Up"
          )}
        </button>
      </div>
    </>
  );
};

export default SubmitButton;
