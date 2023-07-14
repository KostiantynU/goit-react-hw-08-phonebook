// import { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { getContacts } from 'redux/operations';
import { selectFilter } from 'redux/selectors';
import { DivContacts, ListContacts } from './PhoneBookListStyled';
import { BookItem } from 'components/PhoneBookListItem';

import { useGetContactsQuery } from 'redux/contactsQuery';

export function PhoneBookList() {
  const {
    data: contactsRTKQuery = [],
    error: errorRTKQuery,
    isFetching: isFetchingRTKQuery,
  } = useGetContactsQuery({
    // skip: true, // pokemanName === ""
  });

  // const {
  //   items: contactsItems,
  //   isLoading: isLoadingRedux,
  //   error: errorRedux,
  // } = useSelector(selectContactsList);

  const filter = useSelector(selectFilter);

  const filteredArray = contactsRTKQuery.filter(el =>
    el.nameContact.toLowerCase().includes(filter)
  );

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getContacts());
  // }, [dispatch]);

  return (
    <DivContacts>
      {errorRTKQuery && <p>Some error hapenned: {errorRTKQuery}</p>}
      {isFetchingRTKQuery ? (
        <p>Loading contacts...</p>
      ) : (
        <ListContacts>
          {filteredArray.map(({ nameContact, id, numberContact }) => {
            return (
              <BookItem key={id} nameContact={nameContact} numberContact={numberContact} id={id} />
            );
          })}
        </ListContacts>
      )}
    </DivContacts>
  );
}
