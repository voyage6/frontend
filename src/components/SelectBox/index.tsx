import { Select } from 'antd';
import React, { useCallback } from 'react';
import { openNotification } from '../../utils/notification';

const { Option } = Select;

const SelectBox: React.FC = () => {
  const handleChange = useCallback((value: { value: string; label: React.ReactNode }) => {
    const category = value.value;
    openNotification('bottom', '카테고리를 선택해주세요', '');
    console.log(category);
  }, []);

  return (
    <Select
      labelInValue
      defaultValue={{ value: 'category', label: '카테고리' }}
      style={{ width: 150 }}
      onChange={handleChange}
    >
      <Option disabled value='카테고리'>
        카테고리
      </Option>
      <Option value='피아노'>피아노</Option>
      <Option value='계이름'>계이름</Option>
      <Option value='섹소폰'>섹소폰</Option>
      <Option value='통기타'>통기타</Option>
      <Option value='리코더'>리코더</Option>
      <Option value='하모니카'>하모니카</Option>
    </Select>
  );
};
export default SelectBox;
