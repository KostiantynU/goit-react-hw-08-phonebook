export const selectFilter = state => state.contacts.filter;
export const selectItems = state => state.contacts.phonebook.items;
export const selectIsErrorPhoneBook = state => state.contacts.phonebook.isError;
export const selectIsLoading = state => state.contacts.phonebook.selectIsLoading;
