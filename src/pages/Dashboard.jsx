import AppHeader from "../components/AppHeader";
import Sidemenu from "../components/Sidemenu";
import PageContent from "../components/PageContent";
import Footer from "../components/Footer";
import { Space } from "antd";

const Dashboard = () => {
  return (
    <div className="flex flex-col w-screen h-screen">
      <AppHeader />
      <Space className="flex flex-1 justify-start items-start">
        <Sidemenu></Sidemenu>
        <PageContent />
      </Space>
      <Footer />
    </div>
  );
};

export default Dashboard;
