import cn from 'classnames';
import Image from 'next/image';
import { Rating } from '../rating/rating';
import s from './card.module.scss';

type CardProps = {
  image: string;
  isOnline?: boolean;
  rating: number;
  name: string;
  countReview: number;
  experience: string;
};

export const Card = ({ image, isOnline, rating, name, experience, countReview }: CardProps) => {
  return (
    <div className={s.root}>
      <div className={s.imageWrap}>
        <Image src={image} alt="#" width={28} height={28} className={s.image} />
        <span className={cn(s.imageStatus, { [s.online]: isOnline })} />
      </div>
      <div className={s.left}>
        <div className={s.titleWrap}>
          <span className={cn(s.title, { [s.titleOnline]: isOnline })}>{name}</span>
          <Rating rating={rating} />
        </div>
        <div className={s.text}>
          {experience} на сайте, {countReview} отзывов
        </div>
      </div>
    </div>
  );
};
