import React from "react";
import Header from "../components/Header";
import MenuComponent from "../components/MenuComponent";
import Slide from "../components/Slide";
import Content from "../components/Content";
import ListProduct from "../components/ListProduct";
import Onchain from "../components/Onchain";

const Layout = () => {
  return (
    <div>
      <div>
        <Header />
        <MenuComponent />
        <Onchain/>
      </div>
      <div>
        <Slide/>
        <Content/>
      </div>
      <div>
        <ListProduct/>
      </div>
    </div>
  );
};

export default Layout;
