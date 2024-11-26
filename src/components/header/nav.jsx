import { Link } from "react-router-dom";
import { LuPhone } from "react-icons/lu";
const Nav = () => {
  return (
    <nav>
      <div className="w-4/5 h-14 rounded-md shadow-navShadow bg-white my-5 flex items-center justify-between px-6 py-3 mx-auto md:w-4/5 font-yekan ">
        {/* left links */}
        <ul className="flex items-center space-x-3 ">
          <li>
            <Link
              to="/"
              className="text-white rounded-md text-center bg-primary px-4 py-1 "
            >
              عضویت
            </Link>
          </li>
          <li className="text-primary hidden md:block">
            <Link to="/" className="flex items-center space-x-1">
              <LuPhone className="text-xl" />
              <span className="font-bold">1400</span>
            </Link>
          </li>
        </ul>
        {/* right links */}
        <ul className="flex flex-row-reverse items-center  text-black ">
          <li className="mx-3 hover:text-gray-500 duration-150">
            <Link to="/">
              <img
                src={process.env.PUBLIC_URL + "/images/Home_Icon.png"}
                className="w-8"
                alt="homePage"
              />
              {/* <IoHomeOutline className="text-lg" /> */}
            </Link>
          </li>
          <li className="mx-3 hover:text-gray-500 duration-150 hidden md:block">
            <Link to="/">خدمات</Link>
          </li>
          <li className="mx-3 hover:text-gray-500 duration-150 hidden md:block">
            {" "}
            <Link to="/">درباره</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
