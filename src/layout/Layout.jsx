import React from "react";
import Header from "../components/Header";
import MenuComponent from "../components/MenuComponent";
import Slide from "../components/Slide";
import Content from "../components/Content";
import ListProduct from "../components/ListProduct";
import FooterComponent from "../components/FooterComponent";

const Layout = () => {
  return (
    <div>
      <div>
        <Header />
        <MenuComponent />
      </div>
      <div>
        <Slide/>
        <Content/>
      </div>
      <div>
        <ListProduct/>
        <FooterComponent/>
      </div>
    </div>
  );
};

export default Layout;
