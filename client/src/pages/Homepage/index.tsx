import { Navbar } from "../../components/ui";
import { userSignOut } from "../../lib/auth";

const Homepage = () => {
  const logout = async () => {
    await userSignOut();
    window.location.reload();
  };

  return (
    <>
      <Navbar />
      <div>
        <button onClick={logout} className="p-2 bg-red-500 text-white">
          {" "}
          Logout
        </button>
        <p>
          This is the homepage. You can logout by clicking the button above.
        </p>
      </div>
    </>
  );
};

export default Homepage;
