import styled from 'styled-components';

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
export const MainTitleWrapper = styled.div`
  /* display: grid; */
  /* grid-template-columns: 0.5fr 2fr; */
`;
export const MainTitle = styled.h1`
  display: inline;
  margin: 0.2rem;
  padding: 0.2rem;
  border: 1px solid rgb(46, 191, 145);
  border-radius: 10px;
  transition: box-shadow 300ms linear;
  box-shadow: 0px 0px 7px 3px rgba(131, 96, 195, 0.75);
  -webkit-box-shadow: 0px 0px 7px 3px rgba(131, 96, 195, 0.75);
  -moz-box-shadow: 0px 0px 7px 3px rgba(131, 96, 195, 0.75);
  &:hover {
    box-shadow: 0px 0px 7px 5px rgba(131, 96, 195, 0.75);
    -webkit-box-shadow: 0px 0px 7px 5px rgba(131, 96, 195, 0.75);
    -moz-box-shadow: 0px 0px 7px 5px rgba(131, 96, 195, 0.75);
  }
`;
