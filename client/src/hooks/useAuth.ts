import { useEffect, useState } from "react";
import { userSession } from "../lib/auth";

const useAuth = () => {
  const [auth, setAuth] = useState<any>(null);
  const [user, setUser] = useState<any>(null);

  const authenticate = async () => {
    try {
      const res = await userSession();
      setUser(res.data);
      setAuth(true);
    } catch (error: any) {
      setAuth(false);
      setUser(null);
    }
  };

  useEffect(() => {
    authenticate();
  }, []);

  return { user, auth };
};

export default useAuth;
