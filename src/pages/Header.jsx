import Nav from "../components/header/nav";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
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
