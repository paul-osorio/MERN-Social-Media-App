import { Navigate, Outlet } from "react-router-dom";

const EmailSessionRoute = () => {
  /**
   * Check if the email is stored in the session storage.
   * If it is, then we can show the email verification page.
   * If not, then we can show the login page.
   */
  const session = sessionStorage.getItem("email");

  return session ? <Outlet /> : <Navigate to="/login" replace />;
};
export default EmailSessionRoute;
