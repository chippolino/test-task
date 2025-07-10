'use client';
import { Button } from '@/shared/ui/button/button';
import { Card } from '@/shared/ui/card/card';
import { Dialog, IDialog } from '@/shared/ui/dialog';
import { Input } from '@/shared/ui/input';
import { Radio, RadioGroup } from '@/shared/ui/radio-group';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/shared/ui/table';
import cn from 'classnames';
import Image from 'next/image';
import { CSSProperties, useRef } from 'react';
import s from './page.module.scss';

const words = [
  'Робуксы',
  'Пдарочные карты',
  'Донат робуксов (паки)',
  'Premium',
  'VIP-сервер',
  'Аккаунты',
  'Скины',
  'Prime Gaming',
  'Studio',
  'Прочее',
  'Adopt me',
  'Anime Defenders',
  'Arm Wrestle Simulator',
  'ASTD',
  'Blade ball',
  'Blox Fruits',
  'Da Hood',
  'GPO',
  'Jailbreak',
  'Jujutsu Shenanigans',
  'King Legacy',
  'MM2',
  'Pet Simulator 99',
  'Pet Simulator X',
  'Project Slayers',
  'Toilet Tower Defence',
  'Tower Defence Simulator',
  'YBA',
  'Прочие игры',
];

const secondWords = ['Все', 'Бели', 'Аккаунты', 'Предметы', 'VIP-сервер', 'Услуги', 'Гайды'];

