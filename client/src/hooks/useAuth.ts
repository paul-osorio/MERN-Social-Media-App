import { useEffect, useState } from "react";
import { userSession } from "../lib/auth";

const useAuth = () => {
  const [auth, setAuth] = useState<any>(null);

  const authenticate = async () => {
    try {
      await userSession();
      setAuth(true);
    } catch (error: any) {
      setAuth(false);
    }
  };

  useEffect(() => {
    authenticate();
  }, []);

  return auth;
};

export default useAuth;
