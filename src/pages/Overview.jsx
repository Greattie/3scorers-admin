import { useEffect, useState } from "react";
import { Card, Space, Avatar, Button, List, Skeleton } from "antd";
import { FaUserFriends } from "react-icons/fa";

const Overview = () => {
  const count = 3;
  const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;
  const [initLoading, setInitLoading] = useState(true);
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        setInitLoading(false);
        setData(res.results);
        setList(res.results);
      });
  }, []);

  return (
    <div className="">
      <Space
        direction="horizontal"
        size={16}
        className="flex justify-between items-center w-full m-10"
      >
        <Card
          size="small"
          style={{
            width: 300,
          }}
          className="p-5 bg-[#004F4F] text-white"
        >
          <div className="flex justify-between">
            <div>
              <h3>TOTAL NUMBER OF USERS</h3>
              <h2>1,000,000</h2>
            </div>
            <FaUserFriends />
          </div>
        </Card>
        <Card
          size="small"
          style={{
            width: 300,
          }}
          className="p-5 bg-[#007575] text-white"
        >
          <div className="flex justify-between">
            <div>
              <h3>TOTAL NUMBER OF ADMINS</h3>
              <h2>970</h2>
            </div>
            <FaUserFriends />
          </div>
        </Card>
      </Space>

      <List
        className="demo-loadmore-list"
        loading={initLoading}
        itemLayout="horizontal"
        dataSource={list}
        renderItem={(item) => (
          <List.Item actions={[<a key="list-loadmore-more">more</a>]}>
            <Skeleton avatar title={false} loading={item.loading} active>
              <List.Item.Meta
                avatar={<Avatar src={item.picture.large} />}
                title={<a href="https://ant.design">{item.name?.last}</a>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              />
              <div>content</div>
            </Skeleton>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Overview;
