import React from 'react';
import './App.css';
import { Layout,Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
const { Title } = Typography;


const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
      <Header style={{padding:10}}>
        <Avatar style={{float:"right"}} size="large" icon={<UserOutlined />} />
        <Title style={{color:'white'}} level={3}>bullish.bearish.beyond</Title>
      </Header>
        <Layout>
        <Sider style={{background:'green'}}>menu(coming)</Sider>
        <Layout>
          <Content>data</Content>
          <Footer>footer</Footer>
        </Layout>
      </Layout>
    </Layout>
    </div>
  );
}

export default App;
