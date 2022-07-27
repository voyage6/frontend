import { Card } from 'antd';
import React, { FC } from 'react';
import { CardItem } from './styles';
import { useNavigate } from 'react-router-dom';

const { Meta } = Card;

interface Props {
  id: number;
}

const PostItem: FC<Props> = ({ id }) => {
  const navigate = useNavigate();
  const onClick = (id: number) => {
    navigate(`/post/${id}`);
  };
  return (
    <CardItem
      hoverable
      onClick={() => onClick(id)}
      cover={
        <img
          alt='example'
          src='https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F225351405785800C03'
        />
      }
    >
      <Meta title='바람이 불어오는 곳' description='비오고 적적한날에 막걸리한잔하면서 듣기 좋은곡이에요 ㅎㅎ' />
      <Meta style={{ marginTop: '.8em' }} description='작성자 : 유희열' />
      <Meta style={{ marginTop: '.2em' }} description='2022-07-26 17:23' />
    </CardItem>
  );
};

export default PostItem;
