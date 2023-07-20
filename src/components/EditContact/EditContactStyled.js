import styled from 'styled-components';
import { NameInput } from 'components/PhoneBookForm/PhoneBookFormStyled';
export const EditContactForm = styled.form`
  display: flex;
  position: absolute;
  left: 0;
  top: -15%;
`;
export const EditInput = styled(NameInput)`
  width: 100%;
`;
