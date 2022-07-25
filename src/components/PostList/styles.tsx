import styled from 'styled-components';

export const MaxWidthContainer = styled.div`
  max-width: 1200px;
  margin: auto;
`;

export const PostListHeader = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5em;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 280px);
  grid-gap: 1rem;
  justify-content: space-between;

  @media (max-width: 786px) {
    justify-content: center;
    grid-template-columns: repeat(1, 1fr);
  } ;
`;
