import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks";

const PublicRoute = () => {
  /**
   * A public route is a route that is only accessible to unauthenticated users.
   */
  const auth = useAuth();
  if (auth === null || auth === undefined) {
    return null;
  }

  /**
   * if the user is not authenticated, shows the rest of the page
   */

  return !auth ? <Outlet /> : <Navigate to="/" replace />;
};

export default PublicRoute;
