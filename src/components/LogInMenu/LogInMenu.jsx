import { useDispatch, useSelector } from 'react-redux';
import { LogInMenuStyled, ErrorMessageStyled } from './LogInMenuStyled';
import { StyledUserLink } from 'components/SharedLayout/AppBarStyled';
import { selectIsErrorAuth } from 'redux/auth/selectors';
import { changeIsErrorAuth } from 'redux/auth/authenticateSlice';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

function LogInMenu() {
  const isErrorAuth = useSelector(selectIsErrorAuth);
  const dispatch = useDispatch();

  const hideErrorMessage = () => {
    const timerId = setTimeout(() => {
      dispatch(changeIsErrorAuth());
    }, 5000);
  };

  useEffect(() => {
    if (isErrorAuth) {
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
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          {isErrorAuth ? (
            <ErrorMessageStyled>Something wrong with authorization</ErrorMessageStyled>
          ) : (
            false
          )}
        </motion.div>
      </LogInMenuStyled>
    </>
  );
}

export default LogInMenu;
