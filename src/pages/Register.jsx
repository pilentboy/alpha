import { useEffect } from "react";

const Register = () => {
  useEffect(() => {
    document.title = "احراز هویت";
  }, []);
  return (
    <main>
      <div className="w-full h-64 flex items-center justify-center  bg-slate-400 ">
        <h1>عضویت</h1>
      </div>
    </main>
  );
};

export default Register;
