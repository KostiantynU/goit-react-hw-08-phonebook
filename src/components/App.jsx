import React from 'react';
import { Container, MainTitle, WrapperForContent, AddDiv, FilterListDiv } from './AppStyled';
import { Title } from './PhoneBookList/PhoneBookListStyled';
import { PhoneBookForm } from './PhoneBookForm';
import { PhoneBookList } from './PhoneBookList/PhoneBookList';
import { Filter } from './Filter';
import { AppBar } from './AppBar/AppBar';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';

import HomePage from 'pages/Home';

export function App() {
  return (
    <AnimatePresence>
      <Container>
        <AppBar />
        <MainTitle>Phonebook</MainTitle>
        <main>
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
        </main>
      </Container>
    </AnimatePresence>
  );
}
