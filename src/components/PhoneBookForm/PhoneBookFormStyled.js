import styled from 'styled-components';
export const BookForm = styled.form`
  padding: 5px;
`;
export const Div = styled.div`
  border: 1px solid rgb(46, 191, 145);
  border-radius: 5px;
`;
export const NameInput = styled.input.attrs(props => ({
  $formadd: props.$formadd || '100%',
  $margin: props.$margin || '0.5rem',
}))`
  /* width: ${props => props.$formadd}; */
  width: 90%;
  height: 30px;
  margin: ${props => props.$margin};
  margin-bottom: 2rem;
  padding: 0.2rem;
  background: linear-gradient(310deg, rgb(131, 96, 195), rgb(46, 191, 145));
  outline: none;
  border-radius: 10px;
  &:hover,
  &:focus {
    box-shadow: 0px 0px 8px 3px rgba(131, 96, 195, 0.75);
    -webkit-box-shadow: 0px 0px 8px 3px rgba(131, 96, 195, 0.75);
    -moz-box-shadow: 0px 0px 8px 3px rgba(131, 96, 195, 0.75);
  }
`;
export const TelInput = styled(NameInput).attrs(props => ({
  $formadd: props.$formadd || '90%',
}))`
  /* width: ${props => props.$formadd}; */
  width: 90%;
  margin: 0.5rem;
`;
export const SearchInput = styled(NameInput).attrs(props => ({
  $formadd: props.$formadd || '100%',
}))`
  width: ${props => props.$formadd};
  margin: 0.5rem;
`;

export const FavoriteCheckbox = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;

  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

export const Label = styled.label.attrs(props => ({
  $disFlex: props.$disFlex || 'block',
  $jusCon: props.$jusCon || 'start',
}))`
  display: ${props => props.$disFlex};
  justify-content: ${props => props.$jusCon};
  margin: 0.5em;
`;
export const Paragraph = styled.p`
  margin: 0.5rem;
`;
export const AddBtn = styled.button.attrs(props => ({
  $padding: props.$padding || '5px',
}))`
  margin: 0.5rem;
  padding: ${props => props.$padding};
  background: transparent;
  border-radius: 10px;
  border: 1px solid rgb(46, 191, 145);
  transition: background 500ms linear 0ms;
  color: inherit;
  cursor: pointer;
  &:hover,
  &:focus {
    /* background: rgba(0, 216, 255, 074); */
    background: rgba(131, 96, 195, 0.74);
  }
`;

export const ListBtn = styled(AddBtn).attrs(props => ({
  $padding: props.$padding || '0.3rem',
}))`
  margin: 0;
  padding: ${props => props.$padding};
`;
export const ErrorDiv = styled.div`
  margin: 0.2rem;
  font-size: 12px;
  font-weight: 600;
  color: red;
`;
