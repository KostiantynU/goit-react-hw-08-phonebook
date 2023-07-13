import React from 'react';
import { MainTitle, Section } from './AppStyled';
import { Title } from './PhoneBookList/PhoneBookListStyled';
import { PhoneBookForm } from './PhoneBookForm';
import { PhoneBookList } from './PhoneBookList/PhoneBookList';
import { Filter } from './Filter';

export function App() {
  return (
    <Section>
      <MainTitle>Phonebook</MainTitle>
      <PhoneBookForm />
      <Title>Contacts</Title>
      <Filter />
      <PhoneBookList />
    </Section>
  );
}
