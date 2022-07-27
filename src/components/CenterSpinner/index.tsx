import React from 'react';
import { Spin } from 'antd';

const CenterSpinner = () => {
  return <Spin style={{ position: 'absolute', top: '50%', left: '50%' }} size='large' />;
};

export default CenterSpinner;
