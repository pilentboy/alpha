import { useEffect } from "react";

const Phone = () => {
  useEffect(() => {
    document.title = "تماس";
  }, []);
  return (
    <main>
      <div className="w-full h-64 flex items-center justify-center  bg-slate-400 ">
        <h1>تماس</h1>
      </div>
    </main>
  );
};

export default Phone;
