export const selectFilter = state => {
  console.log(state);
  return state.phoneBook.filter;
};
export const selectContactsList = state => state.phoneBook.contacts;
export const selectEditOpen = state => state.phoneBook.isEditOpen;
