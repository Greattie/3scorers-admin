import React from "react";
import { Menu } from "antd";
import { AiOutlineAppstore } from "react-icons/ai";
import { PiUsersThreeFill } from "react-icons/pi";
import { FiUsers } from "react-icons/fi";
import { TiPower } from "react-icons/ti"; // Corrected import
import { useNavigate } from "react-router-dom";

const Sidemenu = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen bg-[#008F8F]">
      <Menu
        className="bg-[#008F8F]"
        onClick={(item) => {
          navigate(item.key);
        }}
        items={[
          {
            label: "Overview",
            icon: <AiOutlineAppstore />,
            key: "/",
          },
          {
            label: "Admin",
            icon: <PiUsersThreeFill />,
            key: "/admin",
          },
          {
            label: "Users",
            icon: <FiUsers />,
            key: "/users",
          },
          {
            label: "Logout",
            icon: <TiPower />, // Corrected icon
            key: "/logout",
          },
        ]}
      ></Menu>
    </div>
  );
};

export default Sidemenu;
