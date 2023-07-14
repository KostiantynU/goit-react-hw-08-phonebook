import styled from 'styled-components';
export const Container = styled.div`
  width: 90vw;
  margin-left: auto;
  margin-right: auto;
  padding: 5px;
`;
export const WrapperForContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
`;
export const AddDiv = styled.div`
  width: 400px;
  padding: 5px;
`;
export const FilterListDiv = styled.div`
  flex-grow: 2;
`;
export const MainTitle = styled.h1`
  margin: 0.2rem;
`;
export const Title = styled(MainTitle);
