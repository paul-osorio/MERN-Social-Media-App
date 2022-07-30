const SuccessRegister = () => {
  const email = sessionStorage.getItem("email");
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-slate-200">
      <div className="bg-white p-5 shadow rounded-lg border-t-4 border-indigo-500">
        <div className="flex flex-col items-center justify-center mb-2">
          <div className=" relative">
            <i className="fa-solid text-5xl text-indigo-600 fa-envelope-circle-check"></i>
          </div>
          <h1 className="font-bold text-gray-600 text-lg">One More Step</h1>
        </div>
        <p className="w-72 text-center text-gray-700 text-sm">
          We have sent you a verification link to <b>{email}</b>. Please check
          your email and click the link to verify your account.
        </p>
        <div className="my-2 flex items-center justify-center">
          <button className="bg-gray-100 px-3 py-1 rounded shadow  text-sm hover:bg-gray-200">
            Resend Link
          </button>
        </div>
        <a
          href="/login"
          className="block text-center text-indigo-500 font-medium text-sm"
        >
          Go to Login
        </a>
      </div>
    </div>
  );
};
export default SuccessRegister;
