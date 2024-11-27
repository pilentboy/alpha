import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "خانه";
  }, []);
  return (
    <main>
      <div className="w-full h-64 flex items-center justify-center  bg-slate-400 ">
        <h1>خانه</h1>
      </div>
    </main>
  );
};

export default Home;
