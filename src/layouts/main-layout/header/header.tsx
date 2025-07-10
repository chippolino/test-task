import { Button } from '@/shared/ui/button/button';
import { Input } from '@/shared/ui/input';
import Image from 'next/image';
import Link from 'next/link';
import { CSSProperties } from 'react';
import s from './header.module.scss';

export const Header = () => {
  return (
    <div className={s.root}>
      <div className="container">
        <div className={s.flex}>
          <Link href="/" className={s.logo}>
            <Image priority src="/logo.svg" width={118} height={24} alt="STARVEL" />
          </Link>

          <form className={s.formSearch}>
            <Input
              rightSection={<Image priority src="/search.svg" width={16} height={16} alt="search icon" />}
              type="search"
              placeholder="Поиск игр и приложений..."
            />
          </form>

          <div className={s.settings}>
            <Link href="/" className={s.supportLink}>
              Поддержка <Image priority src="/arrow-down.svg" width={16} height={16} alt="search icon" />
            </Link>
            <div
              className={s.customSelect}
              style={
                {
                  '--logo-url': `url('/arrow-down.svg')`,
                } as CSSProperties
              }
            >
              <select defaultValue="rus">
                <option value="rus">Русский</option>
                <option value="eng">Англи</option>
              </select>
            </div>
            <div
              className={s.customSelect}
              style={
                {
                  '--logo-url': `url('/arrow-down.svg')`,
                } as CSSProperties
              }
            >
              <select defaultValue="rub">
                <option value="rub">RUB</option>
                <option value="eur">EUR</option>
                <option value="usd">USD</option>
              </select>
            </div>
          </div>

          <div className={s.auth}>
            <Button>Вход</Button>
            <Button variant="primary">Регистрация</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