function getRandomNumber(min = 100, max = 1200) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export default function Home() {
  const dialogRef = useRef<IDialog>(null);

  const handleOpen = () => {
    dialogRef.current?.show();
  };
  return (
    <div className={s.page}>
      <div className="container">
        <div className={s.topBlock}>
          <div className={s.topBlockLeft}>
            <h1 className={s.topBlockTitle}>Робуксы Roblox</h1>
            <p className={s.topBlockText}>
              Какой-то длинный текст, связанный с SEO-оптимизацией относительно данной категории, на которую вы сейчас
              смотрите. Какой-то длинный текст, связанный с SEO-оптимизацией относительно данной категории, на которую
              вы сейчас смотрите.
            </p>

            <div className={s.tags}>
              <RadioGroup defaultValue="1">
                {words.map((item, idx) => (
                  <Radio key={idx} value={`${idx}`}>
                    {item} <span className={s.count}>{getRandomNumber()}</span>
                  </Radio>
                ))}
              </RadioGroup>
            </div>
          </div>
          <Image src="/lego.png" width={418} height={414} alt="lego" className={s.image} />
        </div>

        <div className={s.main}>
          <div className={s.mainTop}>
            <RadioGroup defaultValue="Все">
              {secondWords.map((item, idx) => (
                <Radio key={idx} value={`${item}`}>
                  {item}
                </Radio>
              ))}
            </RadioGroup>

            {/* TODO fix me вынести в select */}
            <div
              className={s.customSelect}
              style={
                {
                  '--arrow-url': `url('/arrow-down.svg')`,
                } as CSSProperties
              }
            >
              <select defaultValue="0">
                <option value="0">Способ доставки</option>
                <option value="1">Постамат</option>
                <option value="2">Адрес</option>
              </select>
            </div>
            <Button variant="primary" className={s.btn} onClick={handleOpen}>
              Продать Blox Fruits
            </Button>

            <Dialog ref={dialogRef}>
              <h1 className={s.dialogTitle}>Жалоба на 0xHearts.com</h1>
              <p className={s.text}>Причина жалобы</p>
              <div
                className={cn(s.customSelect, s.customSelectSecond)}
                style={
                  {
                    '--arrow-url': `url('/arrow-down.svg')`,
                  } as CSSProperties
                }
              >
                <select defaultValue="0">
                  <option value="0">Выберите причину жалобы</option>
                  <option value="1">Очень веская жалоба</option>
                  <option value="2">Жалоба</option>
                </select>
              </div>
              <p className={s.text}>Опишите проблему</p>
              <textarea className={s.textarea} placeholder="Введите ваш текст" />
              <div className={s.dialogBtnWrap}>
                <Button fullWidth>Мне нужна поддержка</Button>
                <Button fullWidth variant="primary">
                  Пожаловаться
                </Button>
              </div>
            </Dialog>
          </div>

          <div className={s.mainSecond}>
            <label className={s.switchLabel}>
              <span>Только продавцы онлайн</span>
              <span className={s.switch}>
                <input type="checkbox" className={s.switchInput} onChange={() => {}} />
                <span className={s.switchSlider} />
              </span>
            </label>
            <label className={s.switchLabel}>
              <Image src="/lightning.svg" width={12} height={12} alt="lightning" />
              <span>Моментальная доставка</span>
              <span className={s.switch}>
                <input type="checkbox" className={s.switchInput} onChange={() => {}} />
                <span className={s.switchSlider} />
              </span>
            </label>

            <form className={s.formSearch}>
              <Input
                inputSize="md"
                leftSection={<Image priority src="/search.svg" width={16} height={16} alt="search icon" />}
                type="search"
                placeholder="Поиск по описанию лота..."
              />
            </form>
          </div>

          <Table>
            <TableCaption>
              <Button fullWidth>Показать больше предложений</Button>
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Описание</TableHead>
                <TableHead>Продавец</TableHead>
                <TableHead>
                  Наличие <Image src="/sort.svg" width={12} height={12} alt="#" />
                </TableHead>
                <TableHead>
                  Цена <Image src="/sort.svg" width={12} height={12} alt="#" />{' '}
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>🤑🔥🕘Аренда Вип Сервера | 24 часа🕒🔥🤑, VIP-сервер</TableCell>
                <TableCell>
                  <Card
                    image="/avatar.png"
                    rating={4.9}
                    isOnline
                    name="0xHearts.com"
                    experience="3 года"
                    countReview={4288}
                  />
                </TableCell>
                <TableCell>322</TableCell>
                <TableCell>0.64 ₽</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>❤ФРУКТ СПИРИТ, СПИРИТ, БЛОКС ФРУКТ, SPIRIT💛💢, Предметы, Трейд</TableCell>
                <TableCell>
                  <Card
                    image="/avatar.png"
                    rating={2}
                    isOnline
                    name="IgorDun4enkoff"
                    experience="1 год"
                    countReview={45}
                  />
                </TableCell>
                <TableCell>∞</TableCell>
                <TableCell>0.63 ₽</TableCell>
              </TableRow>
              <TableRow>
                <TableCell w={640}>
                  🤲Куплю и пройду рейд БУДДЫ - БУДДА РЕЙД - БУДА - место будды - Рейды буды - BUDDHA RAID - 🤲, Услуги
                </TableCell>
                <TableCell>
                  <Card image="/avatar.png" rating={5} name="Dendi" experience="2 дня" countReview={4} />
                </TableCell>
                <TableCell>4 556</TableCell>
                <TableCell>0.60 ₽</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>🍩 Рейд Теста - МЕСТО ТЕСТА - ДОУЧ</TableCell>
                <TableCell>
                  <Card image="/avatar.png" rating={1} isOnline name="qewbie" experience="5 лет" countReview={200} />
                </TableCell>
                <TableCell>15 666</TableCell>
                <TableCell>0.55 ₽</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>💛Фрукт Будда💛 Buddha Fruit</TableCell>
                <TableCell>
                  <Card image="/avatar.png" rating={3} name="qewbie" experience="5 лет" countReview={200} />
                </TableCell>
                <TableCell>104 242</TableCell>
                <TableCell>0.55 ₽</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div className={s.bottomText}>
          <p>
            Робуксы — это валюта платформы мини игр Roblox, обеспечивающая комфортный геймплей и расширенные возможности
            для игрока. Что естественно притягивает толпы желающих их приобрести. Сделать это безопасно и без переплат
            лучше всего на проверенной площадке, которой и является биржа игровых ценностей FunPay. Мы обеспечиваем
            комфортные условия для торговли робуксами Roblox без посредников, поэтому на нашей торговой площадке всегда
            присутствует:
          </p>
          <ul>
            <li>
              Безопасность сделок. Они проходят в три этапа: оплата, получение игровой валюты, подтверждение выполнения
              заказа.
            </li>
            <li>Реальный рыночный курс робуксов. Формируется в условиях естественной конкуренции между продавцами.</li>
            <li>Быстрое оформление заказов. Всего за несколько кликов, с оплатой любым удобным для вас способом.</li>
          </ul>
          <p>Если же у вас возникнут вопросы, то служба поддержки FunPay ответит на них в любое время суток!</p>
          <h4>Как купить</h4>
          <p>Покупка робуксов осуществляется просто, как мы писали выше, нужно сделать всего три действия:</p>
          <ul>
            <li>
              Выбрать предложение, кликнув на него, и находясь на странице оформления заказа, связаться с продавцом.
            </li>
            <li>Оплатить заказ на нужное количество робуксов.</li>
            <li>
              Получить игровую валюту RBX и подтвердить выполнение заказа. После можно оставить отзыв продавцу и оценить
              его работу
            </li>
          </ul>
          <h4>Продавцам</h4>
          <p>
            Если вы опытный продавец или начинаете свой путь с нуля — неважно, у вас есть замечательная возможность
            продать робуксы через FunPay. Чтобы стать продавцом нашей биржи, следуйте следующим принципам:
          </p>
          <ul>
            <li>
              Выставляйте на продажу только ту сумму, что есть у вас в наличии, чтобы вы смогли быстро передать игровую
              валюту клиенту.
            </li>
            <li>Вежливо отвечайте на вопросы потенциальных покупателей.</li>
            <li>Ответственно относитесь к своим обязанностям и выполняйте заказы в кратчайшие сроки.</li>
            <li>Покупатель должен получить столько робуксов, сколько он указал в заказе.</li>
          </ul>
          <p>
            И помните, чем больше у вас довольных клиентов, тем выше шанс превратить своё хобби в отличный источник
            дохода. Присоединяйтесь к FunPay!
          </p>
        </div>
      </div>
    </div>
  );
}
