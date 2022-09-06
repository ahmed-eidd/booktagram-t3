import React from 'react';
import Select from 'react-select';
import { colors } from '../../../styles/abstract/colors';
// import { changeLocaleAction } from '../../../store/locale/action';
import { useRouter } from 'next/router';

const NavLang = () => {
  // const dispatch = useDispatch();

  const { locale: currentLocale } = useRouter();
  const currentOption = {
    value: currentLocale,
    label: currentLocale,
  };

  const onChangeLocaleHandler = (newLocale) => {
    if (currentLocale === newLocale) {
      return;
    }

    dispatch(changeLocaleAction(newLocale));
  };

  const { grey, secondary } = colors;
  const colourStyles = {
    container: (styles) => ({
      ...styles,
      width: '50px',
      margin: '0 10px ',
      ':focus:': {
        outline: 'none',
      },
    }),

    control: (styles, { isFocused }) => ({
      ...styles,
      backgroundColor: secondary,
      border: `none`,
      boxShadow: 'none',
      width: '50px',
      ':hover:': {
        ...styles[':hover:'],
        border: `none`,
      },
      ':focus': {
        outline: 'none',
      },
    }),
    dropdownIndicator: (styles) => ({ ...styles, color: grey }),
    indicatorSeparator: (styles) => ({ display: 'none' }),
    menu: (styles) => ({
      ...styles,
      backgroundColor: secondary,
      width: '50px',
    }),

    option: (styles, { data, isDisabled, isFocused, isSelected }) => ({
      ...styles,
      backgroundColor: isSelected && grey,
      color: isSelected && secondary,
      ':active': {
        ...styles[':active'],
        backgroundColor: grey,
        color: secondary,
      },
      ':hover': {
        ...styles[':active'],
        backgroundColor: grey,
        color: secondary,
      },
    }),
    input: (styles) => ({ ...styles }),
    placeholder: (styles) => ({ ...styles }),
    singleValue: (styles, { data }) => ({
      ...styles,
      fontWeight: 'bold',
    }),
  };
  return (
    <Select
      styles={colourStyles}
      isSearchable={false}
      onChange={(val) => onChangeLocaleHandler(val.value)}
      components={{
        DropdownIndicator: () => null,
        IndicatorSeparator: () => null,
      }}
      width='30px'
      defaultValue={currentOption}
      options={[
        { label: 'EN', value: 'EN' },
        { label: 'AR', value: 'AR' },
      ]}
    />
  );
};

export default NavLang;
