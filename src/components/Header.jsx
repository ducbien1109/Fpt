import { Layout, Image, Input } from "antd";
import logos from "../assets/images/logo.png";
import {
  BookOutlined,
  CreditCardOutlined,
  UserAddOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {TypeAnimation} from 'react-type-animation'
import { useNavigate } from "react-router-dom";
const { Search } = Input;

function Header() {
  const navigate = useNavigate();
  const handleAdmin = () => {
    navigate("/login");
  };
  const handleHome = ()=>{
    navigate('/')
  } 

  return (
    <div>
     
      <Layout style={{width:'100%'}}>
      
        <div
          style={{
            display: "flex",
            alignItems: "center",
            background: "red",
            gap: "20px",
            justifyContent: "center",
          }}
        >
          <TypeAnimation
        sequence={[
          `Ngô Đức Biển`,
          1000,
          "",
        ]}
        speed={50}
        className="test"
        style={{ whiteSpace: 'pre-line', fontSize: '2em', }}
        repeat={Infinity}
      />
          <div>
            <Image
              width={200}
              height={50}
              src={logos}
              style={{ objectFit: "none" }}
            />
          </div>
          <Search
            className="search"
            placeholder="Nhập tên điện thoại, máy tính,... cần tìm!"
            enterButton="Search"
            size="large"
            color="primary"
            // suffix={suffix}
            // onSearch={onSearch}
          />
          <div className="information">
            <BookOutlined style={{ fontSize: "24px" }} />
            <p onClick={handleHome}>Home</p>
          </div>
          <div className="information">
            <CreditCardOutlined style={{ fontSize: "24px" }} />
            <p>Thanh toán & tiện ích</p>
          </div>
          <div className="information">
            <UserAddOutlined style={{ fontSize: "24px" }} />
            <p>Tài khoản của tôi</p>
          </div>
          <div className="information">
            <ShoppingCartOutlined style={{ fontSize: "24px" }} />
            <p>Giỏ hàng</p>
          </div>
          <div className="information">
            <UserOutlined style={{ fontSize: "24px" }} />
            <p onClick={handleAdmin}>Admin</p>
          </div>
        </div>
      </Layout>
    </div>
  );
}
export default Header;
