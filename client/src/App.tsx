import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Homepage from "./pages/Homepage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import SuccessRegister from "./pages/SuccessRegister";
import { EmailSessionRoute, PrivateRoute } from "./router";
import PublicRoute from "./router/PublicRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute />}>
        {/**
         * PrivateRoute is a route that is only accessible to authenticated users.
         */}
        <Route element={<MainLayout />}>
          <Route path="" element={<Homepage />} />
        </Route>
      </Route>
      <Route element={<PublicRoute />}>
        {/**
         * All the routes that are only accessible to unauthenticated users
         */}
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />

        <Route element={<EmailSessionRoute />}>
          {/**
           * Route to the email verification page.
           * with protected route this will only show if the email is stored in the session storage.
           */}
          <Route path="/registerSuccess" element={<SuccessRegister />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
