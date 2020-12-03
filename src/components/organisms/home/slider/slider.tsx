import * as React from "react";
import { Transition } from "@headlessui/react";

const SliderComponent = () => {
  return (
    <React.Fragment>
      <div className={"relative h-96"}>
        <div
          className={
            "absolute h-full w-full bg-black bg-opacity-40 flex justify-center items-center"
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
            <h1 className={"font-extrabold text-white text-5xl"}>
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
    </React.Fragment>
  );
};

export default SliderComponent;
