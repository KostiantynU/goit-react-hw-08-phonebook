export const selectFilter = state => {
  console.log(state);
  return state.filter;
};
export const selectContactsList = state => state.contacts;
export const selectEditOpen = state => state.isEditOpen;
