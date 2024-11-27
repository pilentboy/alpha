import { Link } from "react-router-dom";

const NavLink = ({ title, target }) => (
  <li className="mx-3 hover:text-gray-500 duration-150 hidden md:block">
    <Link to={target}>{title}</Link>
  </li>
);

export default NavLink;
