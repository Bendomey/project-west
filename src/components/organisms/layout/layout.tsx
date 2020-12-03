import * as React from "react";
import Header from "../../ molecules/header";
import { LayoutProps } from "./types";

const LayoutComponent: React.FC<LayoutProps> = ({ children, location }) => {
  return (
    <React.Fragment>
      <Header location={location} />
      {children}
    </React.Fragment>
  );
};

export default LayoutComponent;
