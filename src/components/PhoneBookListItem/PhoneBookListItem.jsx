import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactWB } from 'redux/contacts/operationsWithBackend';
import { selectIsLoading, selectIdEditForm } from 'redux/contacts/selectors';
import { changeEditOpen, changeIdEditForm } from 'redux/contacts/contactsSliceWB';
import { selectEditOpen } from 'redux/contacts/selectors';
import { PhoneBookListItem, NameSpan, TelSpan } from './PhoneBookListItemStyled';
import { ListBtn } from 'components/PhoneBookForm/PhoneBookFormStyled';
import EditContact from 'components/EditContact/EditContact';

function BookItem({ name, number, id }) {
  const dispatch = useDispatch();
  const isEditOpen = useSelector(selectEditOpen);
  const idEditOpen = useSelector(selectIdEditForm);
  const handleChangeEditOpen = evt => {
    dispatch(changeIdEditForm(evt.target.dataset.id));
    dispatch(changeEditOpen());
  };
  const isDeleting = useSelector(selectIsLoading);
  const shouldEditOpens = isEditOpen && idEditOpen;

  return (
    <PhoneBookListItem>
      <NameSpan>{name} :</NameSpan> <TelSpan>{number}</TelSpan>
      <ListBtn type="button" onClick={handleChangeEditOpen} data-id={id}>
        Edit
      </ListBtn>
      <ListBtn type="button" onClick={() => dispatch(deleteContactWB(id))}>
        {isDeleting ? 'Deleting' : 'Delete'}
      </ListBtn>
      <EditContact data-id={id} />
    </PhoneBookListItem>
  );
}

BookItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default BookItem;
