import React from 'react';
import ReactSelect, { StylesConfig } from 'react-select';
import { FieldHookConfig, useField } from 'formik';
import { colors } from '../../../styles/abstract/colors';
import FormControl from '../FormControl/FormControl';

type MyOptionType = {
  label: string;
  value: string;
};
type IsMulti = false;

interface SelectProps {
  label?: string;
  labelStyle?: React.CSSProperties;
  placeholder?: string;
  options: { label: string; value: string }[];
  className?: string;
}

const Select: React.FC<SelectProps & FieldHookConfig<string>> = ({
  label,
  labelStyle,
  placeholder,
  options,
  className,
  ...props
}) => {
  const [field, { error, touched }, helpers] = useField(props);
  const { setValue } = helpers;
  const defaultValue = (
    options: { value: string; label: string }[],
    value: string
  ) => {
    return options ? options.find((option) => option?.value === value) : '';
  };

  const { grey, secondary } = colors;
  // styles
  const colourStyles: StylesConfig<MyOptionType, IsMulti> = {
    control: (styles) => ({
      ...styles,
      backgroundColor: secondary,
      border: `2px solid ${grey}`,
      ':hover:': {
        border: `1px solid ${grey}`,
      },
    }),
    dropdownIndicator: (styles) => ({ ...styles, color: grey }),
    indicatorSeparator: (styles) => ({ display: 'none' }),
    menu: (styles) => ({ ...styles, backgroundColor: secondary }),
    option: (styles, { isSelected }) => ({
      ...styles,
      backgroundColor: isSelected && grey,
      color: isSelected && secondary,
      ':active': {
        backgroundColor: grey,
        color: secondary,
      },
      ':hover': {
        backgroundColor: grey,
        color: secondary,
      },
    }),
    input: (styles) => ({ ...styles }),
    placeholder: (styles) => ({ ...styles }),
    singleValue: (styles, { data }) => ({ ...styles }),
  };

  return (
    <FormControl
      className={className}
      error={error}
      touched={touched}
      label={label}
      labelStyle={labelStyle}
      field={field}
    >
      <ReactSelect
        {...field}
        id={field.name}
        placeholder={placeholder}
        {...props}
        styles={colourStyles}
        onChange={(value) => {
          if (value === null) {
            setValue('');
            return;
          }
          setValue(value?.value);
        }}
        value={defaultValue(options, field.value)}
        options={options}
      ></ReactSelect>
    </FormControl>
  );
};

export default Select;
