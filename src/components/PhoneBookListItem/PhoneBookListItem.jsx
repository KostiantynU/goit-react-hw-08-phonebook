import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactWB } from 'redux/contacts/operationsWithBackend';
import { selectIsLoading } from 'redux/contacts/selectors';
// import { changeEditOpen } from 'redux/contactsSlice';
import { selectEditOpen } from 'redux/contacts/selectors';
import { PhoneBookListItem, NameSpan, TelSpan } from './PhoneBookListItemStyled';
import { ListBtn } from 'components/PhoneBookForm/PhoneBookFormStyled';
import EditContact from 'components/EditContact/EditContact';

function BookItem({ name, number, id }) {
  const dispatch = useDispatch();
  const isEditOpen = useSelector(selectEditOpen);
  // const handleChangeEditOpen = () => dispatch(changeEditOpen());
  const isDeleting = useSelector(selectIsLoading);

  return (
    <PhoneBookListItem>
      {isEditOpen && <EditContact />}
      <NameSpan>{name} :</NameSpan> <TelSpan>{number}</TelSpan>
      <ListBtn type="button">Edit</ListBtn>
      <ListBtn type="button" onClick={() => dispatch(deleteContactWB(id))}>
        {isDeleting ? 'Deleting' : 'Delete'}
      </ListBtn>
    </PhoneBookListItem>
  );
}

BookItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default BookItem;
