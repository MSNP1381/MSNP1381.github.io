import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Footer style={{ textAlign: 'center', background: '#333', color: '#fff' }}>
      <p>تارگاه شارح &copy; 1402. تمام حقوق محفوظ است.</p>
      <p>توسعه داده شده با ❤️ توسط <a href='https://www.linkedin.com/in/msnp1381'>MSNP</a></p>
    </Footer>
  );
};

export default AppFooter;
