import { Select } from 'antd';
import React, { useCallback } from 'react';

const { Option } = Select;

interface Props {
  setCategory: (value: string) => void;
}

const SelectBox: React.FC<Props> = ({ setCategory }) => {
  const handleChange = useCallback((value: { value: string; label: React.ReactNode }) => {
    const category = value.value;

    setCategory(category);
  }, []);

  return (
    <Select
      labelInValue
      defaultValue={{ value: 'category', label: '카테고리' }}
      style={{ width: 150, margin: '.5em 0 1.5em 0' }}
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
