import { useFormik } from 'formik';
import { motion } from 'framer-motion';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectContactsList } from 'redux/selectors';
// import { addContact } from 'redux/operations';
import { useAddContactRTKQueryMutation, useGetContactsQuery } from 'redux/contactsQuery';
import { BookForm, NameInput, AddBtn, Label, Div, TelInput, ErrorDiv } from './PhoneBookFormStyled';

function PhoneBookForm() {
  // const { items: contactsItems } = useSelector(selectContactsList);
  // const dispatch = useDispatch();

  const [addContactRTKQuery] = useAddContactRTKQueryMutation();
  const { data: contactsItemsRTKQuery } = useGetContactsQuery();

  const validate = values => {
    const errors = {};
    if (!values.nameContact) {
      errors.nameContact = 'Required';
    } else if (
      !/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/i.test(values.nameContact)
    ) {
      errors.nameContact = 'Invalid name';
    }

    if (!values.numberContact) {
      errors.numberContact = 'Required';
    } else if (
      !/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/i.test(
        values.numberContact
      )
    ) {
      errors.numberContact = 'Invalid number';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: { nameContact: '', numberContact: '' },
    validate,
    onSubmit: values => {
      const newContact = {
        nameContact: values.nameContact,
        numberContact: values.numberContact,
      };

      if (
        contactsItemsRTKQuery.some(el => {
          return el.nameContact.toLowerCase().includes(newContact.nameContact.toLowerCase());
        })
      ) {
        values.nameContact = '';
        values.numberContact = '';
        return alert(`${newContact.nameContact} is already in list!`);
      }

      addContactRTKQuery(newContact);
      values.nameContact = '';
      values.numberContact = '';
    },
  });

  return (
    <BookForm onSubmit={formik.handleSubmit}>
      <Div>
        <Label htmlFor="nameContact">Name</Label>
        <NameInput
          id="nameContact"
          name="nameContact"
          type="text"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.nameContact}
        />
        {formik.touched.nameContact && formik.errors.nameContact ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <ErrorDiv>{formik.errors.nameContact}</ErrorDiv>
          </motion.div>
        ) : null}

        <Label htmlFor="numberContact">Number</Label>
        <TelInput
          id="numberContact"
          name="numberContact"
          type="tel"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.numberContact}
        />
        {formik.touched.numberContact && formik.errors.numberContact ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <ErrorDiv>{formik.errors.numberContact}</ErrorDiv>
          </motion.div>
        ) : null}

        <AddBtn type="submit">Submit</AddBtn>
      </Div>
    </BookForm>
  );
}

export default PhoneBookForm;
