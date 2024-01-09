import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { selectItems } from 'redux/contacts/selectors';
import { updateContact } from 'redux/contacts/operationsWithBackend';
import { motion } from 'framer-motion';
import { EditContactForm, EditInput, CloseBtn, EditSubBtn } from './EditContactStyled';
import { ErrorDiv } from 'components/PhoneBookForm/PhoneBookFormStyled';

const EditContact = ({ handleChangeEditOpen, contactId }) => {
  const contactsItems = useSelector(selectItems);
  const dispatch = useDispatch();
  const existingContact = contactsItems.find(el => el._id === contactId);

  const validate = values => {
    const errors = {};
    // if (!values.name) {
    //   errors.name = 'Required';
    // } else
    if (!/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/i.test(values.contactName)) {
      errors.contactName = 'Invalid name';
    }

    // if (!values.number) {
    //   errors.number = 'Required';
    // } else
    if (
      !/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/i.test(
        values.phoneNumber
      )
    )
      // {
      //   errors.phoneNumber = 'Invalid number';
      // }

      return errors;
  };

  const editFormik = useFormik({
    initialValues: {
      contactName: existingContact.contactName,
      phoneNumber: existingContact.phoneNumber,
    },
    validate,
    onSubmit: values => {
      const updContact = {
        id: contactId,
        contactName: values.contactName,
        phoneNumber: values.phoneNumber,
      };

      if (
        contactsItems.some(el => {
          return (
            el.contactName.toLowerCase() === updContact.contactName.toLowerCase() &&
            el.phoneNumber === updContact.phoneNumber
          );
        })
      ) {
        editFormik.handleReset();
        return alert(`${updContact.contactName} is already in list!`);
      }

      dispatch(updateContact(updContact));
      editFormik.handleReset();
      handleChangeEditOpen();
    },
  });

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: 'absolute',
          left: '0',
          top: '-90%',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          borderRadius: '8px',
          // background: 'rgb(46, 191, 145)',
          background: 'linear-gradient(310deg, rgb(46, 191, 145), rgb(131, 96, 195))',
        }}
      >
        <EditContactForm onSubmit={editFormik.handleSubmit}>
          <EditInput
            id="contactName"
            name="contactName"
            type="text"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={editFormik.handleChange}
            onBlur={editFormik.handleBlur}
            value={editFormik.values.contactName}
            $formadd="300px"
            placeholder="Enter new name"
          />
          <EditInput
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
            title="Phone number may contains \'+\' and numbers"
            onChange={editFormik.handleChange}
            onBlur={editFormik.handleBlur}
            value={editFormik.values.phoneNumber}
            $formadd="300px"
            placeholder="Enter new number"
          />
          {editFormik.touched.phoneNumber && editFormik.errors.phoneNumber ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <ErrorDiv>{editFormik.errors.phoneNumber}</ErrorDiv>
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
