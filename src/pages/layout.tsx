import React, { JSX } from "react";
const Header = React.lazy(() => import("@components/header"));
const Footer = React.lazy(() => import("@components/footer"));

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
