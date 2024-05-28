import React from "react";
import Header from "../Header";
import Footer from '../Footer';
import { container, wrapper } from "./index.css";

const AppLayout = ({ children }: React.PropsWithChildren)=> {
  return (
    <>
      <Header />
      <div className={`${container}`}>
        <div className={`${wrapper}`}>{children}</div>
      </div>
      <Footer />
    </>
  );
}

export default AppLayout;
