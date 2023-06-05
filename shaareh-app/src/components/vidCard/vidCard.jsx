
import React, { useState } from 'react';
import { Card, Typography, Button } from 'antd';
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';
import "./vidCard.css";

const { Title, Text } = Typography;
export default function VidCardComponent({ src, title, text }) {
  const [isCardOpen, setIsCardOpen] = useState(false);

  const handleToggle = () => {
    setIsCardOpen(!isCardOpen);
  };

  return (
    <Card
    hoverable
      className="video-card"
      cover={<iframe style={{minHeight:"200px"}} src={src} title="Video Player" frameBorder="0" allowFullScreen></iframe>}
      actions={[
        <Button type="text" onClick={handleToggle}>
          {isCardOpen ? <CaretUpOutlined /> : <CaretDownOutlined />}
        </Button>,
      ]}
    >
      <Title level={4}>{title}</Title>
      {isCardOpen && (
        <Text >{text} </Text>
      )}
    </Card>
  );
};

