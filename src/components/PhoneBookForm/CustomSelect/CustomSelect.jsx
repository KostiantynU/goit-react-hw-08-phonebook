import { useState } from 'react';
import { SelectMenu, SelectMenuItem, SelectWrapper } from './CustomSelectStyled';
import { useField } from 'formik';

function CustomSelect(props) {
  const [_, meta, helpers] = useField(props.name);
  const { value } = meta;
  const { setValue } = helpers;

  const [selectedValue, setSelectedValue] = useState(value);
  const [displayUl, setDisplayUl] = useState('none');

  const handleClickOnSelect = () => {
    console.log('handleClickOnSelect');
    setDisplayUl(!displayUl);
  };

  // const removeCustomListener = element => {
  //   console.log('Removing event listener');
  //   element.removeEventListener('click', addEventListenerForBody);
  // };

  const customEventListener = ({ event, bodyElement }) => {
    console.log('event', event);
    if (event.target.getAttribute('data-set-select') !== 'Select option') {
      console.log('Not select option');
      setDisplayUl('none');
      // return bodyElement.removeEventListener('click', removeCustomListener);
    }
  };

  // const addEventListenerForBody = ({ event, dataSetOfLi }) => {
  //   const bodyElement = document.querySelector('body');
  //   bodyElement.addEventListener('click', () => {});
  //   console.log('event', event.target);
  // if (event.target.getAttribute('data-set-select') !== dataSetOfLi) {
  //   console.log('Not select option');
  //   setDisplayUl('none');
  //   return bodyElement.removeEventListener('click', removeCustomListener);
  // }
  // };

  const handleClickOnCategory = async ({ event, item }) => {
    const dataSetOfLi = event.target.getAttribute('data-set-select');
    // console.log('dataSetOfLi', dataSetOfLi);
    // addEventListenerForBody({ event, dataSetOfLi });

    await setValue(item, false);
    setSelectedValue(item);
    // removeCustomListener(bodyElement);
    setDisplayUl('none');
  };

  const selectOptions = ['All', 'Friends', 'Family', 'Colleagues'];
  return (
    <SelectWrapper
      onClick={event => {
        setDisplayUl(displayUl === 'none' ? 'block' : 'none');
        const bodyElement = document.querySelector('body');
        bodyElement.addEventListener('click', customEventListener({ event, bodyElement }));
      }}
      $margin={props.$margin}
      $width={props.$width}
      $marginTop={props.$marginTop}
    >
      {selectedValue}
      <SelectMenu $display={displayUl} $width="100%">
        {selectOptions.map(item => (
          <SelectMenuItem
            key={item}
            onClick={event => handleClickOnCategory({ event, item })}
            data-set-select="Select option"
          >
            {item}
          </SelectMenuItem>
        ))}
      </SelectMenu>
    </SelectWrapper>
  );
}

export default CustomSelect;
