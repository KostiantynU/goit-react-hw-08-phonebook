import { ListBtn } from 'components/PhoneBookForm/PhoneBookFormStyled';
import { EditContactForm, EditInput } from './EditContactStyled';

export const EditContact = () => {
  return (
    <>
      <EditContactForm>
        <EditInput type="text" name="numberContact" />
        <ListBtn>Change</ListBtn>
      </EditContactForm>
    </>
  );
};
