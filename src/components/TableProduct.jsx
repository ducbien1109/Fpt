import React, { useEffect } from "react";
import { useState } from "react";
import {
  Table,
  Space,
  Image,
  Col,
  Popconfirm,
  Button,
  message,
  Layout,
  Menu,
  theme,
} from "antd";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  LaptopOutlined,
  UserOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import getListProduct from "../api/listProduct";
import BtnComponent from "./BtnComponent";
const TableProduct = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { Header, Sider, Content } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const [allTable, setAllTable] = useState([]);
  const [filterTable, setFilterTable] = useState([])
  const getAllTable = async () => {
    const data = await getListProduct.getAll();
    setAllTable(data.data);
  };
  useEffect(() => {
    getAllTable();
   
  }, []);
  const handleDelete = async (id) => {
    try {
      await getListProduct.delete(id);
      await getAllTable();
      toast.success("Xóa thành công");
    } catch (error) {
      toast.error("Xóa không thành công");
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
      render: (text) => (
        <Image src={text} alt="Product Image" width={100} height={50} />
      ),
    },
    {
      title: "Loại sản phẩm",
      dataIndex: "productType",
      key: "productType",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <BtnComponent
            name="update"
            color="primary"
            handleClick={() => navigate(`/admin/${record.id}`)}
          />
          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            onConfirm={() => handleDelete(record.id)}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <Button danger>Delete</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];
  const cancel = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
    message.error("Click on No");
  };
  const handleLaptop = () => {
    const a = allTable.filter((data) => data.productType === "laptop");
    setFilterTable(a);
  };
  const handlePhone = () => {
    const b = allTable.filter((data) => data.productType === "phone");
    setFilterTable(b);
  };
  const handleAllTable = async ()=>{
    await getAllTable();
    setFilterTable([])
  }
  
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "List product",
              onClick: handleAllTable
            },
            {
              key: "2",
              icon: <PhoneOutlined />,
              label: "smart Phones",
              onClick: handlePhone,
            },
            {
              key: "3",
              icon: <LaptopOutlined />,
              label: "Laptop",
              onClick: handleLaptop,
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Col span={24}>
            <Table
              tableLayout="fixed"
              columns={columns}
              dataSource={filterTable.length > 0 ? filterTable || allTable : allTable}
              style={{ width: "100%", padding: "100px" }}
            />
          </Col>
        </Content>
      </Layout>
    </Layout>
    //
  );
};

export default TableProduct;
