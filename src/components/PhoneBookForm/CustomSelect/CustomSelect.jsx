import { useState } from 'react';
import {
  LabelForCustomSelect,
  SelectMenu,
  SelectMenuItem,
  SelectWrapper,
} from './CustomSelectStyled';
import { useField } from 'formik';

function CustomSelect(props) {
  const [, meta, helpers] = useField(props.name);
  const { value } = meta;
  const { setValue } = helpers;
  const [displayUl, setDisplayUl] = useState('none');

  const handleClickOnCategory = async ({ item }) => {
    await setValue(item, false);

    setDisplayUl('none');
  };

  return (
    <>
      <LabelForCustomSelect>Choose category:</LabelForCustomSelect>
      <SelectWrapper
        onClick={() => setDisplayUl(displayUl === 'none' ? 'block' : 'none')}
        $margin={props.$margin}
        $width={props.$width}
        $marginTop={props.$marginTop}
        data-set-select-wrapper="Wrapper"
      >
        {/* {selectedValue ? selectedValue : 'Oh no, its undefined'} */}
        {value ? value : 'Oh no it is undefined!'}
        <SelectMenu $display={displayUl} $width="100%">
          {props.selectOptions.map(item => (
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
    </>
  );
}

export default CustomSelect;
