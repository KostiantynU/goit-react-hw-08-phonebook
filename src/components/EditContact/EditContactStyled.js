import styled from 'styled-components';
import { StyledTextInput, ListBtn } from 'components/PhoneBookForm/PhoneBookFormStyled';
export const EditContactForm = styled.form`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  /* position: absolute;
  left: 0;
  top: -50%; */
  box-shadow: 0px 0px 10px 1px rgba(217, 217, 217, 0.75);
  -webkit-box-shadow: 0px 0px 10px 1px rgba(217, 217, 217, 0.75);
  -moz-box-shadow: 0px 0px 10px 1px rgba(217, 217, 217, 0.75);
  border-radius: 10px;
`;
export const EditInput = styled(StyledTextInput)`
  width: 300px;
  margin: 0;
  margin-bottom: 0;
`;
export const EditSubBtn = styled(ListBtn).attrs(props => ({
  $padding: props.$padding || '0.3rem',
}))`
  background: rgb(131, 96, 195);
  margin: 0;
  padding: ${props => props.$padding};
  color: black;
  &:hover {
    background: rgb(131, 96, 195);
  }
`;
export const CloseBtn = styled(EditSubBtn)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  color: white;
`;

export const OverlayForEditForm = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* position: absolute; */
  background-color: rgba(217, 217, 217, 0.2);
  /* pointer-events: all; */
`;
