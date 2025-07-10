import { ReactNode } from 'react';
import { Footer } from './footer/footer';
import { Header } from './header/header';
import s from './main-layout.module.scss';

export const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={s.layout}>
      <Header />
      <main className={s.content}>{children}</main>
      <Footer />
    </div>
  );
};
