import { FC } from "react";
import { Outlet } from "react-router-dom";
import Footer from "@/components/Footer/Footer";
import Header from "../Header/Header";

const Layout: FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <main className="main container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
