import * as React from "react";
import Layout from "../components/organisms/layout";
import { PageProps } from "gatsby";
import SliderComponent from "../components/organisms/services/slider";

const ServicePage = ({ location }: PageProps) => {
  return (
    <React.Fragment>
      <Layout location={location}>
        <React.Fragment>
          <SliderComponent
            message={"Our Careers"}
            image={
              "https://images.unsplash.com/photo-1469406396016-013bfae5d83e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
            }
          />
          <div className={"my-10"}>
            <div className="text-center">
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Available jobs :
              </p>
            </div>

            <div id={"child-contact-service"}>will come back here later</div>
          </div>
          <div
            className={
              "bg-primary-600 my-4 w-full h-full sm:h-full md:h-full text-white "
            }
          >
            <div
              className={
                "w-full h-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3"
              }
            >
              <div
                className={
                  "w-full h-full col-span-1 bg-primary-700 py-10 flex items-center justify-center"
                }
              >
                <div
                  className={
                    "col-span-6 flex flex-col justify-start sm:justify-start md:justify-center w-11/12 sm:w-11/12 md:w-2/3"
                  }
                >
                  <h1
                    className={
                      " font-light uppercase text-xs sm:text-sm md:text-lg"
                    }
                  >
                    Apply here:
                  </h1>
                  <span className={"mt-1 text-3xl  font-bold text-white"}>
                    Please Download Application Form for respective job and send
                    along with your CV.
                  </span>
                </div>
              </div>
              <div
                className={
                  "w-full h-full col-span-2 flex py-10 items-center justify-center"
                }
              >
                <form
                  className={
                    "grid grid-cols-4 sm:grid-cols-4 md:grid-cols-8 w-11/12 gap-3 py-6 "
                  }
                >
                  <div className={"col-span-4"}>
                    <div>
                      <label htmlFor="name" className={"text-sm text-white"}>
                        Name
                      </label>
                      <div className="mt-1">
                        <input
                          id="name"
                          type="text"
                          required
                          className="py-2 sm:py-2 md:py-5 text-gray-700 border-transparent text-normal sm:text-normal md:text-lg  focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm rounded-none"
                          placeholder="Your Name *"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={"col-span-4"}>
                    <div>
                      <label htmlFor="name" className={"text-sm text-white"}>
                        Email
                      </label>
                      <div className="mt-1">
                        <input
                          type="email"
                          required
                          name="email"
                          id="email"
                          className="py-2 sm:py-2 md:py-5 text-gray-700 text-normal sm:text-normal md:text-lg border-transparent focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm rounded-none"
                          placeholder="Your Email *"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={"col-span-4"}>
                    <div>
                      <label htmlFor="name" className={"text-sm text-white"}>
                        Job Code
                      </label>
                      <div className="mt-1">
                        <input
                          required
                          type="text"
                          className="py-2 sm:py-2 md:py-5 text-gray-700 text-normal sm:text-normal md:text-lg  border-transparent focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm rounded-none"
                          placeholder="Job Code *"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={"col-span-4"}>
                    <div>
                      <label htmlFor="name" className={"text-sm text-white"}>
                        Attach Cv
                      </label>
                      <div className="mt-1 bg-white">
                        <input
                          required
                          type="file"
                          className="py-2 sm:py-2 md:py-4 text-gray-700 px-2 text-normal sm:text-normal md:text-lg  border-transparent focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm rounded-none"
                          placeholder="Job Code *"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={"col-span-4"}>
                    <div>
                      <label htmlFor="name" className={"text-sm text-white"}>
                        Attach Job Application
                      </label>
                      <div className="mt-1 bg-white ">
                        <input
                          required
                          type="file"
                          className="py-2 sm:py-2 md:py-3 text-gray-700 px-2 text-normal sm:text-normal md:text-lg  border-transparent focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm rounded-none"
                          placeholder="Job Code *"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={"col-span-4 flex flex-col"}>
                    <div className={"mb-2 sm:mb-2 md:mb-6"}>
                      <label
                        htmlFor="name"
                        className={"text-sm text-white"}
                      ></label>
                    </div>
                    <button
                      type="submit"
                      className="flex justify-center px-4 py-5 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                    >
                      SEND
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </React.Fragment>
      </Layout>
    </React.Fragment>
  );
};

export default ServicePage;
