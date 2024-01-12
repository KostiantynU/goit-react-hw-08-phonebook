import { useFormik } from 'formik';
import { register } from 'redux/auth/authOperations';
import { motion } from 'framer-motion';
import { AddBtn, StyledTextInput } from 'components/PhoneBookForm/PhoneBookFormStyled';
import { LogInFormStyled } from 'components/LogInForm/LogInFormStyled';
import { useDispatch } from 'react-redux';

const RegisterFormStyled = () => {
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
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/i.test(values.userPassword)) {
      errors.userPassword = 'Invalid password';
    }

    if (!values.userName) {
      errors.userName = 'Name is required';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      userEmail: '',
      userPassword: '',
      userName: '',
    },
    validate,
    onSubmit: values => {
      const newUser = { ...values };
      dispatch(register(newUser));
      formik.handleReset();
    },
  });

  return (
    <LogInFormStyled onSubmit={formik.handleSubmit}>
      <label htmlFor="userName">Enter your name</label>
      <StyledTextInput
        type="text"
        name="userName"
        {...formik.getFieldProps('userName')}
        $formadd="400px"
      />
      {formik.touched.userName && formik.errors.userName ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <div>{formik.errors.userName}</div>
        </motion.div>
      ) : null}

      <label htmlFor="userEmail">Enter your e-mail</label>
      <StyledTextInput
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
      <StyledTextInput
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
        Register!
      </AddBtn>
    </LogInFormStyled>
  );
};

// this is for create pass ("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")
// this is for create pass, less difficulty ("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})")

export default RegisterFormStyled;
