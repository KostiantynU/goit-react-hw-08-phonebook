import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { selectItems } from 'redux/contacts/selectors';
import { motion } from 'framer-motion';
import { EditContactForm, EditInput, CloseBtn, EditSubBtn } from './EditContactStyled';
import { ErrorDiv } from 'components/PhoneBookForm/PhoneBookFormStyled';

const EditContact = ({ handleChangeEditOpen }) => {
  const contactsItems = useSelector(selectItems);
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

  const editFormik = useFormik({
    initialValues: { name: '', number: '' },
    validate,
    onSubmit: values => {
      const updContact = {
        name: values.name,
        number: values.number,
      };

      if (
        contactsItems.some(el => {
          return el.name.toLowerCase().includes(updContact.name.toLowerCase());
        })
      ) {
        editFormik.handleReset();
        return alert(`${updContact.name} is already in list!`);
      }

      // dispatch(addContactWB(updContact));
      editFormik.handleReset();
    },
  });

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{ position: 'absolute', left: '0', top: '-85%', width: '100%' }}
      >
        <EditContactForm onSubmit={editFormik.handleSubmit}>
          <EditInput
            id="name"
            name="name"
            type="text"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={editFormik.handleChange}
            onBlur={editFormik.handleBlur}
            value={editFormik.values.name}
            $formadd="300px"
            placeholder="Enter new name"
          />
          <EditInput
            id="number"
            name="number"
            type="tel"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={editFormik.handleChange}
            onBlur={editFormik.handleBlur}
            value={editFormik.values.number}
            $formadd="300px"
            placeholder="Enter new number"
          />
          {editFormik.touched.number && editFormik.errors.number ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <ErrorDiv>{editFormik.errors.number}</ErrorDiv>
            </motion.div>
          ) : null}
          <EditSubBtn $padding={'5px'} type="submit">
            Change
          </EditSubBtn>
          <CloseBtn type="button" onClick={handleChangeEditOpen}>
            X
          </CloseBtn>
        </EditContactForm>
      </motion.div>
    </>
  );
};

export default EditContact;
