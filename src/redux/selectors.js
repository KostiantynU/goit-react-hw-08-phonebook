export const selectFilter = state => {
  console.log(state);
  return state.contactsReducer.filter;
};
export const selectContactsList = state => state.contactsReducer;
export const selectEditOpen = state => state.contactsReducer.isEditOpen;
