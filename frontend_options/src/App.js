/*import React from 'react';
import './App.css';
import { Layout,Avatar,Menu,Breadcrumb } from 'antd';
import { UserOutlined,AppstoreOutlined, SettingOutlined  } from '@ant-design/icons';
import { Typography } from 'antd';
const { Title } = Typography;
const { SubMenu } = Menu;

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
        <Sider>
          <Menu
          defaultSelectedKeys={["Menu"]}
          mode="inline"
          >
            <Menu.Item type="Menu">
              Menu
            </Menu.Item>
            <SubMenu>    
              <Menu.ItemGroup key="about us" title="about us">
                <Menu.Item key="location">
                  Our Location
                </Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
        <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>
        <p> My token = {window.token}</p>
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content" style={{ background: '#fff', padding: 24, minHeight: 580}}>Content</div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>bullish.bearish.beyond llc</Footer>
        </Layout>
      </Layout>
    </Layout>
    </div>
  );
}

export default App;*/
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Breadcrumb, Avatar, Typography } from 'antd';
import { UserOutlined,AppstoreOutlined, SettingOutlined  } from '@ant-design/icons';
const { Title } = Typography
const { Header, Content, Footer } = Layout;

function App() {
  return(
    <div className="App">
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">data</Menu.Item>
          <Menu.Item key="2">options profit calculator</Menu.Item>
          <Menu.Item key="3">about us</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">
        <p> My token = {window.token}</p>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>bullish.bearish.beyond.llc</Footer>
    </Layout>
    </div>
  );
}
export default App;
