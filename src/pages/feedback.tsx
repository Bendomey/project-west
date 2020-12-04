import * as React from "react";
import Layout from "../components/organisms/layout";
import { PageProps } from "gatsby";
import SliderComponent from "../components/organisms/services/slider";

const FeedbackPage = ({ location }: PageProps) => {
  return (
    <React.Fragment>
      <Layout location={location}>
        <React.Fragment>
          <SliderComponent
            message={"Feedback"}
            image={
              "https://images.unsplash.com/photo-1469406396016-013bfae5d83e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
            }
          />
          <div className="max-w-7xl py-5 mx-auto px-4 sm:px-6 lg:px-8">
            <div className={"my-10 h-full grid grid-cols-8 gap-8"}>
              <div className={"col-span-8 sm:col-span-8 md:col-span-3"}>
                <h1
                  className={"text-primary-600 font-medium  underline text-lg"}
                >
                  FEEDBACK
                </h1>
                <h1
                  className={
                    "text-4xl sm:text-4xl md:text-5xl mt-5 text-gray-700 font-bold"
                  }
                >
                  Send us some feedback
                </h1>
              </div>
              <div className={"col-span-8 sm:col-span-8 md:col-span-5"}>
                <div className={"grid md:grid-cols-2 gap-5"}>
                  <div className={"col-span-2 sm:col-span-2 md:col-span-1"}>
                    <input
                      id="name"
                      type="text"
                      required
                      className="py-4 sm:py-4 md:py-5 bg-gray-100 text-gray-700 border-transparent text-sm sm:text-sm md:text-lg  focus:ring-primary-500 focus:border-primary-500 block w-full rounded-none"
                      placeholder="Your Name *"
                    />
                  </div>
                  <div className={"col-span-2 sm:col-span-2 md:col-span-1"}>
                    <input
                      id="name"
                      type="text"
                      required
                      className="py-4 sm:py-4 md:py-5 bg-gray-100 text-gray-700 border-transparent text-sm sm:text-sm md:text-lg  focus:ring-primary-500 focus:border-primary-500 block w-full rounded-none"
                      placeholder="Your Email *"
                    />
                  </div>
                  <div className={"col-span-2"}>
                    <input
                      id="name"
                      type="text"
                      required
                      className="py-4 sm:py-4 md:py-5 bg-gray-100 text-gray-700 border-transparent text-sm sm:text-sm md:text-lg  focus:ring-primary-500 focus:border-primary-500 block w-full rounded-none"
                      placeholder="Subject"
                    />
                  </div>
                  <div className={"col-span-2"}>
                    <textarea
                      id="name"
                      required
                      rows={5}
                      className="py-4 sm:py-4 md:py-5 bg-gray-100 text-gray-700 border-transparent text-sm sm:text-sm md:text-lg  focus:ring-primary-500 focus:border-primary-500 block w-full rounded-none"
                      placeholder="Write Message ..."
                    ></textarea>
                  </div>
                  <div className={"col-span-2"}>
                    <button
                      type="submit"
                      className="flex justify-center px-4 py-4 w-full sm:w-full md:w-1/3 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                    >
                      SEND
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      </Layout>
    </React.Fragment>
  );
};

export default FeedbackPage;
