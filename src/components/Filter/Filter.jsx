import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import { changeFilter } from 'redux/contacts/contactsSliceWB';
// import { changeFilter } from 'redux/contacts/contactsSlice';
import { SearchInput, Paragraph } from '../PhoneBookForm/PhoneBookFormStyled';

function Filter() {
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <>
      <Paragraph>Find contacts by name</Paragraph>
      <SearchInput
        onChange={evt => dispatch(changeFilter(evt.target.value.toLowerCase().trim()))}
        value={filterValue}
        formadd="90%"
      />
    </>
  );
}

export default Filter;
