import Footer from "@components/footer";
import Header from "@components/header";
import { JSX } from "react";

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
