import React, { useEffect } from "react";
import { useState } from "react";
import { Table, Space, Image, Col } from "antd";
import { toast } from "react-toastify";

import getListProduct from "../api/listProduct";
import BtnComponent from "./BtnComponent";
const TableProduct = () => {
  const [allTable, setAllTable] = useState([]);
  const getAllTable = async () => {
    const data = await getListProduct.getAll();
    setAllTable(data.data);
  };
  useEffect(() => {
    getAllTable();
  }, []);
  const handleDelete = async (id) => {
    try {
      console.log("Deleting item with ID:", id);
      const response = await getListProduct.delete(id);
      console.log("API Response:", response);
      await getAllTable();
      toast.success('Xóa thành công');
    } catch (error) {
      console.error('Error deleting:', error);
      toast.error('Xóa không thành công');
    }
  };
  
  const columns: ColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "image",
      dataIndex: "img",
      key: "img",
      render: (text) => <Image src={text} alt="Product Image" width={100} height={50} />,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <BtnComponent name="update" color="primary" />
          <BtnComponent name="delete" color="primary" handleClick = {()=>handleDelete(record.id)}/>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Col span={24}>
        <Table
          tableLayout="fixed"
          columns={columns}
          dataSource={allTable}
          style={{ width: "100%", padding: "100px" }}
        />
      </Col>
    </div>
  );
};

export default TableProduct;
