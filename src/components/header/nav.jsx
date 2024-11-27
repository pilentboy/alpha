import { Link } from "react-router-dom";
import NavLink from "./navLink";
import JoinLink from "./joinLink";
import Logo from "./logo";

const Nav = () => (
  <nav>
    <div className="nav">
      {/* left links */}
      <ul className="flex items-center space-x-3 ">
        <li>
          <JoinLink />
        </li>
        <li className="text-primary hidden md:block">
          <Link to="/phone" className="flex items-center space-x-1">
            {/* <LuPhone className="text-xl" /> */}
            <i>
              <img
                src={`${process.env.PUBLIC_URL}/icons/Phone_Icon.svg`}
                className="w-7"
                alt="phone"
              />
            </i>
            <span className="font-bold">۱۴۰۰</span>
          </Link>
        </li>
      </ul>

      {/* right links */}
      <ul className="flex flex-row-reverse items-center  text-black ">
        <li className=" hover:text-gray-500 duration-150 md:mx-3">
          <Link to="/">
            <i>
              <img
                src={`${process.env.PUBLIC_URL}/icons/Home_Icon.png`}
                className="w-12 md:w-8 hover:scale-105 duration-150"
                alt="home page"
                title="خانه"
              />
            </i>
          </Link>
        </li>
        <NavLink title="خدمات" target="/service" />
        <NavLink title="درباره" target="/about" />
      </ul>

      {/* logo */}
      <Logo />
    </div>
  </nav>
);

export default Nav;
