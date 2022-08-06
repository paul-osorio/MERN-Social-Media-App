import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useAuth } from "./hooks";
import BodyLayout from "./layout/BodyLayout";
import MainLayout from "./layout/MainLayout";
import Homepage from "./pages/Homepage";
import NotFound from "./pages/NotFound";
import Search from "./pages/Search";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import SuccessRegister from "./pages/SuccessRegister";
import { EmailSessionRoute, PrivateRoute } from "./router";
import PublicRoute from "./router/PublicRoute";
import socket from "./lib/socketClient";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute />}>
        {/**
         * PrivateRoute is a route that is only accessible to authenticated users.
         */}
        <Route element={<MainLayout />}>
          <Route element={<BodyLayout />}>
            <Route path="" element={<Homepage />} />
            <Route path="search" element={<Search />} />
          </Route>
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

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
