import * as React from "react";
import { MenuLinkProps } from "./types.d";
import { Link } from "gatsby";

const MenuLink: React.FC<MenuLinkProps> = ({
  name,
  path,
  currentUrl,
  small,
}) => {
  return (
    <React.Fragment>
      {small ? (
        <React.Fragment>
          <Link
            to={path}
            className={`${
              currentUrl === path
                ? "bg-primary-50 border-primary-500 text-primary-700"
                : " text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
            } border-transparent block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
          >
            {name}
          </Link>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Link
            to={path}
            className={`${
              currentUrl === path
                ? "border-primary-700 text-primary-900"
                : "text-gray-900  hover:text-gray-600 hover:border-gray-300"
            }  h-full border-transparent inline-flex items-center px-1 pt-1 border-t-4 text-sm font-medium`}
          >
            {name}
          </Link>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default MenuLink;
