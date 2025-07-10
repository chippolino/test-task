import Image from 'next/image';
import Link from 'next/link';
import s from './footer.module.scss';

export const Footer = () => {
  return (
    <div className={s.footer}>
      <div className="container">
        <div className={s.flex}>
          <div className={s.info}>
            <Link href="/" className={s.logo}>
              <Image priority src="./logo.svg" width={118} height={24} alt="STARVEL" />
            </Link>

            <p className={s.copyright}>© 2024 STARVELL, лучший маркетплейс цифровых товаров и услуг</p>
            <p className={s.creator}>Дизайн сделан в 0xHearts.com</p>
          </div>

          <div className={s.support}>
            <h4 className={s.supportTitle}>Поддержка</h4>
            <div className={s.supportLinks}>
              <Link href="/" className={s.link}>
                Написать в поддержку
              </Link>
              <Link href="/" className={s.link}>
                Политика конфиденциальности
              </Link>
              <Link href="/" className={s.link}>
                Пользовательское соглашение
              </Link>
            </div>
          </div>

          <div className={s.social}>
            <Link href="https://google.com/" className={s.socialLink} target="_blank">
              <Image priority src="./social/tg.svg" width={44} height={44} alt="tg" />
            </Link>
            <Link href="https://google.com/" className={s.socialLink}>
              <Image priority src="./social/discord.svg" width={44} height={44} alt="discord" />
            </Link>
            <Link href="https://google.com/" className={s.socialLink}>
              <Image priority src="./social/vk.svg" width={44} height={44} alt="vk" />
            </Link>
            <Link href="https://google.com/" className={s.socialLink}>
              <Image priority src="./social/youtube.svg" width={44} height={44} alt="youtube" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
