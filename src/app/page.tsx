import { Button } from '@/shared/ui/button/button';
import cn from 'classnames';
import Image from 'next/image';
import twitterIcon from '../../public/logo.svg';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={cn(styles.page, 'container')}>
      <button disabled>123</button>
      <Image priority src={twitterIcon} alt="Follow us on Twitter" />
      <Button>Вход</Button>
      <Button variant="primary">Регистрация</Button>
      <p style={{ fontSize: '16px', lineHeight: '24px', color: '#6E7076' }}>
        Какой-то длинный текст, связанный с SEO-оптимизацией относительно данной категории, на которую вы сейчас
        смотрите. Какой-то длинный текст, связанный с SEO-оптимизацией относительно данной категории, на которую вы
        сейчас смотрите.
      </p>
    </div>
  );
}
