import styled from 'styled-components';

export const SelectWrapper = styled.div.attrs(props => ({
  $width: props.$width || '90%',
  $margin: props.$margin || '0.5rem',
  $marginTop: props.$marginTop || '0',
  $marginBottom: props.$marginBottom || '0',
}))`
  position: relative;
  width: ${props => props.$width};
  height: 30px;
  margin: ${props => props.$margin};
  margin-top: ${props => props.$marginTop};
  margin-bottom: ${props => props.$marginBottom};
  padding: 0.2rem;
  background: linear-gradient(310deg, rgb(131, 96, 195), rgb(46, 191, 145));
  outline: none;
  border: 2px solid rgb(118, 118, 118);
  border-style: inset;
  border-radius: 10px;
  transition: box-shadow 300ms linear;
  &:hover,
  &:focus {
    box-shadow: 0px 0px 8px 3px rgba(131, 96, 195, 0.75);
    -webkit-box-shadow: 0px 0px 8px 3px rgba(131, 96, 195, 0.75);
    -moz-box-shadow: 0px 0px 8px 3px rgba(131, 96, 195, 0.75);
  }
`;

export const SelectMenu = styled.ul.attrs(props => ({
  $width: props.$width || '100%',
  $margin: props.$margin || '0',
  $marginTop: props.$marginTop || '0',
  $marginBottom: props.$marginBottom || '0',
  $display: props.$display || 'none',
}))`
  position: absolute;
  display: ${props => props.$display};
  width: ${props => props.$width};
  left: 0;
  top: 100%;
  margin: ${props => props.$margin};
  margin-top: ${props => props.$marginTop};
  margin-bottom: ${props => props.$marginBottom};
  padding: 0.2rem;
  background: linear-gradient(310deg, rgb(131, 96, 195), rgb(46, 191, 145));
  outline: none;
  border: 2px solid rgb(118, 118, 118);
  border-style: inset;
  border-radius: 10px;
  transition: box-shadow 300ms linear;
  &:hover,
  &:focus {
    box-shadow: 0px 0px 8px 3px rgba(131, 96, 195, 0.75);
    -webkit-box-shadow: 0px 0px 8px 3px rgba(131, 96, 195, 0.75);
    -moz-box-shadow: 0px 0px 8px 3px rgba(131, 96, 195, 0.75);
  }
`;

export const SelectMenuItem = styled.li`
  &:hover {
    background-image: linear-gradient(155deg, rgba(131, 96, 195, 0.2), rgba(46, 191, 145, 0.3));
  }
`;
