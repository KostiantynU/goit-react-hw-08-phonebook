import { useSelector, useDispatch } from 'react-redux';
// import { selectFilter } from 'redux/contacts/selectors';
// import { changeFilter } from 'redux/contacts/contactsSliceWB';
import { StyledTextInput, Paragraph } from '../PhoneBookForm/PhoneBookFormStyled';
import { selectFilterContacts } from 'redux/authAndContactsSlice/authAndContactsSelectors';
import { changeFilterUnited } from 'redux/authAndContactsSlice/authAndContactsSlice';

function Filter() {
  // const filterValue = useSelector(selectFilter);
  const filterValue = useSelector(selectFilterContacts);
  const dispatch = useDispatch();

  return (
    <>
      <Paragraph>Find contacts by name</Paragraph>
      <StyledTextInput
        onChange={evt => dispatch(changeFilterUnited(evt.target.value.toLowerCase().trim()))}
        value={filterValue}
        placeholder="Enter the contact name"
        $width="100%"
        $margin="0"
        $marginTop="0.5rem"
        $marginBottom="2rem"
      />
    </>
  );
}

export default Filter;
