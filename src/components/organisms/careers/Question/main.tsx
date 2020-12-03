import * as React from "react";

interface QuestionProp {
  title: string;
}

const MainComponent: React.FC<QuestionProp> = ({ children, title }) => {
  const [show, setShow] = React.useState<boolean>(true);
  return (
    <React.Fragment>
      <div
        onClick={() => setShow(!show)}
        className={
          "py-5 px-2 cursor-pointer bg-primary-700 flex flex-row justify-between"
        }
      >
        <div className={"text-white"}>
          <p>{title}</p>
        </div>
        <div>
          <svg
            className={"h-5 w-5 text-white mr-5"}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
      {show && <div className={"bg-primary-50 p-5"}>{children}</div>}
    </React.Fragment>
  );
};

export default MainComponent;
