import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { changeFilter } from 'redux/contactsSlice';
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
      />
    </>
  );
}

export default Filter;
