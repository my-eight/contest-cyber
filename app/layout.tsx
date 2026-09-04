import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://illidiance-contest-winner.bright-iris-3133.chatgpt.site'),
  title: 'Победитель определён — Illidiance',
  description: 'Персональная страница победителя конкурса Illidiance и финальная проверка условий.',
  openGraph: {
    title: 'Победитель определён — Illidiance',
    description: 'Финальная верификация условий конкурса Illidiance.',
    type: 'website',
    images: [{ url: '/og.png', width: 1730, height: 909, alt: 'Победитель определён. Финальная верификация.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Победитель определён — Illidiance',
    description: 'Финальная верификация условий конкурса Illidiance.',
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
