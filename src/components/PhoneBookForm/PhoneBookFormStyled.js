import { useField } from 'formik';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const BookForm = styled.form`
  padding: 5px;
`;

export const Div = styled.div`
  border: 1px solid rgb(46, 191, 145);
  border-radius: 5px;
`;

export const Label = styled.label.attrs(props => ({
  $disFlex: props.$disFlex || 'block',
  $jusCon: props.$jusCon || 'start',
}))`
  display: ${props => props.$disFlex};
  justify-content: ${props => props.$jusCon};
  margin: 0.5em;
`;

export const StyledTextInput = styled.input.attrs(props => ({
  $width: props.$width || '90%',
  $margin: props.$margin || '0.5rem',
  $marginBottom: props.$marginBottom || '2rem',
  $marginTop: props.$marginTop || '0',
}))`
  width: ${props => props.$width};
  /* width: 90%; */
  height: 30px;
  margin: ${props => props.$margin};
  margin-top: ${props => props.$marginTop};
  margin-bottom: ${props => props.$marginBottom};
  padding: 0.2rem;
  background: linear-gradient(310deg, rgb(131, 96, 195), rgb(46, 191, 145));
  outline: none;
  border-radius: 10px;
  transition: box-shadow 300ms linear;
  &:hover,
  &:focus {
    box-shadow: 0px 0px 8px 3px rgba(131, 96, 195, 0.75);
    -webkit-box-shadow: 0px 0px 8px 3px rgba(131, 96, 195, 0.75);
    -moz-box-shadow: 0px 0px 8px 3px rgba(131, 96, 195, 0.75);
  }
`;

export const NameInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <Label htmlFor={props.id || props.name}>{label}</Label>
      <StyledTextInput {...field} {...props} />
      {meta.error && meta.touched ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <ErrorDiv>{meta.error}</ErrorDiv>
        </motion.div>
      ) : null}
    </>
  );
};

export const TelInput = styled(StyledTextInput).attrs(props => ({
  $formadd: props.$formadd || '90%',
}))`
  /* width: ${props => props.$formadd}; */

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
  /* clip: rect(0 0 0 0); */
  overflow: hidden;
`;

export const FavoriteLabelCheckbox = styled.label`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  margin: 0.5em;
`;

export const FavoriteCheckboxSecond = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });

  return (
    <>
      <FavoriteLabelCheckbox>
        {<FavoriteCheckbox type="checkbox" {...field} {...props} />}
        {children}
        {field.checked ? <MdFavorite size="1.5em" /> : <MdFavoriteBorder size="1.5em" />}
      </FavoriteLabelCheckbox>
      {meta.touched && meta.error ? <ErrorDiv>{meta.error}</ErrorDiv> : null}
    </>
  );
};

export const SelectStyled = styled.select.attrs(props => ({
  $width: props.$width || '90%',
}))`
  width: ${props => props.$width};
  height: 30px;
  margin: ${props => props.$margin};
  margin-top: ${props => props.$marginTop};
  margin-bottom: ${props => props.$marginBottom};
  padding: 0.2rem;
  background: linear-gradient(310deg, rgb(131, 96, 195), rgb(46, 191, 145));
  outline: none;
  border-radius: 10px;
  transition: box-shadow 300ms linear;
  &:hover,
  &:focus {
    box-shadow: 0px 0px 8px 3px rgba(131, 96, 195, 0.75);
    -webkit-box-shadow: 0px 0px 8px 3px rgba(131, 96, 195, 0.75);
    -moz-box-shadow: 0px 0px 8px 3px rgba(131, 96, 195, 0.75);
  }
`;

export const SelectCategories = ({ children, ...props }) => {
  const [field] = useField({ ...props });

  return (
    <SelectStyled {...field} {...props}>
      {children}
    </SelectStyled>
  );
};

export const Paragraph = styled.p`
  margin: 0.5rem;
`;

export const AddBtn = styled.button.attrs(props => ({
  $padding: props.$padding || '5px',
}))`
  display: block;
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
  color: rgb(204, 201, 209);
`;
