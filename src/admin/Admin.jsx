import React, { useRef, useState } from "react";
import { useNavigate } from "react-router";
import { Col, Form, Input, Row, Card, Button, Layout, theme, Menu } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  LaptopOutlined,
  UserOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import "react-toastify/dist/ReactToastify.css";
import getListProduct from "../api/listProduct";
import { toast } from "react-toastify";
import TableProduct from "../components/TableProduct";
import BtnComponent from "../components/BtnComponent";
const Admin = () => {
  const { Header, Sider, Content } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const nameRef = useRef();
  const onsubmit = (value) => {
    console.log(value);
    createProduct(value);
  };
  const createProduct = async (value) => {
    try {
      await getListProduct.create(value);
      toast.success("thành công");
      navigate("/");
    } catch (error) {
      toast.error("lỗi");
    }
  };
  const backHome = () => {
    navigate("/");
  };
  return (
    <div>
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
              },
              {
                key: "2",
                icon: <PhoneOutlined />,
                label: "smart Phones",
              },
              {
                key: "3",
                icon: <LaptopOutlined />,
                label: "Laptop",
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
            <Card
              title="Add products...!"
              bordered={false}
              style={{ width: 800, margin: "0 auto"}}
            >
              <Form layout="vertical" form={form} onFinish={onsubmit}>
                <Row>
                  <Col span={24}>
                    <Form.Item
                      name="name"
                      label="name product"
                      rules={[{ required: true, message: "please" }]}
                    >
                      <Input
                        placeholder="please input your name...!"
                        ref={nameRef}
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <Col span={24}>
                  <Form.Item
                    name="img"
                    label="image"
                    rules={[{ required: true, message: "please" }]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
                <BtnComponent name="Back home page" handleClick={backHome} />
              </Form>
            </Card>
          </Content>
        </Layout>
      </Layout>

      <TableProduct />
    </div>
  );
};

export default Admin;
