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
            <div className="lg:text-center">
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Available jobs :
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
                magnam voluptatum cupiditate veritatis in accusamus quisquam.
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
                  className={"col-span-6 flex flex-col justify-center w-2/3"}
                >
                  <h1
                    className={
                      " font-medium uppercase text-sm sm:text-sm md:text-lg"
                    }
                  >
                    Apply here:
                  </h1>
                  <span className={"mt-1 text-1xl  font-medium text-white"}>
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
                <form className={"grid grid-cols-8 w-11/12 gap-3 py-6 "}>
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
                          className="py-5 text-gray-700 border-transparent text-2xl focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm rounded-none"
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
                          className="py-5 text-gray-700 text-2xl border-transparent focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm rounded-none"
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
                          className="py-5 text-gray-700 text-2xl border-transparent focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm rounded-none"
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
                          className="py-4 text-gray-700 px-2 text-2xl border-transparent focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm rounded-none"
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
                          className="py-3 text-gray-700 px-2 text-2xl border-transparent focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm rounded-none"
                          placeholder="Job Code *"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={"col-span-4 flex flex-col"}>
                    <div className={"mb-1"}>
                      <label htmlFor="name" className={"text-sm text-white"}>
                        Attach Job Application
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="flex justify-center px-4 py-4 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
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
