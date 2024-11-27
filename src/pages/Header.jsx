import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/header/nav";

const Header = () => {
  useEffect(() => {
    document.title = "خانه";
  }, []);
  return (
    <>
      <header>
        <Nav />
      </header>
      <Outlet />
    </>
  );
};

export default Header;
