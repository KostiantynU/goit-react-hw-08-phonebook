import { useFormik } from 'formik';
import { motion } from 'framer-motion';
import { logIn } from 'redux/auth/authOperations';
import { useDispatch } from 'react-redux';
import { AddBtn, StyledInput } from 'components/PhoneBookForm/PhoneBookFormStyled';
import { LogInFormStyled } from './LogInFormStyled';

function LogInForm() {
  const dispatch = useDispatch();

  const validate = values => {
    const errors = {};
    if (!values.userEmail) {
      errors.userEmail = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.userEmail)) {
      errors.userEmail = 'Invalid email';
    }

    if (!values.userPassword) {
      errors.userPassword = 'Password is required';
    }
    //   if (
    //   !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/i.test(values.password)
    // )
    // else {
    //   errors.password = 'Invalid password';
    // }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      userEmail: '',
      userPassword: '',
    },
    validate,
    onSubmit: values => {
      const logUser = { ...values };
      dispatch(logIn(logUser));
      formik.handleReset();
    },
  });

  return (
    <LogInFormStyled onSubmit={formik.handleSubmit}>
      <label htmlFor="userEmail">Enter your e-mail</label>
      <StyledInput
        type="email"
        name="userEmail"
        {...formik.getFieldProps('userEmail')}
        $formadd="400px"
      />
      {formik.touched.userEmail && formik.errors.userEmail ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <div>{formik.errors.userEmail}</div>
        </motion.div>
      ) : null}

      <label htmlFor="userPassword">Enter password</label>
      <StyledInput
        type="password"
        name="userPassword"
        {...formik.getFieldProps('userPassword')}
        $formadd="400px"
      />
      {formik.touched.userPassword && formik.errors.userPassword ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <div>{formik.errors.userPassword}</div>
        </motion.div>
      ) : null}

      <AddBtn type="submit" $padding="10px 15px">
        LogIn!
      </AddBtn>
    </LogInFormStyled>
  );
}

export default LogInForm;
// this is for create pass ("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")
// this is for create pass, less difficulty ("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})")
