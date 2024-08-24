import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="flex items-center space-x-2 p-4 text-sm">
      <Link to="/" className="text-blue-500 hover:text-blue-700">
        Home
      </Link>
      {pathnames.map((pathname, index) => {
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;

        return (
          <React.Fragment key={to}>
            {index > 0 && <span>&gt;</span>}
            {isLast ? (
              <span className="text-blue-500 font-bold select-none">
                {decodeURIComponent(pathname)}
              </span>
            ) : (
              <Link to={to} className="text-blue-500 hover:text-blue-700">
                {decodeURIComponent(pathname)}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
