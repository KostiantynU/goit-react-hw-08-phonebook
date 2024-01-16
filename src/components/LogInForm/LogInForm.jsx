import { Formik } from 'formik';
import { logIn } from 'redux/auth/authOperations';
import { useDispatch } from 'react-redux';
import { AddBtn, NameInput } from 'components/PhoneBookForm/PhoneBookFormStyled';
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

  // const formik = useFormik({
  // initialValues: {
  //   userEmail: '',
  //   userPassword: '',
  // },
  // validate,
  // onSubmit: values => {
  //   const logUser = { ...values };
  //   dispatch(logIn(logUser));
  //   formik.handleReset();
  // },
  // });

  return (
    <Formik
      initialValues={{
        userEmail: '',
        userPassword: '',
      }}
      validate={validate}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        const logUser = { ...values };
        dispatch(logIn(logUser));
        setSubmitting(false);
        resetForm();
      }}
    >
      {({ handleSubmit, isSubmitting }) => (
        <LogInFormStyled onSubmit={handleSubmit}>
          <NameInput
            id="userEmail"
            type="email"
            name="userEmail"
            label="Enter e-mail"
            placeholder="example@example.com"
          />
          <NameInput
            id="userPassword"
            type="password"
            name="userPassword"
            label="Enter password"
            placeholder="Enter password"
          />
          <AddBtn type="submit" $padding="10px 15px" disabled={isSubmitting}>
            LogIn!
          </AddBtn>
        </LogInFormStyled>
      )}
    </Formik>
    // <LogInFormStyled onSubmit={formik.handleSubmit}>
    //   <label htmlFor="userEmail">Enter your e-mail</label>
    //   <StyledTextInput
    //     type="email"
    //     name="userEmail"
    //     {...formik.getFieldProps('userEmail')}
    //     $formadd="400px"
    //   />
    //   {formik.touched.userEmail && formik.errors.userEmail ? (
    //     <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
    //       <div>{formik.errors.userEmail}</div>
    //     </motion.div>
    //   ) : null}

    //   <label htmlFor="userPassword">Enter password</label>
    //   <StyledTextInput
    // type="password"
    // name="userPassword"
    // {...formik.getFieldProps('userPassword')}
    // $formadd="400px"
    //   />
    //   {formik.touched.userPassword && formik.errors.userPassword ? (
    //     <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
    //       <div>{formik.errors.userPassword}</div>
    //     </motion.div>
    //   ) : null}

    //   <AddBtn type="submit" $padding="10px 15px">
    //     LogIn!
    //   </AddBtn>
    // </LogInFormStyled>
  );
}

export default LogInForm;
// this is for create pass ("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")
// this is for create pass, less difficulty ("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})")
