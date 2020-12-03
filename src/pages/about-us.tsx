import * as React from "react";
import Layout from "../components/organisms/layout";
import { PageProps } from "gatsby";
import SliderComponent from "../components/organisms/about-us/slider";

const AboutUsPage = ({ location }: PageProps) => {
  return (
    <React.Fragment>
      <Layout location={location}>
        <React.Fragment>
          <SliderComponent
            message={"About Us"}
            image={
              "https://images.unsplash.com/photo-1469406396016-013bfae5d83e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
            }
            // image={
            //   "https://images.unsplash.com/photo-1518842023089-50e9ac314ad1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1525&q=80"
            // }
          />
          <div className={"grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2"}>
            <div className={"bg-primary-800 p-5"}>
              <div className={"my-10 flex justify-center items-center"}>
                <div className={" flex flex-col items-center"}>
                  <p className=" text-white text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
                    Who we are
                  </p>
                  <p className={"text-center mt-4  text-gray-200 font-light"}>
                    Assessing Parenting Capacity is not about making decisions
                    based on values, judgements or ‘gut instincts’, but rather
                    about gathering clear and factual information weighed
                    against the child’s specific needs.
                  </p>
                  <p className={"text-center mt-1 text-gray-200 font-light"}>
                    With this in mind Pauline Bennett and Sylvia McCollin
                    founded Project West in 2005.
                  </p>
                  <p className={"text-center mt-1 text-gray-200 font-light"}>
                    With considerable experience as Children’s Guardians;
                    Independent Social Workers as well as knowledgeable and
                    skilled within the Court arena; our multi-skilled team works
                    flexibly in response to the needs of individual clients. We
                    are aware of the importance of family life and ensure the
                    protection and safety of children and young people by
                    providing a forum where parents and children/young people
                    can be together in a safe caring environment with a staff
                    team who promote good parenting skills.
                  </p>
                </div>
              </div>
            </div>
            <div
              className={"bg-primary-600 p-5 flex justify-center items-center"}
            >
              <div className={"my-10 flex justify-center items-center"}>
                <div className={" flex flex-col items-center"}>
                  <p className="mt-2 text-white text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
                    Statement of Purpose
                  </p>

                  <p className={"text-center mt-5 text-gray-100 font-light"}>
                    Children are our paramount concern and we aim to support the
                    emotional, psychological, intellectual and social
                    development of children and young people by adopting a
                    child-centred perspective throughout. Project West provides
                    a service that aims to empower families to make changes that
                    enable children to be safe and to realise their potential.
                    The centre provides an environment where families are valued
                    and treated with respect as individuals.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={"grid grid-cols-1 h-96 sm:grid-cols-1 md:grid-cols-2"}
          >
            <div
              className={
                "bg-primary-800 sm:bg-primary-800 lg:bg-primary-600 p-5 flex justify-center items-center"
              }
            >
              <div className={"my-10 flex justify-center items-center"}>
                <div className={" flex flex-col items-center"}>
                  <p className="mt-2 text-white text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
                    Our Vision
                  </p>

                  <p className={"text-center mt-5 text-gray-200 font-light"}>
                    To become the Child Contact Centre and Assessment services
                    provider of choice and renowned for our high-quality
                    services and facilities.
                  </p>
                </div>
              </div>
            </div>
            <div
              className={
                "bg-primary-600 sm:bg-primary-600 lg:bg-primary-800 p-5 flex justify-center items-center"
              }
            >
              <div className={"my-10 flex justify-center items-center"}>
                <div className={" flex flex-col items-center"}>
                  <p className="mt-2 text-white text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
                    Our Mission
                  </p>

                  <p className={"text-center mt-5 text-gray-100 font-light"}>
                    Our mission is to deliver the best service to support
                    parents and children to re-build relationships in a safe and
                    caring environment.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={"py-10 flex justify-center items-center bg-primary-700"}
          >
            <div
              className={
                "w-11/12 sm:w-11/12 md:w-2/3 flex flex-col items-center text-white"
              }
            >
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
                Diversity
              </p>

              <p className={"text-center mt-3 font-light"}>
                Project West places emphasis on ensuring that all service users
                are valued and nurtured, taking into account their culture,
                language, ethnicity, gender, disability, religion, age and
                sexual orientation. Our premises are accessible to wheel chair
                users. Project West provides an environment where families are
                valued and treated with respect. We operate within an equal
                opportunities policy and all of our staff are committed to the
                delivery of this policy. We work with families from a wide
                variety of backgrounds with different languages, lifestyles and
                beliefs.
              </p>
            </div>
          </div>
        </React.Fragment>
      </Layout>
    </React.Fragment>
  );
};

export default AboutUsPage;
