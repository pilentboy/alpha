import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "درباره";
  }, []);
  return (
    <main>
      <div className="w-full h-64 flex items-center justify-center  bg-slate-400 ">
        <h1>درباره</h1>
      </div>
    </main>
  );
};

export default About;
