import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactsWB } from 'redux/contacts/operationsWithBackend';
import {
  selectFilter,
  selectIsError,
  selectIsLoading,
  selectItems,
} from 'redux/contacts/selectors';
import { motion } from 'framer-motion';
import { ListContacts, LoadingMessage, ErrorSpanStyled } from './PhoneBookListStyled';
import BookItem from 'components/PhoneBookListItem/PhoneBookListItem';

function PhoneBookList() {
  const contactsItemsRedux = useSelector(selectItems);
  const isLoadingRedux = useSelector(selectIsLoading);
  const isErrorRedux = useSelector(selectIsError);

  const filter = useSelector(selectFilter);

  const filteredArray = contactsItemsRedux.filter(el =>
    el.contactName.toLowerCase().includes(filter)
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsWB());
  }, [dispatch]);

  return (
    <>
      {isErrorRedux && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <ErrorSpanStyled>Some error hapenned: {isErrorRedux}</ErrorSpanStyled>
          {/* Here I show an error message for the user - I think this is not necessary. Need to hide it, and show only notification?.. */}
        </motion.div>
      )}
      {isLoadingRedux && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <LoadingMessage>Loading contacts...</LoadingMessage>
        </motion.div>
      )}
      {!isLoadingRedux && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          {contactsItemsRedux.length ? (
            <>
              <ListContacts>
                {filteredArray.map(({ contactName, _id, phoneNumber }) => {
                  return (
                    <BookItem
                      key={_id}
                      contactName={contactName}
                      phoneNumber={phoneNumber}
                      id={_id}
                    />
                  );
                })}
              </ListContacts>
            </>
          ) : (
            <p>Your list of contacts is empty!</p>
          )}
        </motion.div>
      )}
    </>
  );
}

export default PhoneBookList;
