const winnerName = 'Имя победителя';

const subscriptions = ['Instagram', 'YouTube', 'TikTok', 'ВКонтакте', 'Telegram', 'MAX'];

export default function Home() {
  return (
    <main>
      <section className="hero" aria-labelledby="winner-title">
        <div className="masthead">
          <span className="brand">ILLIDIANCE</span>
          <span className="edition">CONTEST · 2026</span>
        </div>

        <div className="winner-card">
          <span className="corner corner--top-left" aria-hidden="true" />
          <span className="corner corner--top-right" aria-hidden="true" />
          <span className="corner corner--bottom-left" aria-hidden="true" />
          <span className="corner corner--bottom-right" aria-hidden="true" />

          <div className="fanfare" aria-hidden="true">
            <span className="fanfare__horn fanfare__horn--left">♪</span>
            <span className="fanfare__burst">✦</span>
            <span className="fanfare__horn fanfare__horn--right">♫</span>
          </div>

          <p className="eyebrow">ПОЗДРАВЛЯЕМ</p>
          <h1 id="winner-title">Вы — победитель!</h1>
          <p className="winner-name">{winnerName}</p>
          <p className="lead">
            Ваше имя выбрано в нашем конкурсе. Остался один важный шаг —
            подтвердить выполнение условий.
          </p>
        </div>

        <a className="post-link" href="https://vk.ru/wall-2313446_22473" target="_blank" rel="noreferrer">
          Открыть конкурсный пост <span aria-hidden="true">↗</span>
        </a>
      </section>

      <section className="confirmation" aria-labelledby="confirmation-title">
        <p className="section-number">01 / ФИНАЛЬНАЯ ПРОВЕРКА</p>
        <h2 id="confirmation-title">Подтвердите подписки</h2>
        <p className="section-copy">
          Чтобы мы могли подтвердить победу, пожалуйста, убедитесь, что вы
          подписаны на все площадки из условий конкурса.
        </p>

        <ul className="subscription-list" aria-label="Список обязательных подписок">
          {subscriptions.map((subscription, index) => (
            <li key={subscription}>
              <span className="check" aria-hidden="true">✓</span>
              <span>{subscription}</span>
              <span className="list-number">0{index + 1}</span>
            </li>
          ))}
        </ul>

        <div className="instructions">
          <p className="instructions__label">ЧТО ДЕЛАТЬ ДАЛЬШЕ</p>
          <p>
            Пришлите организатору подтверждение подписок ответным сообщением.
            После проверки мы свяжемся с вами и расскажем, как получить приз.
          </p>
        </div>

        <p className="safety-note">
          Мы не запрашиваем пароли, коды из SMS или данные банковской карты.
        </p>
      </section>

      <footer>
        <span>ILLIDIANCE</span>
        <span>ЭТО ТВОЙ МОМЕНТ</span>
      </footer>
    </main>
  );
}
