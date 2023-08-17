import { Image, Space, Typography } from "antd";

const Header = () => {
  return (
    <div className="h-[50px] flex justify-between items-center border-b border-solid border-[rgba(0,0,0,0.15)] p-4">
      
      <Image src="www.google.com" width={40} />

      <Typography.Title level={5}>Dashboard Header</Typography.Title>
    </div>
  );
};

export default Header;
