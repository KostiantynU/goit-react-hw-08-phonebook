import { useFormik } from 'formik';
import { motion } from 'framer-motion';
import { logIn } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import { AddBtn, NameInput } from 'components/PhoneBookForm/PhoneBookFormStyled';
import { LogInFormStyled } from './LogInFormStyled';

function LogInForm() {
  const dispatch = useDispatch();

  const validate = values => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email';
    }

    if (!values.password) {
      errors.password = 'Required';
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
      email: '',
      password: '',
    },
    validate,
    onSubmit: values => {
      console.log(values);
      const logUser = { ...values };
      dispatch(logIn(logUser));
      formik.handleReset();
    },
  });

  return (
    <LogInFormStyled onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Enter your e-mail</label>
      <NameInput type="email" name="email" {...formik.getFieldProps('email')} formadd="400px" />
      {formik.touched.email && formik.errors.email ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <div>{formik.errors.email}</div>
        </motion.div>
      ) : null}

      <label htmlFor="password">Enter password</label>
      <NameInput
        type="password"
        name="password"
        {...formik.getFieldProps('password')}
        formadd="400px"
      />
      {formik.touched.password && formik.errors.password ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <div>{formik.errors.password}</div>
        </motion.div>
      ) : null}

      <AddBtn type="submit" padding="10px 15px">
        LogIn!
      </AddBtn>
    </LogInFormStyled>
  );
}

export default LogInForm;
// this is for create pass ("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")
// this is for create pass, less difficulty ("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})")
