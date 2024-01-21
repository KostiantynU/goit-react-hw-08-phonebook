import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactWB } from 'redux/contacts/operationsWithBackend';
// import { selectIsLoading } from 'redux/contacts/selectors';
import { PhoneBookListItem, NameSpan, TelSpan, DoubleDotSpan } from './PhoneBookListItemStyled';
import { ListBtn } from 'components/PhoneBookForm/PhoneBookFormStyled';
import EditContact from 'components/EditContact/EditContact';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { useState } from 'react';
import { selectIsLoadingContacts } from 'redux/authAndContactsSlice/authAndContactsSelectors';

function BookItem({ contactName, phoneNumber, id, favorite, category }) {
  const dispatch = useDispatch();
  const [isEditOpen, setIsEditOpen] = useState(false);
  const handleChangeEditOpen = () => {
    setIsEditOpen(prevState => !prevState);
  };
  // const isDeleting = useSelector(selectIsLoading);
  const isDeleting = useSelector(selectIsLoadingContacts);

  return (
    <PhoneBookListItem>
      <NameSpan>{contactName}</NameSpan>
      <TelSpan>{category}</TelSpan> <DoubleDotSpan>:</DoubleDotSpan>{' '}
      <TelSpan>{phoneNumber}</TelSpan>
      {favorite ? <MdFavorite /> : <MdFavoriteBorder />}
      <ListBtn type="button" onClick={handleChangeEditOpen}>
        Edit
      </ListBtn>
      <ListBtn type="button" onClick={() => dispatch(deleteContactWB(id))}>
        {isDeleting ? 'Deleting' : 'Delete'}
      </ListBtn>
      {isEditOpen && <EditContact handleChangeEditOpen={handleChangeEditOpen} contactId={id} />}
    </PhoneBookListItem>
  );
}

BookItem.propTypes = {
  contactName: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  favorite: PropTypes.bool.isRequired,
  category: PropTypes.string.isRequired,
};
export default BookItem;
