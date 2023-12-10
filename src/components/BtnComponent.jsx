import React from "react";
import { Button } from "antd";
const BtnComponent = (prop) => {
    const {color, handleClick, name,styleBtn} = prop;
  return (
    <div>
      <Button type={color} onClick={handleClick} className={styleBtn} danger>
        {name}
      </Button>
    </div>
  );
};

export default BtnComponent;
