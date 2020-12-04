import * as React from "react";

interface GalleryDataProps {
  name: string;
  image: string;
  onClick: () => void;
}

const SingleGallery: React.FC<GalleryDataProps> = ({
  name,
  image,
  onClick,
}) => {
  const [show, setShow] = React.useState<boolean>(false);
  return (
    <React.Fragment>
      <div
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        className={"w-full relative col-span-1"}
        // onClick={onClick}
      >
        {show && (
          <div
            className={
              "absolute z-10 h-full w-full flex items-center justify-center"
            }
          >
            <div
              className={
                "bg-black bg-opacity-30 text-white h-full w-full flex flex-col items-center justify-end py-10"
              }
            >
              {/* <svg
                className={"h-10 w-10 "}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path
                  fillRule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clipRule="evenodd"
                />
              </svg> */}
              <span className={"font-bold mt-5 w-2/3 text-center"}>{name}</span>
            </div>
          </div>
        )}
        <img src={image} className={"w-full h-auto"} alt="" />
      </div>
    </React.Fragment>
  );
};

export default SingleGallery;
