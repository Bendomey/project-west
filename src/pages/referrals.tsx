import * as React from "react";
import { PageProps } from "gatsby";
import Layout from "../components/organisms/layout";
import SliderComponent from "../components/organisms/services/slider";
import { Transition } from "@headlessui/react";
import { Link } from "gatsby";

const ReferralsPage = ({ location }: PageProps) => {
  return (
    <React.Fragment>
      <Layout location={location}>
        <React.Fragment>
          <SliderComponent
            message={"Referrals And Contact"}
            image={
              "https://images.unsplash.com/photo-1469406396016-013bfae5d83e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
            }
          />
          <div className={"my-5"}>
            <p className={"text-center px-2 sm:px-2 md:px-0"}>
              We accept ‘Referrals’ from Local Authorities, Solicitors,
              Barristers, Parents; CAFCASS and other professionals.
            </p>
            <p className={"text-center px-2 sm:px-2 md:px-0 mt-3"}>
              Please{" "}
              <Link
                to={"/contact-us"}
                className={"text-blue-500 hover:underline"}
              >
                contact us
              </Link>{" "}
              to discuss your particular requirements or by following the simple
              referral process:
            </p>
            <p className={"mt-5 px-2 sm:px-2 md:px-0 text-center"}>
              See required referral forms below Download – complete and return
              form – mail it to{" "}
              <a
                href={"mailto: info@projectwest.co.uk"}
                className={"text-blue-500 hover:underline"}
              >
                info@projectwest.co.uk
              </a>{" "}
              or Fax to 020 8711 3220
            </p>
            <div className={"flex justify-center mt-10"}>
              <div
                className={
                  "border border-gray-100 p-5 w-11/12 sm:w-11/12 md:w-2/3"
                }
              >
                <p className={"font-medium"}>
                  Download Forms by clicking on the links below:
                </p>
                <ul className="list-disc p-5">
                  <li className={""}>
                    <a
                      href="http://www.projectwest.co.uk/wp-content/uploads/2014/11/PROJECT-WEST-referal-for-Contact.docx"
                      target="_blank"
                      className={"text-blue-500 hover:underline"}
                    >
                      Referral Form for Contact
                    </a>
                  </li>
                  <li className={"mt-2"}>
                    <a
                      href="http://www.projectwest.co.uk/wp-content/uploads/2014/11/PROJECT-WEST-referal-for-Parenting-and-Risk-Assesment.docx"
                      target="_blank"
                      className={"text-blue-500 hover:underline"}
                    >
                      Referral Form for Parenting and Risk Assessment
                    </a>
                  </li>
                  <li className={"mt-2"}>
                    <a
                      href="http://www.projectwest.co.uk/wp-content/uploads/2014/11/PROJECT-WEST-referal-for-Family-Support-Assesment.docx"
                      target="_blank"
                      className={"text-blue-500 hover:underline"}
                    >
                      Referral Form for Family Support/Mentoring Assessment
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className={
              "bg-gray-800 w-full h-full sm:h-full md:full py-7 sm:py-7 md:py-10 text-gray-200 flex justify-center items-center "
            }
          >
            <div className={"w-11/12 sm:w-11/12 md:w-10/12"}>
              <Transition
                show={true}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <p
                  className={
                    "font-light text-center text-sm  sm:text-sm md:text-lg"
                  }
                >
                  <span className={""}>
                    27 Sandringham Road, Northolt, Middlesex, UB5 5HN
                  </span>
                  <br />
                  <span>
                    <span className={"text-primary-200"}>Tel:</span> 020 8422
                    8184 / 07577 792 468 Fax: 020 8711 3220
                  </span>
                  <br />
                  <span>
                    {" "}
                    <span className={"text-primary-200"}>Email:</span>{" "}
                    info@projectwest.co.uk
                  </span>
                  <br />
                  <span>
                    <span className={"text-primary-200"}>Bus:</span> E10, 140,
                    120, 90, 282, N7.
                  </span>
                  <br />
                  <span>Northolt Underground tube station, 5mins walk.</span>
                  <br />
                  <span>
                    <span className={"text-primary-200"}>Opening hours:</span> 9
                    am to 9pm, 7 days a week. (Including bank holidays)
                  </span>
                </p>
              </Transition>
            </div>
          </div>
        </React.Fragment>
      </Layout>
    </React.Fragment>
  );
};

export default ReferralsPage;
