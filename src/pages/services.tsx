import * as React from "react";
import Layout from "../components/organisms/layout";
import { PageProps } from "gatsby";
import SliderComponent from "../components/organisms/services/slider";
import ChildrenContactService from "../components/organisms/services/children-contact-services";

const ServicePage = ({ location }: PageProps) => {
  return (
    <React.Fragment>
      <Layout location={location}>
        <React.Fragment>
          <SliderComponent
            message={"Our Services"}
            image={
              "https://images.unsplash.com/photo-1469406396016-013bfae5d83e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
            }
          />
          <div className={"my-10"}>
            {/* <div className="lg:text-center">
              <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">
                Services
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                We provide the following services:
              </p>
            </div> */}

            <div id={"child-contact-service mt-5"}>
              <div className={"text-center"}>
                <h2 className="text-base  text-primary-600 font-semibold tracking-wide uppercase">
                  Child Contact Service
                </h2>
                <p className="mt-4 max-w-2xl text-sm sm:text-sm md:text-xl text-gray-500 lg:mx-auto">
                  Project West provides all levels of Contact; Supervised;
                  Escorted; Supported; Handover and Indirect.
                </p>
              </div>
              <div className="max-w-7xl py-5 mx-auto px-4 sm:px-6 lg:px-8">
                <ChildrenContactService />
              </div>
            </div>
          </div>
        </React.Fragment>
      </Layout>
    </React.Fragment>
  );
};

export default ServicePage;
