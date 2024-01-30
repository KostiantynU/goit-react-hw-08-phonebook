export const selectUserAuth = state => state.unitedState.auth.user;
export const selectIsLoggedInAuth = state => state.unitedState.auth.isLoggedInAuth;
export const selectIsRefreshingAuth = state => state.unitedState.auth.isRefreshingAuth;
// export const selectTokenAuth = state => state.unitedState.auth.user.token;
export const selectTokenAuth = state => state.unitedState.token;
export const selectIsErrorAuth = state => state.unitedState.auth.isErrorAuth;
export const selectIsErrorLogInAuth = state => state.unitedState.auth.isErrorLogInAuth;

export const selectFilterContacts = state => state.unitedState.phonebook.filter;
export const selectItemsContacts = state => state.unitedState.phonebook.contactItems;
export const selectIsErrorContacts = state => state.unitedState.phonebook.isErrorContacts;
export const selectIsLoadingContacts = state => state.unitedState.phonebook.isLoadingContacts;
