import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />
    </Routes>
  );
}

export default App;
