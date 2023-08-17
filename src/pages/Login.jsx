import { Form, Input, Card, Button } from "antd";
import { useState, useContext } from "react";
import Logo from "../assets/img/logo.png";
import AuthContext from "../context/AuthProvider";
import axios from "../api/axios";
import { redirect } from "react-router-dom";

const LOGIN_URL = "/api/v1/admin/login";

const Login = () => {
  const [form] = Form.useForm();
  const { setAuth } = useContext(AuthContext);

  const onFinish = async (values) => {
    const data = {
      username: values.username,
      password: values.password,
    };

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ ...data }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({
        username: data.username,
        password: data.password,
        roles,
        accessToken,
      });
      if (response.status === 200) {
        return redirect("/admin");
      }
    } catch (err) {
      if (!err?.response) {
        throw Error("No server response");
      } else if (err.response?.status === 400) {
        throw Error("Missing Username or Password");
      } else if (err.response?.status === 401) {
        throw Error("Unauthorized");
      } else {
        throw Error("Login failed!");
      }
    }
  };

  return (
    <div className="bg-[#008F8F] h-screen">
      <img src={Logo} className="mx-auto py-10" />
      <Card className="w-3/12 mx-auto h-3/6">
        <Form layout="vertical" onFinish={onFinish} form={form}>
          <Form.Item
            name="username"
            label="Username"
            rules={[{ required: true, message: "Please input username" }]}
          >
            <Input placeholder="Username" />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: "Please input password" }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item className="mt-20">
            <Button
              className="bg-[#008F8F] text-[#ffffff] rounded-md mx-auto"
              size="middle"
              htmlType="submit"
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
