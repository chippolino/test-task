import cn from 'classnames';
import { forwardRef, InputHTMLAttributes, ReactNode } from 'react';
import s from './input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  rightSection?: ReactNode;
  leftSection?: ReactNode;
  inputSize?: 'sm' | 'md';
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, rightSection, leftSection, inputSize = 'sm', ...props }, ref) => {
    return (
      <label className={cn(s.label, s[inputSize])}>
        {rightSection}
        <input ref={ref} {...props} className={cn(s.input, className)} type={type} />
        {leftSection}
      </label>
    );
  },
);

Input.displayName = 'Input';
