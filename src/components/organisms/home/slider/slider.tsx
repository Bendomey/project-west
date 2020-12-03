import * as React from "react";
import { Transition } from "@headlessui/react";

const SliderComponent = () => {
  return (
    <React.Fragment>
      <div className={"relative h-72 sm:h-72 md:h-96"}>
        <div
          className={
            "absolute h-full w-full bg-black bg-opacity-50 sm:bg-opacity-50 md:bg-opacity-40 flex justify-center items-center"
          }
        >
          <Transition
            show={true}
            enter="transform transition ease-in-out duration-500 sm:duration-700"
            enterFrom="-translate-y-full"
            enterTo="translate-y-0"
            leave="transform transition ease-in-out duration-500 sm:duration-700"
            leaveFrom="translate-y-0"
            leaveTo="-translate-y-full"
          >
            <h1
              className={
                "font-extrabold text-white text-2xl sm:text-2xl md:text-5xl"
              }
            >
              Welcome to Project West
            </h1>
          </Transition>
        </div>
        <div
          className={"h-full w-full"}
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1549057446-9f5c6ac91a04?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2691&q=80)",
            backgroundSize: "179vh",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top center",
          }}
        />
      </div>
      <div
        className={
          "bg-primary-600 w-full h-full sm:h-full md:h-44 py-7 sm:py-7 md:py-0 text-gray-200 flex justify-center items-center "
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
              className={"font-light text-center text-sm sm:text-sm md:text-lg"}
            >
              We are an experienced leading Child Contact & Assessment Centre
              based in London. Our multi-disciplinary team provides services in
              all areas of Child Contact; Parenting Assessments; Family Support
              and Mentoring. We ensure the protection and safety of children and
              young people by providing a forum where parents and children/young
              people can be together in a safe caring environment with a staff
              team who work with the family to promote good parenting skills.
            </p>
          </Transition>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SliderComponent;
