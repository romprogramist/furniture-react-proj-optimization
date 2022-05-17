import "./contacts.sass";
import { Link } from "react-router-dom";

const Contacts = () => {
  return (
    <section className="contacts">
      <h1>Контакты</h1>
      <div className="wrapper">
        <div className="navigation">
          <h3>Шоу-рум MOBEL EXPO</h3>
          <p className="address">Россия, Москва, Дубравная улица, 50к5</p>
          <p className="workMode">
            Режим работы: <br />
            ПН-Сб 10:00-21:00; ВС 10:00-20:00
          </p>
          <a href="tel:+74952043030">+7 (495) 204-30-30</a>

          <a href="mailto:someone@yoursite.com">mobelexpo@unikamoblar.ru</a>
        </div>
        <div className="map">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Afcff7bc202164715c681201a67f917ba0c77a91037851f7777aea5e04db3c2e7&amp;source=constructor"
            width="100%"
            height="400"
            frameborder="0"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
export default Contacts;
