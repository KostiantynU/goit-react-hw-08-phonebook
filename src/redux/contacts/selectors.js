export const selectFilter = state => state.contacts.filter;
export const selectItems = state => state.contacts.phonebook.items;
export const selectIsError = state => state.contacts.phonebook.isError;
export const selectIsLoading = state => state.contacts.phonebook.selectIsLoading;
export const selectEditOpen = state => state.contacts.isEditOpen;
export const selectIdEditForm = state => state.contacts.idEditForm;
