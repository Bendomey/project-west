import * as React from "react";
import { Transition } from "@headlessui/react";
import { SliderProps } from "./types";

const SliderComponent: React.FC<SliderProps> = ({ message, image }) => {
  return (
    <React.Fragment>
      <div className={"relative h-48 sm:h-48 md:h-54"}>
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
              {message}.
            </h1>
          </Transition>
        </div>
        <div
          className={"h-full w-full"}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "179vh",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />
      </div>
    </React.Fragment>
  );
};

export default SliderComponent;
