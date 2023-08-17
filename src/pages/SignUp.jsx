import { Form, Col, Row, Typography, Button, Input } from "antd";
import Logo from "../assets/img/logo.png";
import axios from "../api/axios";
import { redirect } from "react-router-dom";
import { useState } from "react";

const SIGNUP_URL = "/api/v1/admin/sign-up/?adminId=1   ";

const SignUp = () => {
  const [error, setError] = useState(null);
  const [form] = Form.useForm();

  const handleSubmit = async () => {
    console.log("hit");
    const data = {
      firstName: "string",
      lastName: "string",
      email: "any@gmail.com",
      username: "string",
      password: "string",
      repeat_password: "string",
    };

    try {
      const response = await axios.post(
        SIGNUP_URL,
        JSON.stringify({
          firstName: "string",
          lastName: "string",
          email: "any@gmail.com",
          username: "string",
          password: "string",
          repeat_password: "string",
        }),
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: false,
        }
      );
      if (response.status === 200) {
        return redirect("/admin");
      }
      console.log(response);
      // console.log(accessToken);
      // console.log(JSON.stringify(response));
    } catch (err) {
      if (!err?.response) {
        setError("No server response");
        console.error(err);
      } else if (err.response?.status === 409) {
        setError("Username already taken");
        console.error(err);
      } else {
        setError("Registration failed");
        console.error(err);
      }
    }
  };

  const onClickHandler = (event) => {
    event.preventDefault();
    form.validateFields().then((values) => {
      handleSubmit(values);
    });
  };

  return (
    <Row className="justify-center items-center">
      {/* COL 1 */}
      <Col span={12} className="bg-[#008F8F] py-40 h-screen">
        <img src={Logo} className="mx-auto" />
        <Typography.Text
          level={2}
          className=" text-4xl text-center text-[#ffffff] py-4 font-bold block
          "
        >
          Create Account
        </Typography.Text>
        <Typography.Text className="text-base text-[#C8C8C8] block text-center">
          Join the community and have fun predicting!
        </Typography.Text>
      </Col>

      {/* COL 2 */}
      <Col span={12}>
        <Form
          layout="vertical"
          className="w-4/5 mx-auto"
          onFinish={handleSubmit}
          form={form}
        >
          <Form.Item
            label="First Name"
            name="firstName"
            rules={[
              {
                required: true,
                message: "Please enter your first name",
              },
            ]}
          >
            <Input placeholder="First Name" />
          </Form.Item>

          <Form.Item
            label="Last Name"
            name="lastName"
            rules={[
              {
                required: true,
                message: "Please enter your last name",
              },
            ]}
          >
            <Input placeholder="Last Name" />
          </Form.Item>

          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please enter your username",
              },
            ]}
          >
            <Input placeholder="Username" />
          </Form.Item>

          <Form.Item
            label="Email Address"
            name="email"
            rules={[
              {
                required: true,
                message: "Please enter your email address",
              },
            ]}
          >
            <Input placeholder="Email Address" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please enter your password",
              },
            ]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item
            label="Confirm Password"
            name="repeat_password"
            dependencies={["password"]}
            rules={[
              { required: true, message: "Please confirm your password!" },
              ({ getFieldValue }) => ({
                validator(_, val) {
                  if (!val || getFieldValue("password") === val) {
                    return Promise.resolve();
                  } else {
                    return Promise.reject(
                      new Error("The password you entered does not match!")
                    );
                  }
                },
              }),
            ]}
          >
            <Input.Password placeholder="Confirm Password" />
          </Form.Item>

          <Form.Item className="mt-20">
            <Button
              className="bg-[#008F8F] text-[#ffffff] rounded-md mx-auto"
              size="middle"
              htmlType="submit"
              onClick={onClickHandler}
            >
              Sign Up
            </Button>
          </Form.Item>

          {error && (
            <Typography.Text type="danger" className="text-center">
              {error}
            </Typography.Text>
          )}
        </Form>
      </Col>
    </Row>
  );
};

export default SignUp;
