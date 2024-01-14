import { useDispatch, useSelector } from 'react-redux';
import { LogInMenuStyled, ErrorMessageStyled } from './LogInMenuStyled';
import { StyledUserLink } from 'components/SharedLayout/AppBarStyled';
// import { selectIsErrorLogin } from 'redux/auth/selectors';
// import { changeIsErrorLogin } from 'redux/auth/authenticateSlice';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
// import { selectIsErrorAuth } from 'redux/auth/selectors';
// import { changeIsErrorLogin } from 'redux/authAndContactsSlice/authAndContactsSlice';
import { selectIsErrorLogInAuth } from 'redux/authAndContactsSlice/authAndContactsSelectors';
import { changeIsErrorLogin } from 'redux/authAndContactsSlice/authAndContactsSlice';

function LogInMenu() {
  // const isErrorAuth = useSelector(selectIsErrorAuth);
  const isErrorLogInAuth = useSelector(selectIsErrorLogInAuth);
  const dispatch = useDispatch();

  const hideErrorMessage = () => {
    setTimeout(() => {
      dispatch(changeIsErrorLogin());
    }, 5000);
  };

  useEffect(() => {
    if (isErrorLogInAuth) {
      hideErrorMessage();
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
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <ErrorMessageStyled>Something wrong with authorization</ErrorMessageStyled>
          </motion.div>
        ) : (
          false
        )}
      </LogInMenuStyled>
    </>
  );
}

export default LogInMenu;
