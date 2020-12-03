import * as React from "react";
import Layout from "../components/organisms/layout";
import { PageProps } from "gatsby";
import SliderComponent from "../components/organisms/home/slider";
import { Link } from "gatsby";

// markup
const IndexPage = ({ location }: PageProps) => {
  return (
    <React.Fragment>
      <Layout location={location}>
        <React.Fragment>
          <SliderComponent />
          <div className={"my-10 sm:my-10 md:my-10"}>
            <div className=" bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                  {/* <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">
                    Browse through our
                  </h2> */}
                  <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    Our Services
                  </p>
                  {/* <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                    Lorem ipsum dolor sit amet consect adipisicing elit.
                    Possimus magnam voluptatum cupiditate veritatis in accusamus
                    quisquam.
                  </p> */}
                </div>

                <div className="mt-10">
                  <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-100 text-primary-500">
                          <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <dt className="text-lg leading-6 font-medium text-gray-900">
                          Child Contact Service
                        </dt>
                        <dd className="mt-2 text-base text-gray-500">
                          Project West provides all levels of Contact;
                          Supervised; Escorted; Supported; Handover and Indirect{" "}
                          <Link
                            to={"/services#child-contact-service"}
                            className={"text-primary-500 hover:underline"}
                          >
                            Read more...
                          </Link>
                        </dd>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-100 text-primary-500">
                          <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <dt className="text-lg leading-6 font-medium text-gray-900">
                          Assessments
                        </dt>
                        <dd className="mt-2 text-base text-gray-500">
                          We undertake a range of professional Independent
                          Social Work Assessments commissioned by various Local
                          Authorities; Solicitors; the Court; Cafcass or other
                          professionals.{" "}
                          <Link
                            to={"/services#assessments"}
                            className={"text-primary-500 hover:underline"}
                          >
                            Read more...
                          </Link>
                        </dd>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-100 text-primary-500">
                          <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <dt className="text-lg leading-6 font-medium text-gray-900">
                          Family Support
                        </dt>
                        <dd className="mt-2 text-base text-gray-500">
                          Our Family Support Workers support families with
                          parenting capacity issues and other day to day
                          challenges such as stress and disruption associated to
                          for example relationship breakdown, parental
                          ill-health, etc.{" "}
                          <Link
                            to={"/services#family-support"}
                            className={"text-primary-500 hover:underline"}
                          >
                            Read more...
                          </Link>
                        </dd>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-100 text-primary-500">
                          <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <dt className="text-lg leading-6 font-medium text-gray-900">
                          Mentoring
                        </dt>
                        <dd className="mt-2 text-base text-gray-500">
                          We provide young people with an opportunity to learn
                          new skills, broaden their experience through a
                          structured framework of mentoring, advice and guidance
                          over an agreed period.{" "}
                          <Link
                            to={"/services#mentoring"}
                            className={"text-primary-500 hover:underline"}
                          >
                            Read more...
                          </Link>
                        </dd>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-100 text-primary-500">
                          <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <dt className="text-lg leading-6 font-medium text-gray-900">
                          Additional Professional Services
                        </dt>
                        <dd className="mt-2 text-base text-gray-500">
                          Family Group Conferences Chairing Disruption Meetings,
                          Foster Careers Annual Reviews Attendance at Reviews,
                          Professionals Meetings etc{" "}
                          <Link
                            to={"/services#additional-professional-services"}
                            className={"text-primary-500 hover:underline"}
                          >
                            Read more...
                          </Link>
                        </dd>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-100 text-primary-500">
                          <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <dt className="text-lg leading-6 font-medium text-gray-900">
                          Ancillary Services
                        </dt>
                        <dd className="mt-2 text-base text-gray-500">
                          Transportation, Room Hire, Our centre is accessible to
                          people with disabilities{" "}
                          <Link
                            to={"/services#ancillary-services"}
                            className={"text-primary-500 hover:underline"}
                          >
                            Read more...
                          </Link>
                        </dd>
                      </div>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      </Layout>
    </React.Fragment>
  );
};

export default IndexPage;
