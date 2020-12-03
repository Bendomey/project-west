import * as React from "react";
import Layout from "../components/organisms/layout";
import { PageProps } from "gatsby";
// import SliderComponent from "../components/organisms/services/slider";
import SingleGalleryItem from "../components/organisms/gallery/singleImage";
import Lightbox from "react-image-lightbox";

const images: string[] = [
  "http://www.projectwest.co.uk/wp-content/uploads/2014/11/IMGP3919-1024x1024.jpg",
  "http://www.projectwest.co.uk/wp-content/uploads/2014/11/Garden-1024x1024.jpg",
  "http://www.projectwest.co.uk/wp-content/uploads/2014/11/Room-1-Dunns-River-Falls-1-1024x1024.jpg",
  "http://www.projectwest.co.uk/wp-content/uploads/2014/11/Room-1-Dunns-River-Falls-2-1024x1024.jpg",
  "http://www.projectwest.co.uk/wp-content/uploads/2014/11/Room-1-Dunns-River-Falls-3-1024x1024.jpg",
  "http://www.projectwest.co.uk/wp-content/uploads/2014/11/Room-2-victoria-falls-1-1024x1024.jpg",
  "http://www.projectwest.co.uk/wp-content/uploads/2014/11/Room-2-victoria-falls-2-1024x1024.jpg",
  "http://www.projectwest.co.uk/wp-content/uploads/2014/11/Room-2-victoria-falls-3-1024x1024.jpg",
  "http://www.projectwest.co.uk/wp-content/uploads/2014/11/Room-3-Niagara-Falls-2-1024x1024.jpg",
  "http://www.projectwest.co.uk/wp-content/uploads/2014/11/Room-3-Niagara-Falls-3-1024x1024.jpg",
  "http://www.projectwest.co.uk/wp-content/uploads/2014/11/Welcome-Room-Kitchen-1-1024x1024.jpg",
  "http://www.projectwest.co.uk/wp-content/uploads/2014/11/Welcome-Room-Kitchen-2-1024x1024.jpg",
];

interface GalleryDataProps {
  name: string;
  image: string;
}

const data: GalleryDataProps[] = [
  {
    name: "Our Centre",
    image: images[0],
  },
  {
    name: "Garden",
    image: images[1],
  },
  {
    name: "Room 1 – Dunns River Falls – 1",
    image: images[2],
  },
  {
    name: "Room 1 – Dunns River Falls – 2",
    image: images[3],
  },
  {
    name: "Room 1 – Dunns River Falls – 3",
    image: images[4],
  },
  {
    name: "Room 2 – Victoria Falls – 1",
    image: images[5],
  },
  {
    name: "Room 2 – Victoria Falls – 2",
    image: images[6],
  },
  {
    name: "Room 2 – Victoria Falls – 3",
    image: images[7],
  },
  {
    name: "Room 3 – Niagara Falls – 1",
    image: images[8],
  },
  {
    name: "Room 3 – Niagara Falls – 2",
    image: images[9],
  },
  {
    name: "Welcome Area – Kitchen – 1",
    image: images[10],
  },
  {
    name: "Welcome Area – Kitchen – 2",
    image: images[11],
  },
];

const GalleryPage = ({ location }: PageProps) => {
  const [photoIndex, setPhotoIndex] = React.useState<number>(0);
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  return (
    <React.Fragment>
      <Layout location={location}>
        <React.Fragment>
          {/* <SliderComponent
            message={"Gallery"}
            image={
              "https://images.unsplash.com/photo-1469406396016-013bfae5d83e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
            }
          /> */}
          <div className={"mt-10 mb-0 sm:mb-0 md:mb-10 "}>
            <div className="lg:text-center px-5">
              <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">
                Gallery
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Some short text should be here
              </p>
            </div>

            <div className={"mt-5"}>
              <div className="max-w-7xl mx-auto px-0 sm:px-0 lg:px-8">
                <div
                  className={
                    "h-full w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3"
                  }
                >
                  {data.map((singleItem: GalleryDataProps, i: number) => (
                    <React.Fragment key={i}>
                      <SingleGalleryItem
                        name={singleItem?.name}
                        image={singleItem?.image}
                        onClick={() => {
                          setPhotoIndex(i);
                          setIsOpen(true);
                        }}
                      />
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {isOpen && (
            <React.Fragment>
              <Lightbox
                clickOutsideToClose={false}
                mainSrc={images[photoIndex]}
                nextSrc={images[(photoIndex + 1) % images.length]}
                prevSrc={
                  images[(photoIndex + images.length - 1) % images.length]
                }
                onCloseRequest={() => setIsOpen(false)}
                onMovePrevRequest={() =>
                  setPhotoIndex(
                    (photoIndex + images.length - 1) % images.length
                  )
                }
                onMoveNextRequest={() =>
                  setPhotoIndex((photoIndex + 1) % images.length)
                }
              />
            </React.Fragment>
          )}
        </React.Fragment>
      </Layout>
    </React.Fragment>
  );
};

export default GalleryPage;
