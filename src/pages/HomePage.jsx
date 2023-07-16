import PhoneBookForm from 'components/PhoneBookForm/PhoneBookFormik';
import PhoneBookList from 'components/PhoneBookList/PhoneBookList';
import Filter from 'components/Filter/Filter';
import { AddDiv, FilterListDiv, MainTitle, WrapperForContent } from 'components/AppStyled';
import { Title } from 'components/PhoneBookList/PhoneBookListStyled';
import { motion } from 'framer-motion';

function HomePage() {
  return (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <MainTitle>Phonebook</MainTitle>
        <WrapperForContent>
          <AddDiv>
            <Title>Add contact</Title>
            <PhoneBookForm />
          </AddDiv>
          <FilterListDiv>
            <Title>Contacts</Title>
            <Filter />
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <PhoneBookList />
            </motion.div>
          </FilterListDiv>
        </WrapperForContent>
      </motion.div>
    </>
  );
}
export default HomePage;
