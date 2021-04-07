import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  return (
    <ul className="text-right sticky top-8">
      <li className="mb-2">
        <Link
          to="/"
          className={`pr-4 border-r-4 ${
            location.pathname === "/"
              ? "border-green-500"
              : "hover:text-green-500 border-white"
          }`}
        >
          All Notes
        </Link>
      </li>
      <li>
        <Link
          to="/addnote"
          className={`pr-4 border-r-4 ${
            location.pathname === "/addnote"
              ? "border-green-500"
              : "hover:text-green-500 border-white"
          }`}
        >
          New Note
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
