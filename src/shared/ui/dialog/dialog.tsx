import Image from 'next/image';
import type { PropsWithChildren, ReactNode } from 'react';
import { forwardRef, useImperativeHandle, useRef } from 'react';
import s from './dialog.module.scss';

export interface IDialog {
  get isOpen(): boolean;
  show(): void;
  hide(): void;
}

export type DialogProps = PropsWithChildren<{
  label?: string;
  footer?: ReactNode;
}>;

export const Dialog = forwardRef<IDialog, DialogProps>(function Dialog({ label, footer, children }, ref) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => {
    return {
      get isOpen() {
        return dialogRef?.current?.open;
      },
      show() {
        dialogRef?.current?.showModal();
      },
      hide() {
        dialogRef?.current?.close();
      },
    } as IDialog;
  }, []);

  const handleCloseButtonClick = () => {
    dialogRef?.current?.close();
  };

  return (
    <dialog ref={dialogRef} className={s.dialog}>
      <div className={s.dialogContainer}>
        <article className={s.dialogArticle}>
          {label && (
            <header className={s.dialogHeader}>
              <h2 className="text-lg font-semibold">{label}</h2>
            </header>
          )}
          <div className={s.dialogContent}>{children}</div>
          {footer && <footer className={s.dialogFooter}>{footer}</footer>}
        </article>
        <div className={s.closeButtonWrapper}>
          <button onClick={handleCloseButtonClick} className={s.closeButton}>
            <Image src="/close.svg" width={24} height={24} alt="close" />
          </button>
        </div>
      </div>
    </dialog>
  );
});
