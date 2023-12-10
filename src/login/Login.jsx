import React, { useState } from "react";
import $ from "jquery";
import { useNavigate } from "react-router";
import { Button, message, Popconfirm, Switch } from "antd";

const Login = () => {
    const [open, setOpen] = useState(false);
    const [condition, setCondition] = useState(true);
  const navigate = useNavigate();
  $(document).ready(function () {
    $("#form-login").submit(function (e) {
      e.preventDefault();
      console.log(123);
      var userName = $("#login-username").val();
      var pass = $("#login-password").val();
      var storeLocalUser = localStorage.getItem(userName);
      if (storeLocalUser && JSON.parse(storeLocalUser).pass === pass) {
        localStorage.setItem("isLogin", true);
        navigate("/admin");
      } else {
        alert("ko thành công");
      }
    });
  });
  const toPageRegister = () => {
    navigate("/register");
  };
  const handleOpenChange = (newOpen: boolean) => {
    if (!newOpen) {
      setOpen(newOpen);
      return;
    }
    // Determining condition before show the popconfirm.
    console.log(condition);
    if (condition) {
      confirm(); // next step
    } else {
      setOpen(newOpen);
    }
  };
  const confirm = () => {
    setOpen(false);
    message.success('đăng nhập thành công');
  };
  return (
    <div style={{display:'flex', justifyContent:'center', width:'100%'}}>
      <div class="login-container">
        <div class="login-header">
          <h2>Login</h2>
        </div>
        <form id="form-login">
          <div class="form-group">
            <label for="username">Username:</label>
            <input type="text" id="login-username" name="username" required />
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input
              type="password"
              id="login-password"
              name="password"
              required
            />
          </div>
          <div class="form-group">
            <Popconfirm
              title="login success...!"
              description="Are you sure to delete this task?"
              open={open}
              onOpenChange={handleOpenChange}
              onConfirm={confirm}
              okText="Yes"
              cancelText="No"
            >
              <button type="submit" danger>login</button>
            </Popconfirm>
          </div>
          <button onClick={toPageRegister}>Register</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
