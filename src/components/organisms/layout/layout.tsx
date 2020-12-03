import * as React from "react";
import Header from "../../ molecules/header";

const LayoutComponent: React.FC = ({ children }) => {
  return (
    <React.Fragment>
      <Header />

      {children}
    </React.Fragment>
  );
};

export default LayoutComponent;
