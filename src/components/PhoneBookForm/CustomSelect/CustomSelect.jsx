import { useState } from 'react';
import { SelectMenu, SelectMenuItem, SelectWrapper } from './CustomSelectStyled';
import { useField } from 'formik';

function CustomSelect(props) {
  const [_, meta, helpers] = useField(props.name);
  const { value } = meta;
  const { setValue } = helpers;

  const [selectedValue, setSelectedValue] = useState(value);
  const [displayUl, setDisplayUl] = useState('none');

  const handleClickOnCategory = async ({ item }) => {
    await setValue(item, false);
    setSelectedValue(item);
    setDisplayUl('none');
  };

  const selectOptions = ['All', 'Friends', 'Family', 'Colleagues'];
  return (
    <SelectWrapper
      onClick={() => setDisplayUl(displayUl === 'none' ? 'block' : 'none')}
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
