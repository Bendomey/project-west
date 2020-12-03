import * as React from "react";
import Layout from "../components/organisms/layout";
import { PageProps } from "gatsby";
import SliderComponent from "../components/organisms/home/slider";

// markup
const IndexPage = ({ location }: PageProps) => {
  return (
    <React.Fragment>
      <Layout location={location}>
        <React.Fragment>
          <SliderComponent />
        </React.Fragment>
      </Layout>
    </React.Fragment>
  );
};

export default IndexPage;
