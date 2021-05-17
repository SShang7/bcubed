import { Input, Space } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import React from 'react';

class PasswordBox extends React.Component {
render() {
  return (
    <Space direction="vertical">
    <Input placeholder="input username" />
    <Input.Password
      placeholder="input password"
      iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
    />
  </Space>
    )
  }
}

export default PasswordBox;