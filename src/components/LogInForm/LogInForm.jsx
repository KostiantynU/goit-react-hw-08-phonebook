import { useFormik } from 'formik';
import { motion } from 'framer-motion';
import { AddBtn } from 'components/PhoneBookForm/PhoneBookFormStyled';
function LogInForm() {
  const validate = values => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email';
    }

    if (!values.password) {
      errors.password = 'Required';
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/i.test(values.password)
    ) {
      errors.password = 'Invalid password';
    }

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
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Enter your e-mail</label>
      <input type="email" name="email" {...formik.getFieldProps('email')} />
      {formik.touched.email && formik.errors.email ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <div>{formik.errors.email}</div>
        </motion.div>
      ) : null}
      <label htmlFor="password">Enter password</label>
      <input type="password" name="password" {...formik.getFieldProps('password')} />
      {formik.touched.password && formik.errors.password ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <div>{formik.errors.password}</div>
        </motion.div>
      ) : null}
      <AddBtn type="submit">LogIn!</AddBtn>
    </form>
  );
}

export default LogInForm;
// this is for create pass ("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")
// this is for create pass, less difficulty ("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})")
