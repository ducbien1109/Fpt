import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router";
import {
  Col,
  Form,
  Input,
  Row,
  Card,
  Button,
  Layout,
  theme,
  Menu,
  Select,
} from "antd";
import "react-toastify/dist/ReactToastify.css";
import getListProduct from "../api/listProduct";
import { toast } from "react-toastify";
import TableProduct from "../components/TableProduct";
import BtnComponent from "../components/BtnComponent";
const Admin = (dataSource) => {
  const navigate = useNavigate();
  var isLogins = localStorage.getItem("isLogin");
  if (!isLogins) {
    setTimeout(()=>{
      navigate("/login")
    })
  }
  const { Header, Sider, Content } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const { id } = useParams();
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [form] = Form.useForm();
  const nameRef = useRef();

  const onsubmit = (value) => {
    if (id) {
      update(value);
    } else {
      createProduct(value);
    }
  };

  const getData = async () => {
    try {
      const { data } = await getListProduct.getDetail(id);
      form.setFieldsValue({
        name: data.name,
        img: data.img,
        productType: data.productType,
      });
      setSelectedOption(data.productType);
    } catch (error) {
      toast.error("Xóa không thành công");
    }
  };
  const update = async (value) => {
    try {
      let updatedProductType;
      if (selectedOption === "phone") {
        updatedProductType = await getListProduct.update(value, id);
      } else if (selectedOption === "laptop") {
        await getListProduct.update(value, id);
      }
      setSelectedOption(updatedProductType); // Đặt giá trị ở đây nếu cần thiết
      clear();
      toast.success("update thành công");
    } catch (error) {
      toast.error("Lỗi khi thêm sản phẩm");
    }
  };

  useEffect(() => {
    form.setFieldsValue({
      productType: selectedOption,
    });
  }, [selectedOption, form]);

  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]);
  const createProduct = async (value) => {
    try {
      // Thêm trường productType vào dữ liệu sản phẩm
      const productData = { ...value, productType: selectedOption };

      if (selectedOption === "phone") {
        await getListProduct.create(productData);
      } else if (selectedOption === "laptop") {
        const a = await getListProduct.create(productData);
      }
      clear();
      navigate("/");
      toast.success("Thêm thành công");
    } catch (error) {
      console.error("Lỗi khi thêm sản phẩm:", error);
      toast.error("Lỗi khi thêm sản phẩm");
    }
  };

  const backHome = () => {
    navigate("/");
  };
  const clear = () => {
    form.resetFields();
  };
  const handleHome = ()=>{
    navigate('/')
  }
  return (
    <div>
      <div style={{textAlign:'right'}}>
      <BtnComponent type ="#ffffff" name = 'Logout' handleClick = {handleHome}/>
      </div>
      <Card
        title={id ? "update" : "add"}
        bordered={false}
        style={{ width: 800, margin: "0 auto" }}
      >
        <Form layout="vertical" form={form} onFinish={onsubmit}>
          <Row>
            <Col span={24}>
              <Form.Item
                name="name"
                label="name product"
                rules={[{ required: true, message: "please" }]}
              >
                <Input placeholder="please input your name...!" ref={nameRef} />
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
          <Col span={24}>
            <Form.Item>
              <Select
                value={selectedOption}
                defaultValue="option"
                style={{ width: 200 }}
                options={[
                  { value: "phone", label: "điện thoại" },
                  { value: "laptop", label: "máy tính" },
                ]}
                onChange={(value) => {
                  console.log("Selected Option:", value);
                  setSelectedOption(value);
                }}
              />
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
      <TableProduct newProduct={dataSource} />
    </div>
  );
};

export default Admin;
