import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactWB } from 'redux/contacts/operationsWithBackend';
import { selectIsLoading } from 'redux/contacts/selectors';
import { PhoneBookListItem, NameSpan, TelSpan } from './PhoneBookListItemStyled';
import { ListBtn } from 'components/PhoneBookForm/PhoneBookFormStyled';
import EditContact from 'components/EditContact/EditContact';
import { useState } from 'react';

function BookItem({ name, number, id }) {
  const dispatch = useDispatch();
  const [isEditOpen, setIsEditOpen] = useState(false);
  const handleChangeEditOpen = () => {
    setIsEditOpen(prevState => !prevState);
  };
  const isDeleting = useSelector(selectIsLoading);

  return (
    <PhoneBookListItem>
      <NameSpan>{name} :</NameSpan> <TelSpan>{number}</TelSpan>
      <ListBtn type="button" onClick={handleChangeEditOpen}>
        Edit
      </ListBtn>
      <ListBtn type="button" onClick={() => dispatch(deleteContactWB(id))}>
        {isDeleting ? 'Deleting' : 'Delete'}
      </ListBtn>
      {isEditOpen && <EditContact handleChangeEditOpen={handleChangeEditOpen} userId={id} />}
    </PhoneBookListItem>
  );
}

BookItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default BookItem;
