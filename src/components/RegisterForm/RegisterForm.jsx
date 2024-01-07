import { useFormik } from 'formik';
import { register } from 'redux/auth/authOperations';
import { motion } from 'framer-motion';
import { AddBtn, NameInput } from 'components/PhoneBookForm/PhoneBookFormStyled';
import { LogInFormStyled } from 'components/LogInForm/LogInFormStyled';
import { useDispatch } from 'react-redux';

const RegisterFormStyled = () => {
  const dispatch = useDispatch();
  const validate = values => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email';
    }

    if (!values.password) {
      errors.password = 'Password is required';
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/i.test(values.password)) {
      errors.password = 'Invalid password';
    }

    if (!values.name) {
      errors.name = 'Name is required';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      name: '',
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
      <label htmlFor="name">Enter your name</label>
      <NameInput type="text" name="name" {...formik.getFieldProps('name')} $formadd="400px" />
      {formik.touched.name && formik.errors.name ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <div>{formik.errors.name}</div>
        </motion.div>
      ) : null}

      <label htmlFor="email">Enter your e-mail</label>
      <NameInput type="email" name="email" {...formik.getFieldProps('email')} $formadd="400px" />
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
        $formadd="400px"
      />
      {formik.touched.password && formik.errors.password ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <div>{formik.errors.password}</div>
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
