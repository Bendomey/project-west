import * as React from "react";
import MenuLink from "../../atoms/MenuLink";
import routes, { RouteProps } from "../../../services/routes";
import { HeaderProps } from "./types.d";
import { Transition } from "@headlessui/react";
import { Link } from "gatsby";

const HeaderContainer: React.FC<HeaderProps> = ({ location }) => {
  const [showDropdownMenus, setShowDropdownMenus] = React.useState<boolean>(
    false
  );
  return (
    <React.Fragment>
      <nav className="bg-white shadow-sm">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Link to={"/"}>
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                  />
                </Link>
                <Link to={"/"}>
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                    alt="Workflow"
                  />
                </Link>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8 h-full">
                {/* <!-- Current: "border-primary-500 text-gray-900", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" --> */}
                {routes.map((route: RouteProps, i: number) => (
                  <React.Fragment key={i}>
                    <MenuLink
                      name={route.name}
                      path={route.path}
                      currentUrl={location?.pathname}
                    />
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className="-mr-2 flex items-center sm:hidden">
              {/* <!-- Mobile menu button --> */}
              <button
                onClick={() => setShowDropdownMenus(!showDropdownMenus)}
                className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                <span className="sr-only">Open main menu</span>

                {showDropdownMenus ? (
                  <svg
                    className=" h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <div className={"absolute w-full z-10 top-14"}>
          <Transition
            show={showDropdownMenus}
            enter="transform transition ease-in-out duration-500 sm:duration-700"
            enterFrom="-translate-y-full"
            enterTo="translate-y-0"
            leave="transform transition ease-in-out duration-500 sm:duration-700"
            leaveFrom="translate-y-0"
            leaveTo="-translate-y-full"
          >
            <div
              className={`block bg-white sm:block md:hidden: lg:hidden shadow-lg`}
            >
              <div className="pt-2 pb-3 space-y-1">
                {/* <!-- Current: "bg-primary-50 border-primary-500 text-primary-700", Default: "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800" --> */}
                {routes.map((route: RouteProps, i: number) => (
                  <React.Fragment key={i}>
                    <MenuLink
                      name={route.name}
                      path={route.path}
                      currentUrl={location?.pathname}
                      small
                    />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </Transition>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default HeaderContainer;
