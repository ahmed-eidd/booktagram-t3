import React, { forwardRef } from 'react';
import DatePicker, { ReactDatePickerProps } from 'react-datepicker';
import classes from './Calendar.module.scss';
import 'react-datepicker/dist/react-datepicker.css';
import FormControl from '../FormControl/FormControl';
import { FieldHookConfig, useField, useFormikContext } from 'formik';

interface FormCalendarProps {
  className?: string;
  label?: string;
  labelStyle?: React.CSSProperties;
  style?: React.CSSProperties;
  minDate: Date;
}
interface customInputProps {
  children?: React.ReactNode;
  value?: string;
  onClick?: () => void;
}
export type Ref = HTMLButtonElement;

const FormCalendar: React.FC<
  FormCalendarProps & FieldHookConfig<string> & ReactDatePickerProps
> = ({ className, label, labelStyle, style, minDate, ...props }) => {
  // const [date, setDate] = useState(new Date());

  // eslint-disable-next-line react/display-name
  const CustomInput = forwardRef<Ref, customInputProps>(
    ({ value, onClick }, ref) => (
      <button
        type='button'
        className={classes.Calendar__Input}
        onClick={onClick}
        ref={ref}
      >
        {value}
      </button>
    )
  );
  const [field, { error, touched }] = useField(props);
  const { setFieldValue } = useFormikContext();
  return (
    <FormControl
      className={className}
      error={error}
      touched={touched}
      label={label}
      labelStyle={labelStyle}
      field={field}
      style={style}
    >
      <div className={classes.Calendar}>
        <DatePicker
          {...field}
          customInput={<CustomInput />}
          selected={(field.value && new Date(field.value)) || null}
          onChange={(val: Date) => {
            setFieldValue(field.name, val);
          }}
          dateFormat='dd/MM/yyyy'
          wrapperClassName={classes.CalendarWrapper}
          minDate={minDate}
        />
        <div className={classes.Calendar__Icon}>
          <i className='far fa-calendar-alt'></i>
        </div>
      </div>
    </FormControl>
  );
};

export default FormCalendar;
