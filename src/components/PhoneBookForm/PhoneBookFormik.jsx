import { Field, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
// import { selectItems } from 'redux/contacts/selectors';
import { addContactWB } from 'redux/contacts/operationsWithBackend';
import {
  BookForm,
  AddBtn,
  Div,
  FavoriteCheckboxSecond,
  NameInput,
  SelectCategories,
} from './PhoneBookFormStyled';
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
      initialValues={{ contactName: '', phoneNumber: '', favorite: false, category: 'All' }}
      validate={validate}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        // const newContact = {
        //   contactName: values.contactName,
        //   phoneNumber: values.phoneNumber,
        //   favorite: values.favorite,
        // };

        if (
          contactsItems.some(el => {
            return el.contactName.toLowerCase().includes(values.contactName.toLowerCase());
          })
        ) {
          // formik.handleReset();
          resetForm();
          return alert(`${values.contactName} is already in list!`);
        }
        setSubmitting(false);
        dispatch(addContactWB(values));
        resetForm();
      }}
    >
      {({ handleSubmit, isSubmitting }) => (
        <BookForm onSubmit={handleSubmit}>
          <Div>
            <NameInput
              label="Contact name"
              id="contactName"
              name="contactName"
              title="Name of contact may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              placeholder="Enter the contact name"
              $marginBottom="0.5rem"
            />

            <NameInput
              label="Phone number"
              id="phoneNumber"
              name="phoneNumber"
              title="Phone number may contains \'+\' and numbers"
              placeholder="Enter the contact phone number"
              $marginBottom="0.5rem"
            />

            <FavoriteCheckboxSecond name={'favorite'}>Favorite</FavoriteCheckboxSecond>

            <SelectCategories name="category" $width="90%" $margin="0.5rem" $marginTop="0">
              <option>All</option>
              <option>Friends</option>
              <option>Family</option>
              <option>Colleagues</option>
            </SelectCategories>

            <AddBtn type="submit" disabled={isSubmitting}>
              Submit
            </AddBtn>
          </Div>
        </BookForm>
      )}
    </Formik>
  );
}

export default PhoneBookForm;
