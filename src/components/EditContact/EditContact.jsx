// import { motion } from 'framer-motion';
import { ListBtn } from 'components/PhoneBookForm/PhoneBookFormStyled';
import { EditContactForm, EditInput } from './EditContactStyled';

const EditContact = () => {
  const handleSubmit = evt => {
    evt.preventDefault();
  };
  return (
    <>
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{ postition: 'absolute' }}
      > */}
      <EditContactForm onSubmit={handleSubmit}>
        <EditInput type="text" name="number" $margin={'0'} />
        <ListBtn $padding={'5px'}>Change</ListBtn>
      </EditContactForm>
      {/* </motion.div> */}
    </>
  );
};

export default EditContact;
