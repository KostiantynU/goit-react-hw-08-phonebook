import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
// import { deleteContact } from 'redux/operations';
import { useDeleteContactRTKQueryMutation } from 'redux/contactsQuery';
import { changeEditOpen } from 'redux/contactsSlice';
import { selectEditOpen } from 'redux/selectors';
import { PhoneBookListItem, NameSpan, TelSpan } from './PhoneBookListItemStyled';
import { ListBtn } from 'components/PhoneBookForm/PhoneBookFormStyled';
import { EditContact } from 'components/EditContact';

export function BookItem({ nameContact, numberContact, id }) {
  const dispatch = useDispatch();
  // const handleDelete = () => dispatch(deleteContact(id));
  const isEditOpen = useSelector(selectEditOpen);
  const handleChangeEditOpen = () => dispatch(changeEditOpen());

  const [deleteContactRTKQuery, { isLoading: isDeleting }] = useDeleteContactRTKQueryMutation();
  return (
    <PhoneBookListItem>
      {isEditOpen && <EditContact />}
      <NameSpan>{nameContact} :</NameSpan> <TelSpan>{numberContact}</TelSpan>
      <ListBtn type="button" onClick={handleChangeEditOpen}>
        Edit
      </ListBtn>
      <ListBtn type="button" onClick={() => deleteContactRTKQuery(id)}>
        {isDeleting ? 'Deleting' : 'Delete'}
      </ListBtn>
    </PhoneBookListItem>
  );
}

BookItem.propTypes = {
  nameContact: PropTypes.string.isRequired,
  numberContact: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
