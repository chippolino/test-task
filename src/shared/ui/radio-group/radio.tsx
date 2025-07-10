'use client';
import { ChangeEvent, ComponentProps, forwardRef, ReactNode, useState } from 'react';
import { RadioContext } from './radio-context';
import { useRadioContext } from './radio-use-context';
import s from './radio.module.scss';

type RadioGroupProps = {
  children: ReactNode;
  defaultValue: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

type RadioProps = ComponentProps<'input'> & {
  onChange?: (checked: boolean) => void;
};

export const RadioGroup = ({ children, defaultValue }: RadioGroupProps) => {
  const [_value, setValue] = useState<string | null>(() => defaultValue);

  const isRadioSelected = (val: string) => (Array.isArray(_value) ? _value.includes(val) : val === _value);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const val = event.currentTarget.value;
    setValue(val);
  };
  return (
    <RadioContext.Provider value={{ isRadioSelected, onChange: handleChange }}>
      <div className={s.radioGroup}>{children}</div>
    </RadioContext.Provider>
  );
};

export const Radio = forwardRef<HTMLInputElement, RadioProps>(({ children, value, onChange, ...props }, ref) => {
  const context = useRadioContext();

  const contextProps = context
    ? {
        checked: context.isRadioSelected(value as string),
        onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
          context.onChange(event);
          onChange?.(event.currentTarget.checked);
        },
      }
    : {};
  return (
    <label className={s.label}>
      {children}
      <input type="radio" ref={ref} value={value} className={s.input} {...props} {...contextProps} />
    </label>
  );
});

Radio.displayName = 'Radio';
