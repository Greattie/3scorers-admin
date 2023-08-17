import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Sidemenu from "./components/Sidemenu";
import AppHeader from "./components/AppHeader";
import PageContent from "./components/PageContent";
import Footer from "./components/Footer";
import { Space } from "antd";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <div className="flex flex-col w-screen h-screen">
        <AppHeader />
        <Space className="flex flex-1 justify-start items-start">
          <Sidemenu></Sidemenu>
          <PageContent />
        </Space>
        <Footer />
      </div>
    </>
  );
}

export default App;
