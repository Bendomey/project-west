import * as React from "react";
import Layout from "../components/organisms/layout";
import { PageProps } from "gatsby";
import SliderComponent from "../components/organisms/services/slider";
import ChildrenContactService from "../components/organisms/services/children-contact-services";
import Assessments from "../components/organisms/services/Assessments";

const ServicePage = ({ location }: PageProps) => {
  return (
    <React.Fragment>
      <Layout location={location}>
        <React.Fragment>
          <SliderComponent
            message={"Our Services"}
            image={
              "https://firebasestorage.googleapis.com/v0/b/fibonacci-commerce.appspot.com/o/photo-1469406396016-013bfae5d83e.jpeg?alt=media&token=58ec11cc-33e1-4e7a-abcf-425b29168d63"
            }
          />
          <div className={"my-10"}>
            <section id={"child-contact-service"} className={"mt-5"}>
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
            </section>

            <section id={"assessments"} className={"mt-5"}>
              <div className={"text-center"}>
                <h2 className="text-base  text-primary-600 font-semibold tracking-wide uppercase">
                  Assessments
                </h2>
                <p className="mt-4 max-w-2xl text-sm sm:text-sm md:text-xl text-gray-500 lg:mx-auto">
                  We undertake a range of professional Independent Social Work
                  Assessments commissioned by various Local Authorities;
                  Solicitors; the Court; Cafcass or other professionals.
                </p>
              </div>
              <div className="max-w-7xl py-5 mx-auto px-4 sm:px-6 lg:px-8">
                <Assessments />
              </div>
            </section>
            <div className="max-w-7xl py-5 mx-auto px-4 sm:px-6 lg:px-8">
              <div className={"grid grid-cols-2 gap-8"}>
                <div
                  className={
                    "col-span-2 sm:col-span-2 md:col-span-1 bg-gray-50 py-5 px-3"
                  }
                >
                  <section id={"family-support"} className={"mt-5"}>
                    <div className={"text-center"}>
                      <h2 className="text-base  text-primary-600 font-semibold tracking-wide uppercase">
                        Family Support
                      </h2>
                      <p className="mt-4 text-sm sm:text-sm md:text-xl text-gray-500 lg:mx-auto">
                        Our Family Support Workers support families with
                        parenting capacity issues and other day to day
                        challenges such as stress and disruption associated to
                        for example relationship breakdown, parental ill-health,
                        etc.
                      </p>
                      <p className="mt-4 w-11/12 font-light text-sm sm:text-sm md:text-normal text-gray-500 lg:mx-auto">
                        Our family support intervention builds on family
                        strengths to maximise parental capacity and to minimise
                        potential risks. It ranges from basic to intensive
                        family support focusing on boundaries, routines,
                        building attachment, behaviour management, parenting &
                        cultural integration issues, specific parenting capacity
                        work and much more. Its objective is to improve
                        communication, reduce conflict and to agree on
                        practical, workable arrangements for the future, taking
                        into account children’s views, needs and feelings.
                      </p>
                      <p className={"text-gray-500 mx-auto"}>
                        Our focus is on putting children’s needs first and
                        making family life less stressful for everyone.
                      </p>
                    </div>
                  </section>
                </div>
                <div
                  className={
                    "col-span-2 sm:col-span-2 md:col-span-1 bg-gray-50 p-3"
                  }
                >
                  <section id={"mentoring"} className={"mt-5"}>
                    <div className={"text-center"}>
                      <h2 className="text-base  text-primary-600 font-semibold tracking-wide uppercase">
                        Mentoring
                      </h2>
                      <p className="mt-4 text-sm sm:text-sm md:text-xl text-gray-500 lg:mx-auto">
                        We provide young people with an opportunity to learn new
                        skills, broaden their experience through a structured
                        framework of mentoring, advice and guidance over an
                        agreed period.
                      </p>
                    </div>
                  </section>
                  <div className={"px-5"}>
                    <section
                      id={"additional-professional-services"}
                      className={"mt-5 "}
                    >
                      <div className={"px-3"}>
                        <h2 className=" text-base text-center text-primary-600 font-semibold tracking-wide uppercase">
                          Additional Professional Services
                        </h2>
                        <ul className="list-disc list-outside mt-4  text-sm sm:text-sm md:text-normal text-gray-500 lg:mx-auto">
                          <li className={"mt-2"}>
                            Family Group Conferences Chairing Disruption
                            Meetings
                          </li>
                          <li className={"mt-2"}>
                            Foster Careers Annual Reviews Attendance at Reviews,
                            Professionals Meetings etc
                          </li>
                          <li className={"mt-2"}>Court Reports</li>
                          <li className={"mt-2"}>Court Attendance</li>
                        </ul>
                      </div>
                    </section>
                  </div>
                </div>
                <div
                  className={"col-span-2 bg-gray-50 px-5 sm:px-5 md:px-16 py-3"}
                >
                  <section
                    id={"additional-professional-services"}
                    className={"mt-5 "}
                  >
                    <div className={"px-3"}>
                      <h2 className=" text-base text-center text-primary-600 font-semibold tracking-wide uppercase">
                        Ancillary Services
                      </h2>
                      <ul className="list-disc list-outside mt-4  text-sm sm:text-sm md:text-normal text-gray-500 lg:mx-auto">
                        <li className={"mt-2"}>
                          <span className={"font-medium text-gray-800"}>
                            Transportation
                          </span>{" "}
                          – We can provide transport to collect and return
                          children/young people for contact sessions subject to
                          availability – a charge is made for this service.
                        </li>
                        <li className={"mt-2"}>
                          <span className={"font-medium text-gray-800"}>
                            Room Hire
                          </span>{" "}
                          – Our rooms are available for booking. These can be
                          for Contact Session; Professional Meetings etc
                        </li>
                        <li className={"mt-3"}>
                          Our centre is accessible to people with disabilities
                        </li>
                      </ul>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      </Layout>
    </React.Fragment>
  );
};

export default ServicePage;
