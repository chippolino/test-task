import cn from 'classnames';
import type { ButtonHTMLAttributes, PropsWithChildren, Ref } from 'react';
import { forwardRef } from 'react';
import styles from './button.module.scss';

type ButtonVariant = 'text' | 'info' | 'primary' | 'success';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  PropsWithChildren<{
    variant?: ButtonVariant;
    fullWidth?: boolean;
    as?: React.ElementType;
    href?: string;
    target?: string;
  }>;

export const Button = forwardRef((props: ButtonProps, ref?: Ref<HTMLButtonElement>) => {
  const { children, variant = 'default', fullWidth = false, className, as: Component = 'button', ...rest } = props;

  return (
    <Component
      className={cn(
        styles.button,
        styles[variant],
        {
          [styles.fullWidth]: fullWidth,
        },
        className,
      )}
      ref={ref}
      {...rest}
    >
      {children}
    </Component>
  );
});

Button.displayName = 'Button';
