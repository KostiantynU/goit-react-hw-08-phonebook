import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
// import { selectItems } from 'redux/contacts/selectors';
import { addContactWB } from 'redux/contacts/operationsWithBackend';
import { BookForm, AddBtn, Div, FavoriteCheckboxSecond, NameInput } from './PhoneBookFormStyled';
import { selectItemsContacts } from 'redux/authAndContactsSlice/authAndContactsSelectors';

function PhoneBookForm() {
  // const contactsItems = useSelector(selectItems);
  const contactsItems = useSelector(selectItemsContacts);
  const dispatch = useDispatch();

  const validate = values => {
    const errors = {};
    if (!values.contactName) {
      errors.contactName = 'Required';
    } else if (
      !/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/i.test(values.contactName)
    ) {
      errors.contactName = 'Invalid contactName';
    }

    if (!values.phoneNumber) {
      errors.phoneNumber = 'Required';
    } else if (
      !/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/i.test(
        values.phoneNumber
      )
    ) {
      errors.phoneNumber = 'Invalid phoneNumber';
    }

    return errors;
  };

  // const formik = useFormik({
  //   initialValues: { contactName: '', phoneNumber: '', favorite: isChecked },
  //   validate,
  //   onSubmit: values => {
  //     const newContact = {
  //       contactName: values.contactName,
  //       phoneNumber: values.phoneNumber,
  //       favorite: values.favorite,
  //     };

  //     if (
  //       contactsItems.some(el => {
  //         return el.contactName.toLowerCase().includes(newContact.contactName.toLowerCase());
  //       })
  //     ) {
  //       formik.handleReset();
  //       return alert(`${newContact.contactName} is already in list!`);
  //     }

  //     dispatch(addContactWB(newContact));
  //     formik.handleReset();
  //   },
  // });

  return (
    <Formik
      initialValues={{ contactName: '', phoneNumber: '', favorite: false }}
      validate={validate}
      onSubmit={(values, { setSubmitting, resetForm, isValidating }) => {
        setSubmitting(true);
        const newContact = {
          contactName: values.contactName,
          phoneNumber: values.phoneNumber,
          favorite: values.favorite,
        };

        if (
          contactsItems.some(el => {
            return el.contactName.toLowerCase().includes(newContact.contactName.toLowerCase());
          })
        ) {
          // formik.handleReset();
          resetForm();
          return alert(`${newContact.contactName} is already in list!`);
        }
        setSubmitting(false);
        dispatch(addContactWB(newContact));
        resetForm();
      }}
    >
      {({ handleSubmit, isSubmitting, values }) => (
        <BookForm onSubmit={handleSubmit}>
          <Div>
            {/* <Label htmlFor="contactName">Name</Label>
            <Field
              id="contactName"
              name="contactName"
              type="text"
              title="Name of contact may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              placeholder="Enter the contact name"
              component={StyledTextInput}
            />
            <ErrorMessage name="contactName">{msg => <ErrorDiv>{msg}</ErrorDiv>}</ErrorMessage> */}

            <NameInput
              label="Contact name"
              id="contactName"
              name="contactName"
              title="Name of contact may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              placeholder="Enter the contact name"
              $width="300px"
              $marginBottom="0.5rem"
            />

            <NameInput
              label="Phone number"
              id="phoneNumber"
              name="phoneNumber"
              title="Phone number may contains \'+\' and numbers"
              placeholder="Enter the contact phone number"
              $width="300px"
              $marginBottom="0.5rem"
            />

            {/* <Label htmlFor="phoneNumber">Phone number</Label>
            <Field
              id="phoneNumber"
              name="phoneNumber"
              type="text"
              title="Phone number may contains \'+\' and numbers"
              placeholder="Enter the contact phone number"
              component={TelInput}
            />
            <ErrorMessage name="phoneNumber">{msg => <ErrorDiv>{msg}</ErrorDiv>}</ErrorMessage> */}

            <FavoriteCheckboxSecond name={'favorite'}>Favorite</FavoriteCheckboxSecond>

            {/* <Label htmlFor="favorite" $disFlex="flex" $jusCon="space-between">
              Favorite{values.favorite ? <MdFavorite /> : <MdFavoriteBorder />}
              <Field type="checkbox" name="favorite" id="favorite" component={FavoriteCheckbox} />
            </Label> */}

            <AddBtn type="submit" disabled={isSubmitting}>
              Submit
            </AddBtn>
            {/* The old code */}
            {/* <NameInput
            id="name"
            name="contactName"
            type="text"
            title="ContactName may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.contactName}
            $formadd="300px"
          />
          {formik.touched.contactName && formik.errors.contactName ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <ErrorDiv>{formik.errors.contactName}</ErrorDiv>
            </motion.div>
          ) : null} */}
            {/* <TelInput
            id="number"
            name="phoneNumber"
            type="tel"
            title="Phone number may contains \'+\' and numbers"
            required
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phoneNumber}
            $formadd="300px"
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <ErrorDiv>{formik.errors.phoneNumber}</ErrorDiv>
            </motion.div>
          ) : null} */}
            {/* <FavoriteCheckbox
          id="favorite"
          name="favorite"
          type="checkbox"
          title="Favorite contact?"
          checked={isChecked}
          // required
          onChange={handleCheckbox}
          // onBlur={formik.handleBlur}
          // value={formik.values.favorite}
          // $formadd="100%"
        /> */}
          </Div>
        </BookForm>
      )}
    </Formik>
  );
}

export default PhoneBookForm;
