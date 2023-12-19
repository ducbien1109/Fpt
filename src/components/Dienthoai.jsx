import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getListProduct from "../api/listProduct";
import { Image,Card } from "antd";
import Header from "../components/Header";
import Slide from "../components/Slide";
import MenuComponent from "./MenuComponent";
import FooterComponent from "./FooterComponent";

const Dienthoai = () => {
  const { productType } = useParams();
  const [phones, setPhones] = useState([]);

  const getAll = async () => {
    const phones = await getListProduct.getAll();
    if (productType) {
      const filter = phones.data.filter(
        (phone) => phone.productType === productType
      );
      setPhones(filter);
    } else {
      setPhones(phones.data);
    }
  };
  useEffect(() => {
    getAll();
  }, [productType]);
  return (
    <div>
      <Header />
      <MenuComponent/>
      <Slide />
     <div className="filter-product">
        {phones.map((item) => (
          <Card>
            <div key={item.id}>
            <Image
              src={item.img}
              width={200}
              height={200}
              style={{ borderRadius: "20px" }}
            />
            <p style={{ color: "aqua" }}>{item.name}</p>
          </div>
          </Card>
        ))}
      </div>
      <FooterComponent/>
    </div>
  );
};

export default Dienthoai;
