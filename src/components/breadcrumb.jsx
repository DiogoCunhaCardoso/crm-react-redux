import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="flex items-center space-x-2 p-4">
      <Link to="/" className="text-blue-500 hover:text-blue-700">
        Home
      </Link>
      {pathnames.map((pathname, index) => {
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        return (
          <React.Fragment key={to}>
            <span>&gt;</span>
            <Link
              to={to}
              className={`text-blue-500 hover:text-blue-700 ${
                index === pathnames.length - 1 ? "font-bold" : ""
              }`}
            >
              {decodeURIComponent(pathname)}
            </Link>
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
