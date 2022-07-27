import styled from 'styled-components';
import { Card } from 'antd';

export const CardItem = styled(Card)`
  width: 280px;
  margin: 1em 0;

  @media (max-width: 786px) {
    width: 100%;
  } ;
`;
