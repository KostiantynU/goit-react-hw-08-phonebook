import { useDispatch, useSelector } from 'react-redux';
import { LogInMenuStyled, ErrorMessageStyled } from './LogInMenuStyled';
import { StyledUserLink } from 'components/SharedLayout/AppBarStyled';
// import { selectIsErrorLogin } from 'redux/auth/selectors';
// import { changeIsErrorLogin } from 'redux/auth/authenticateSlice';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
// import { selectIsErrorAuth } from 'redux/auth/selectors';
// import { changeIsErrorLogin } from 'redux/authAndContactsSlice/authAndContactsSlice';
import {
  selectIsErrorContacts,
  selectIsErrorLogInAuth,
} from 'redux/authAndContactsSlice/authAndContactsSelectors';
import {
  changeIsErrorContacts,
  changeIsErrorLogin,
} from 'redux/authAndContactsSlice/authAndContactsSlice';

function LogInMenu() {
  // const isErrorAuth = useSelector(selectIsErrorAuth);
  const isErrorLogInAuth = useSelector(selectIsErrorLogInAuth);
  const isErrorContacts = useSelector(selectIsErrorContacts);
  const dispatch = useDispatch();

  const hideErrorMessageAuth = () => {
    setTimeout(() => {
      dispatch(changeIsErrorLogin());
    }, 5000);
  };

  const hideErrorMessageContacts = () => {
    setTimeout(() => {
      dispatch(changeIsErrorContacts());
    }, 5000);
  };

  useEffect(() => {
    if (isErrorLogInAuth) {
      hideErrorMessageAuth();
    }
    if (isErrorContacts) {
      hideErrorMessageContacts();
    }
  });

  return (
    <>
      <LogInMenuStyled>
        <StyledUserLink to="/register" nav="nav">
          Register
        </StyledUserLink>
        <StyledUserLink to="/login/" nav="">
          LogIn
        </StyledUserLink>
        {isErrorLogInAuth ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ position: 'absolute', top: '0', left: '120%', width: '100%' }}
          >
            <ErrorMessageStyled>Something wrong with authorization</ErrorMessageStyled>
          </motion.div>
        ) : (
          false
        )}
        {isErrorContacts ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ position: 'absolute', top: '0', left: '110%', width: '100%' }}
          >
            <ErrorMessageStyled>The session has ended - please authorize!</ErrorMessageStyled>
          </motion.div>
        ) : (
          false
        )}
      </LogInMenuStyled>
    </>
  );
}

export default LogInMenu;
