import * as React from "react";
import Layout from "../components/organisms/layout";
import { PageProps } from "gatsby";
import SliderComponent from "../components/organisms/services/slider";

const PolicyAndProceduresPage = ({ location }: PageProps) => {
  return (
    <React.Fragment>
      <Layout location={location}>
        <React.Fragment>
          <SliderComponent
            message={"Policies And Procedures"}
            image={
              "https://images.unsplash.com/photo-1469406396016-013bfae5d83e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
            }
          />
          <div className={"my-10 "}>
            {/* <div className="lg:text-center">
              <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">
                COMPLAINTS POLICY AND PROCEDURE
              </h2>
            </div> */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 text-justify mt-10">
              <p className={"text-gray-600"}>
                Project West Child Contact Centre aims to provide families and
                referrers with the best possible service. However, from time to
                time there are occasions when users of our service may feel that
                the quality or level of service provided falls short of what can
                reasonably be expected. Your continued involvement and goodwill
                is of great value to us. If you have a complaint, we would like
                you to tell us about it.
              </p>
              <p className={"mt-5 text-gray-600"}>
                If as a result of a complaint made to the Child Contact Centre,
                any of the parties involved think it would be helpful to consult
                with the National Association of Child Contact Centres (NACCC)
                then they can do so. All complaints will be dealt with as
                speedily as possible. The procedure is designed to establish the
                facts quickly and to deal with the matter fairly.
              </p>

              <div className={" mt-4"}>
                <ol className="list-decimal list-inside">
                  <li className={"px-2 text-gray-700 font-light"}>
                    Complaints should be made initially to the
                    Co-ordinator/Deputy Co-ordinator or Team Leader. If the
                    complaints cannot be satisfactorily resolved there and then,
                    brief written notes of the complaint and the circumstances
                    that led to it should be made and the complainant should
                    sign the notes
                  </li>
                  <li className={"px-2 text-gray-700 font-light mt-3"}>
                    These notes should be given to the Co-ordinator – or
                    Assistant Co-ordinator if the Coordinator was on duty at the
                    time of the complaint – as soon as possible. They will then
                    investigate the circumstances in so far as the Child Contact
                    Centre is concerned making notes, which should be signed and
                    dated.
                  </li>
                  <li className={"px-2 text-gray-700 font-light mt-3"}>
                    The Co-ordinator – or Assistant Co-ordinator – will then
                    discuss the matter with the complainant and will attempt to
                    resolve the issues to the satisfaction of all concerned.
                  </li>
                  <li className={"px-2 text-gray-700 font-light mt-3"}>
                    If this is not possible the complainant will be invited to
                    submit details in writing within 7 days to the Chair of the
                    Management Committee who will acknowledge receipt of the
                    complaint.
                  </li>
                  <li className={"px-2 text-gray-700 font-light mt-3"}>
                    The Chair of the Management Committee will investigate the
                    complaint and send a full written reply within 30 days, or
                    explain why further time is necessary.
                  </li>
                </ol>

                <p className={"font-medium my-2"}>The reply will:</p>
                <ul className={"list-inside list-disc"}>
                  <li className={"px-2 text-gray-700 font-light mt-3"}>
                    Set out the complaint so that the complainant can be sure it
                    has been understood.
                  </li>
                  <li className={"px-2 text-gray-700 font-light mt-3"}>
                    {" "}
                    Describe the event and circumstances surrounding them.
                  </li>
                  <li className={"px-2 text-gray-700 font-light mt-3"}>
                    Say whether or not the complaint is deemed to be fair,
                    giving reasons for the decision. It should be noted that if
                    such an admission could have legal / insurance implications
                    the Chair of the Management Committee will have taken legal
                    advice or contacted the insurers before writing.
                  </li>
                  <li className={"px-2 text-gray-700 font-light mt-3"}>
                    Apologise on behalf of the Child Contact Centre (if the
                    complaint is deemed to be fair) and explain the steps it has
                    taken to avoid it happening again.
                  </li>
                  <li className={"px-2 text-gray-700 font-light mt-3"}>
                    Notify the complainant that if he/she is not happy with this
                    decision, then he/she must notify the Chair of the
                    Management Committee within 14 days of receiving the reply
                    that he/she wishes to take it further.
                  </li>
                  <li className={"px-2 text-gray-700 font-light mt-3"}>
                    If the complainant wants to have his/her complaint heard at
                    a Management Committee of the Project West Child Contact
                    Centre, he/she will be entitled to bring a friend who can
                    speak for the complainant, as can the person from the Child
                    Contact Centre who is subject of the complaint (if
                    appropriate). Three members of the Management Committee
                    (excluding the Chair) shall hear the complaint. Both the
                    complainant and the person against whom the complaint has
                    been made shall be allowed to have their say and all
                    previous written notes and the Chair’s investigations shall
                    be taken into account. A written decision will be sent to
                    all involved as is described in paragraph 5 a-e.
                  </li>
                  <li className={"px-2 text-gray-700 font-light mt-3"}>
                    If after this procedure has been carried out the complainant
                    is still not happy with the response, they should send a
                    copy of all correspondence to the Chief Executive of NACCC
                    (or representative in his/her absence) so that the NACCC
                    Complaints procedure can be carried out.
                  </li>
                </ul>

                <p className={"font-medium mt-5"}>Recording Complaints</p>
                <ol className="list-decimal list-inside">
                  <li className={"px-2 text-gray-700 font-light mt-3 "}>
                    If the complaint is resolved at Stage 3 then the matter
                    shall be reported at the next Management Committee Meeting
                    of Project West and recorded in the minutes of that meeting.
                  </li>
                  <li className={"px-2 text-gray-700 font-light mt-3"}>
                    The written records of all complaints will be held by the
                    Chair of the Management Committee, including any written
                    legal or insurance responses and transferred to his/her
                    successor as a strictly confidential file.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </React.Fragment>
      </Layout>
    </React.Fragment>
  );
};

export default PolicyAndProceduresPage;
