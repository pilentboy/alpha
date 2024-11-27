import { useEffect } from "react";
const Service = () => {
  useEffect(() => {
    document.title = "خدمات";
  }, []);
  return (
    <main>
      <div className="w-full h-64 flex items-center justify-center  bg-slate-400 ">
        <h1>خدمات</h1>
      </div>
    </main>
  );
};

export default Service;
