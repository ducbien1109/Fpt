import React from "react";
import { useNavigate } from "react-router";
import Dienthoai from "./Dienthoai";

function MenuComponent() {
  const navigate = useNavigate();

  const onMenuItemClick = (productType) => {
    navigate(`/phone/${productType}`);
  };
  

  const onMenuItemClick1 = () => {
    // Bạn có thể xử lý sự kiện nhấp chuột cho mục menu "Laptop" ở đây nếu cần
  };

  return (
    <div className="menu-header">
      <div className="menu-items">
        <ul className="menu-item">
          <li onClick={() => onMenuItemClick("phone")}>ĐIỆN THOẠI</li>
          <li onClick={() => onMenuItemClick("laptop")}>LAPTOP</li>
          <li>MÁY TÍNH BẢNG</li>
          <li>PC-LINH PHỤ KIỆN</li>
          <li>PHỤ KIỆN</li>
          <li>MÁY CŨ GIÁ RẺ</li>
          <li>ĐIỆN MÁY GIA DỤNG</li>
          <li>SIM & THẺ</li>
          <li>KHUYẾN MÃI</li>
        </ul>
      </div>
   
    </div>
  );
}

export default MenuComponent;
