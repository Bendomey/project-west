import * as React from "react";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <React.Fragment>
      <div
        className={"bg-primary-600 w-full h-full sm:h-full md:h-44 text-white "}
      >
        <div
          className={
            "w-full h-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3"
          }
        >
          <div
            className={
              "w-full h-full col-span-1 flex items-center justify-center"
            }
          >
            <div className={"grid grid-cols-8 w-11/12 gap-x-3 py-6 "}>
              <div className={"col-span-2 flex justify-center items-center "}>
                <div className={"bg-white p-2"}>
                  <img
                    src={
                      "https://firebasestorage.googleapis.com/v0/b/fibonacci-commerce.appspot.com/o/NACCC-logo.png?alt=media&token=a4377930-9c37-40a9-9f07-bccb8cb35724"
                    }
                    // src="http://www.projectwest.co.uk/wp-content/uploads/2014/11/naccc1.png"
                    className={"h-auto w-auto"}
                    alt=""
                  />
                </div>
              </div>
              <div className={"col-span-6 flex flex-col justify-center"}>
                <h1 className={" font-medium text-sm sm:text-sm md:text-lg"}>
                  Enhanced Accredited by NACCC
                </h1>
                <span className={"mt-1 text-sm font-thin text-white"}>
                  We are Enhanced Accredited by the National Association of
                  Child Contact Centres (NACCC).
                </span>
              </div>
            </div>
          </div>
          <div
            className={
              "w-full h-full col-span-1 flex items-center bg-primary-700 justify-center"
            }
          >
            <div className={"grid grid-cols-8 w-11/12 gap-x-3 py-6 "}>
              <div className={"col-span-2 flex justify-center items-center"}>
                <img
                  src={
                    "http://www.projectwest.co.uk/wp-content/uploads/2014/11/Independent-and-Family-Centric.jpg"
                  }
                  className={"h-auto w-auto"}
                  alt=""
                />
              </div>
              <div className={"col-span-6 flex flex-col justify-center"}>
                <h1 className={" font-medium text-sm sm:text-sm md:text-lg"}>
                  Independent and Family Centric
                </h1>
                <span className={"mt-1 text-sm font-thin text-white"}>
                  We are an independent and family centric organisation
                  operating in dedicated premises.
                </span>
              </div>
            </div>
          </div>
          <div
            className={
              "w-full h-full col-span-1 flex items-center justify-center"
            }
          >
            <div className={"grid grid-cols-8 w-11/12 gap-x-3 py-6 "}>
              <div className={"col-span-2 flex justify-center items-center"}>
                <img
                  src="http://www.projectwest.co.uk/wp-content/uploads/2014/11/iStock_000008323614Medium.jpg"
                  className={"h-auto w-auto"}
                  alt=""
                />
              </div>
              <div className={"col-span-6 flex flex-col justify-center"}>
                <h1 className={" font-medium text-sm sm:text-sm md:text-lg"}>
                  Homely and Safe Environment
                </h1>
                <span className={"mt-1 text-sm font-thin text-white"}>
                  We provide a safe, friendly and warm environment in which we
                  work with many families.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <nav
            className="-mx-5 -my-2 flex flex-wrap justify-center"
            aria-label="Footer"
          >
            <div className="px-5 py-2">
              <Link
                to="/about-us"
                className="text-base text-gray-500 hover:text-gray-900"
              >
                About
              </Link>
            </div>

            <div className="px-5 py-2">
              <Link
                to="/services"
                className="text-base text-gray-500 hover:text-gray-900"
              >
                Services
              </Link>
            </div>

            <div className="px-5 py-2">
              <Link
                to="/careers"
                className="text-base text-gray-500 hover:text-gray-900"
              >
                Careers
              </Link>
            </div>

            <div className="px-5 py-2">
              <Link
                to="/services"
                className="text-base text-gray-500 hover:text-gray-900"
              >
                Services
              </Link>
            </div>

            <div className="px-5 py-2">
              <Link
                to="/feedback"
                className="text-base text-gray-500 hover:text-gray-900"
              >
                Feedback
              </Link>
            </div>

            <div className="px-5 py-2">
              <Link
                to="/policies-and-procedures"
                className="text-base text-gray-500 hover:text-gray-900"
              >
                Policy And Procedures
              </Link>
            </div>
          </nav>

          <div className="mt-8 flex justify-center space-x-6">
            <a
              href="https://www.facebook.com/pages/Project-West/1503993466547315"
              target={"_blank"}
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Facebook</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/project-west-ltd"
              target={"_blank"}
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">LinkedIn</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-linkedin h-6 w-6"
              >
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                <path d="M2 9H6V21H2z" />
                <circle cx={4} cy={4} r={2} />
              </svg>
            </a>
            <a
              href="https://twitter.com/info_pwest"
              target={"_blank"}
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Twitter</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            {/* <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">GitHub</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>

            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Dribbble</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                  clip-rule="evenodd"
                />
              </svg>
            </a> */}
          </div>
          <p className="mt-8 text-center text-base text-gray-400">
            &copy; 2015 - {new Date().getFullYear()} Copyright by{" "}
            <span className="text-primary-600">Projectwest.co.uk</span>
          </p>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
