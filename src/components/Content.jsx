import React, { useEffect, useState } from "react";
import { Image } from "antd";
import getListProduct from "../api/listProduct";
import { setListProduct, getListProductReducer } from "../store/Reducer";
import { useDispatch, useSelector } from "react-redux";

const Content = () => {
  const [postListProduct, getPostListProduct] = useState([]);

  const dispatch = useDispatch();

  const dataProduct = useSelector(getListProductReducer);
  const getAllProducts = async () => {
    const response = await getListProduct.getAll();
    dispatch(setListProduct(response.data));
    getPostListProduct(response.data);
  };
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <div className="listProduct">
      {dataProduct.map((product) => {
        return (
          <ul key={product.id}>
            <Image
              src={product.img}
              width={100}
              height={80}
              style={{ borderRadius: "20px" }}
            />
            <li>{product.name}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default Content;
