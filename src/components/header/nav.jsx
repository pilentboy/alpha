import { Link } from "react-router-dom";
import NavLink from "./navLink";
import JoinLink from "./joinLink";
import Logo from "./logo";

const Nav = () => (
  <nav>
    <div className="fixed bottom-0 left-[50%] translate-x-[-50%]  w-4/5 h-16 rounded-md shadow-soft bg-white my-5 flex items-center justify-between px-6 py-3 mx-auto md:w-[90%] font-yekan md:relative md:bottom-0 md:left-0 md:translate-x-0">
      {/* left links */}
      <ul className="flex items-center space-x-3 ">
        <li>
          <JoinLink />
        </li>
        <li className="text-primary hidden md:block">
          <Link to="/" className="flex items-center space-x-1">
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
        <NavLink title="خدمات" target="/" />
        <NavLink title="درباره" target="/" />
      </ul>

      {/* logo */}
      <Logo />
    </div>
  </nav>
);

export default Nav;
