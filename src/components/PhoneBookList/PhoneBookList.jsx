import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/operations';
import { selectContactsList, selectFilter } from 'redux/selectors';
import { ListContacts, LoadingMessage } from './PhoneBookListStyled';
import BookItem from 'components/PhoneBookListItem/PhoneBookListItem';
import { useGetContactsQuery } from 'redux/contactsQuery';
import { motion } from 'framer-motion';

function PhoneBookList() {
  const {
    data: contactsRTKQuery = [],
    error: errorRTKQuery,
    isFetching: isFetchingRTKQuery,
  } = useGetContactsQuery({
    // skip: true, // pokemanName === ""
  });

  const {
    items: contactsItemsRedux = [],
    isLoading: isLoadingRedux,
    error: errorRedux,
  } = useSelector(selectContactsList);

  const filter = useSelector(selectFilter);

  const filteredArray = contactsItemsRedux.filter(el =>
    el.nameContact.toLowerCase().includes(filter)
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <>
      {errorRedux && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <p>Some error hapenned: {errorRedux}</p>
        </motion.div>
      )}
      {isLoadingRedux && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <LoadingMessage>Loading contacts...</LoadingMessage>
        </motion.div>
      )}
      {!isLoadingRedux && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <ListContacts>
            {filteredArray.map(({ nameContact, id, numberContact }) => {
              return (
                <BookItem
                  key={id}
                  nameContact={nameContact}
                  numberContact={numberContact}
                  id={id}
                />
              );
            })}
          </ListContacts>
        </motion.div>
      )}
    </>
  );
}

export default PhoneBookList;
