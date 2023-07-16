import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import SharedLayout from './SharedLayout/SharedLayout';
import HomePage from 'pages/HomePage';
import Contacts from 'pages/Contacts';
import LogInPage from 'pages/LogInPage';

export function App() {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="login" element={<LogInPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
