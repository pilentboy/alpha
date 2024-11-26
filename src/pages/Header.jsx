import Nav from "../components/header/nav";
import { Outlet } from "react-router-dom";
const Header = () => {
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
