import * as React from "react";
import Layout from "../components/organisms/layout";
import { PageProps } from "gatsby";
import SliderComponent from "../components/organisms/services/slider";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const ContactUsPage = ({ location }: PageProps) => {
  return (
    <React.Fragment>
      <Layout location={location}>
        <React.Fragment>
          <SliderComponent
            message={"Contact Us"}
            image={
              "https://images.unsplash.com/photo-1469406396016-013bfae5d83e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
            }
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={"my-10 h-full grid grid-cols-8 gap-8"}>
              <div className={"col-span-8 sm:col-span-8 md:col-span-3"}>
                <h1
                  className={"text-primary-600 font-medium  underline text-lg"}
                >
                  CONTACT US
                </h1>
                <h1
                  className={
                    "text-4xl sm:text-4xl md:text-5xl mt-5 text-gray-700 font-bold"
                  }
                >
                  Write us your message.
                </h1>
                <div className={"mt-5 flex flex-row items-center"}>
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-100 text-primary-500">
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div className={"flex flex-col"}>
                    <span className={"ml-3 text-lg text-gray-700 font-bold"}>
                      020 8422 8184
                    </span>
                    <span className={"ml-3 text-sm text-gray-500"}>
                      PHONE LINE
                    </span>
                  </div>
                </div>
                <div className={"mt-7 flex flex-row items-center"}>
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-100 text-primary-500">
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </div>
                  <div className={"flex flex-col"}>
                    <span className={"ml-3 text-lg text-gray-700 font-bold"}>
                      info@projectwest.co.uk
                    </span>
                    <span className={"ml-3 text-sm text-gray-500"}>
                      EMAIL ADDRESS
                    </span>
                  </div>
                </div>
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
          <div>
            <MyMapComponent
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key="
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </div>
        </React.Fragment>
      </Layout>
    </React.Fragment>
  );
};

const MyMapComponent = withScriptjs(
  withGoogleMap((props: any) => (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
      <Marker position={{ lat: -34.397, lng: 150.644 }} />
    </GoogleMap>
  ))
);

export default ContactUsPage;
