import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://illidiance-contest-winner.bright-iris-3133.chatgpt.site'),
  title: 'Поздравляем с победой! — Illidiance',
  description: 'Персональная страница победителя конкурса Illidiance и финальная проверка условий.',
  openGraph: {
    title: 'Поздравляем с победой! — Illidiance',
    description: 'Ваше имя выбрано. Подтвердите условия конкурса, чтобы получить приз.',
    type: 'website',
    images: [{ url: '/og.png', width: 1731, height: 909, alt: 'Вы — победитель! Остался один шаг.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Поздравляем с победой! — Illidiance',
    description: 'Ваше имя выбрано. Остался один шаг до получения приза.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
