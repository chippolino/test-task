import localFont from 'next/font/local';

export const Inter = localFont({
  src: [
    {
      path: './Inter-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Inter-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './Inter-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  fallback: ['system-ui', 'Arial', 'Helvetica', 'sans-serif'],
  preload: true,
});
