import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { selectContactsList } from 'redux/contacts/selectors';
import { addContactWB } from 'redux/contacts/operationsWithBackend';
import { BookForm, NameInput, AddBtn, Label, Div, TelInput, ErrorDiv } from './PhoneBookFormStyled';

function PhoneBookForm() {
  const { items: contactsItems } = useSelector(selectContactsList);
  const dispatch = useDispatch();

  const validate = values => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Required';
    } else if (!/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/i.test(values.name)) {
      errors.name = 'Invalid name';
    }

    if (!values.number) {
      errors.number = 'Required';
    } else if (
      !/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/i.test(
        values.number
      )
    ) {
      errors.number = 'Invalid number';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: { name: '', number: '' },
    validate,
    onSubmit: values => {
      const newContact = {
        name: values.name,
        number: values.number,
      };

      if (
        contactsItems.some(el => {
          return el.name.toLowerCase().includes(newContact.name.toLowerCase());
        })
      ) {
        formik.handleReset();
        return alert(`${newContact.name} is already in list!`);
      }

      dispatch(addContactWB(newContact));
      formik.handleReset();
    },
  });

  return (
    <BookForm onSubmit={formik.handleSubmit}>
      <Div>
        <Label htmlFor="name">Name</Label>
        <NameInput
          id="name"
          name="name"
          type="text"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          formadd="300px"
        />
        {formik.touched.name && formik.errors.name ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <ErrorDiv>{formik.errors.name}</ErrorDiv>
          </motion.div>
        ) : null}

        <Label htmlFor="number">Number</Label>
        <TelInput
          id="number"
          name="number"
          type="tel"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.number}
          formadd="300px"
        />
        {formik.touched.number && formik.errors.number ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <ErrorDiv>{formik.errors.number}</ErrorDiv>
          </motion.div>
        ) : null}

        <AddBtn type="submit">Submit</AddBtn>
      </Div>
    </BookForm>
  );
}

export default PhoneBookForm;
