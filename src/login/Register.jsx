import React, { useState } from "react";
import $ from "jquery";
import { useNavigate } from "react-router";
import { Button, message, Popconfirm, Switch } from "antd";
const Register = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [condition, setCondition] = useState(true);
  $(document).ready(function () {
    $("#form-register").submit(function (e) {
      e.preventDefault();
      var userName = $("#register-username").val();
      var pass = $("#register-password").val();
      var storeLocalUser = {
        userName: userName,
        pass: pass,
      };
      localStorage.setItem(userName, JSON.stringify(storeLocalUser));
      navigate("/login");
    });
  });
  const handleOpenChange = (newOpen: boolean) => {
    if (!newOpen) {
      setOpen(newOpen);
      return;
    }
    console.log(condition);
    if (condition) {
      confirm();
    } else {
      setOpen(newOpen);
    }
  };
  const confirm = () => {
    setOpen(false);
    message.success("Đăng kí thành công...!");
  };
  const pageLogin = () => {
    navigate("/login");
  };
  return (
    <div style={{display:'flex', justifyContent:'center', width:'100%'}}>
      <div class="login-container">
        <div class="login-header">
          <h2>Register</h2>
        </div>
        <form id="form-register">
          <div class="form-group">
            <label for="username">Username:</label>
            <input
              type="text"
              id="register-username"
              name="username"
              required
            />
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input
              type="password"
              id="register-password"
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
              <button type="submit" danger>
                Register
              </button>
            </Popconfirm>
          </div>
          <button onClick={pageLogin}>trở về</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
