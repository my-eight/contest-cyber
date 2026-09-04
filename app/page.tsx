'use client';

import { useEffect, useState } from 'react';

const winnerName = 'Имя победителя';
const subscriptions = ['Instagram', 'YouTube', 'TikTok', 'VK', 'Telegram', 'MAX'];
const bootLines = [
  'INIT // ILLIDIANCE CORE',
  'VERIFYING CONTEST PROTOCOL',
  'SYNCING NETWORK IDENTITIES',
  'WINNER SIGNATURE FOUND',
];

export default function Home() {
  const [booting, setBooting] = useState(true);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const timer = window.setTimeout(() => setBooting(false), reducedMotion ? 450 : 4600);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      {booting && (
        <div className="boot" role="status" aria-live="polite" aria-label="Загрузка системы">
          <div className="boot__frame">
            <div className="boot__brand">ILLIDIANCE // CONTEST.OS</div>
            <div className="boot__glyph" aria-hidden="true">I</div>
            <div className="boot__log">
              {bootLines.map((line, index) => (
                <span key={line} style={{ '--line': index } as React.CSSProperties}>{line}</span>
              ))}
            </div>
            <div className="boot__progress"><span /></div>
            <div className="boot__meta"><span>SYS.26</span><span>LOADING</span></div>
          </div>
        </div>
      )}

      <main className="shell">
        <header className="topbar">
          <a className="wordmark" href="#winner">ILLIDIANCE</a>
          <span className="system-status"><i /> SYSTEM ONLINE</span>
          <span className="protocol">PROTOCOL_06</span>
        </header>

        <section className="winner" id="winner" aria-labelledby="winner-title">
          <div className="signal-rail" aria-hidden="true">
            <span className="signal-horn signal-horn--left" />
            <span className="signal-pulse">///</span>
            <span className="signal-horn signal-horn--right" />
          </div>

          <div className="winner__frame">
            <span className="edge edge--tl" aria-hidden="true" />
            <span className="edge edge--tr" aria-hidden="true" />
            <span className="edge edge--bl" aria-hidden="true" />
            <span className="edge edge--br" aria-hidden="true" />
            <div className="winner__index">ID // 001</div>
            <p className="kicker">WINNER IDENTIFIED</p>
            <h1 id="winner-title">Победитель<br />определён</h1>
            <div className="winner__name">
              <span>{winnerName}</span>
              <small>IDENTITY CONFIRMED</small>
            </div>
          </div>

          <div className="winner__actions">
            <p>Финальный шаг: подтвердите подписки по условиям конкурса.</p>
            <a href="https://vk.ru/wall-2313446_22473" target="_blank" rel="noreferrer">
              КОНКУРСНЫЙ ПОСТ <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section className="verification" aria-labelledby="verification-title">
          <div className="section-head">
            <div>
              <span className="section-code">02 // ACCESS CHECK</span>
              <h2 id="verification-title">Подтвердите<br />доступ</h2>
            </div>
            <span className="hex" aria-hidden="true">06</span>
          </div>

          <p className="verification__copy">
            Убедитесь, что подписка активна на каждой площадке. Затем отправьте подтверждение организатору ответным сообщением.
          </p>

          <ul className="networks" aria-label="Обязательные подписки">
            {subscriptions.map((subscription, index) => (
              <li key={subscription}>
                <span className="network-id">0{index + 1}</span>
                <span className="network-name">{subscription}</span>
                <span className="network-state">REQUIRED</span>
                <span className="network-mark" aria-hidden="true">+</span>
              </li>
            ))}
          </ul>

          <div className="next-step">
            <span className="next-step__code">NEXT_ACTION</span>
            <p>Пришлите подтверждение подписок. После проверки мы расскажем, как получить приз.</p>
          </div>

          <p className="safety">SECURITY NOTE // Мы не запрашиваем пароли, SMS-коды или данные банковской карты.</p>
        </section>

        <footer><span>ILLIDIANCE © 2026</span><span>CONTEST PROTOCOL</span></footer>
      </main>
    </>
  );
}
