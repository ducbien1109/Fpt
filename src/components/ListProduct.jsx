import React, { useEffect, useState } from "react";
import getList from "../api/list";
import {Image} from 'antd'
import BtnComponent from '../components/BtnComponent'

const ListProduct = () => {
  const test = {
    color:'aqua',
    width: '100%'
  }
  const [ListData, setListData] = useState([]);

  const getAllData = async () => {
    const response = await getList.getAll();
    setListData(response.data);
  };
  useEffect(() => {
    getAllData();
  }, []);
  return (
    <div className="form-product">
    <img src="https://fptshop.com.vn/Uploads/Originals/2023/11/20/638361009816492933_Banner-7.png" style={{width:'100%'}}/>
      <div className="product">
      {ListData.map((item) => {
        return (
          <div key={item.id} className="content-product">
            <Image src={item.img} width={200} height={150} style={{borderRadius:'10px'}}/>
            <h4 style={{color:'#ffffff'}}>{item.name}</h4>
            <p  style={{color:'#ffffff'}}>{item.price}</p>
            <BtnComponent name = 'Mua' color = 'primary' styleBtn = {test}/>
          </div>
        );
      })}
    </div>
    </div>
    
  );
};

export default ListProduct;
