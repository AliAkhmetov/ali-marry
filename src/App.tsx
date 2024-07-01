import cn from "classnames";
import type { FunctionComponent } from "react";
import styles from "@/App.module.scss";
import CeremonyIcon from "@/assets/icons/ceremony.svg?react";
import CakeIcon from "@/assets/icons/cake.svg?react";
import MusicIcon from "@/assets/icons/music.svg?react";
import CameraIcon from "@/assets/icons/camera.svg?react";
import PlayerIcon from "@/assets/icons/player.svg?react";
import CircledChevronLeftIcon from "@/assets/icons/circled-chevron-left.svg?react";
import CircledChevronRightIcon from "@/assets/icons/circled-chevron-right.svg?react";
import FormImage from "@/assets/images/form/ali-aru.webp";
import Gallery1Image from "@/assets/images/gallery/1.webp";
import Gallery2Image from "@/assets/images/gallery/2.webp";
import Gallery3Image from "@/assets/images/gallery/3.webp";
import Gallery4Image from "@/assets/images/gallery/4.webp";
import Gallery5Image from "@/assets/images/gallery/5.webp";
import Gallery6Image from "@/assets/images/gallery/6.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

export const App: FunctionComponent = () => {
  return (
    <>
      <header className={styles["header"]}>
        <ul className={styles["header-languages"]}>
          <li className={styles["header-languages__item"]}>
            <button
              type="button"
              className={cn(styles["header-languages__button"], styles["active"])}
            >
              қаз
            </button>
          </li>

          <li className={styles["header-languages__item"]}>
            <button type="button" className={cn(styles["header-languages__button"])}>
              рус
            </button>
          </li>
        </ul>

        <nav className={styles["header-nav"]}>
          <ul className={styles["header-nav__list"]}>
            <li className={styles["header-nav__item"]}>
              <a href="#" className={styles["header-nav__link"]}>
                Шақыру
              </a>
            </li>

            <li className={styles["header-nav__item"]}>
              <a href="#" className={styles["header-nav__link"]}>
                Күні
              </a>
            </li>

            <li className={styles["header-nav__item"]}>
              <a href="#" className={styles["header-nav__link"]}>
                Мекенжай
              </a>
            </li>

            <li className={styles["header-nav__item"]}>
              <a href="#" className={styles["header-nav__link"]}>
                Анкета
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <button type="button" className={styles["player"]}>
        <PlayerIcon />
      </button>

      <section className={styles["main"]}>
        <h1 className={styles["main__title"]}>
          Ali <br /> & <br /> Aruzhan
        </h1>

        <div className={styles["main__subtitle"]}>
          <p>сенбі</p>
          <span>07</span>
          <p>қыркүйек</p>
        </div>
      </section>

      <section className={styles["about"]}>
        <p className={styles["about__title"]}>
          Құрметті ағайын-туыс, нағашылар, <br /> құда-жекжат, бауырлар, дос- <br />
          жарандар, көршілер және әріптестер!
        </p>

        <p className={styles["about__subtitle"]}>
          Cіздерді <br />
          <span>Мухаметали мен Аружанның</span> <br />
          үйлену тойына арналған салтанатты ақ дастарханымыздың қадірлі қонағы болуға шақырамыз!
        </p>
      </section>

      <section className={styles["ceremony"]}>
        <div className={styles["ceremony__icon"]}>
          <CeremonyIcon />
        </div>

        <h2 className={styles["ceremony__title"]}>Той салтанаты:</h2>
        <h2 className={styles["ceremony__date"]}>07.09.24</h2>

        <div className={styles["ceremony-calendar"]}>
          <h2 className={styles["ceremony-calendar__title"]}>Қыркүйек</h2>

          <ul className={styles["ceremony-calendar__days"]}>
            <li className={styles["ceremony-calendar__day"]}>
              <span>дс</span>
              <span>2</span>
            </li>

            <li className={styles["ceremony-calendar__day"]}>
              <span>сс</span>
              <span>3</span>
            </li>

            <li className={styles["ceremony-calendar__day"]}>
              <span>ср</span>
              <span>4</span>
            </li>

            <li className={styles["ceremony-calendar__day"]}>
              <span>бс</span>
              <span>5</span>
            </li>

            <li className={styles["ceremony-calendar__day"]}>
              <span>жм</span>
              <span>6</span>
            </li>

            <li className={cn(styles["ceremony-calendar__day"], styles["active"])}>
              <span>сн</span>
              <span>7</span>
            </li>

            <li className={styles["ceremony-calendar__day"]}>
              <span>жс</span>
              <span>8</span>
            </li>
          </ul>
        </div>

        <div className={styles["ceremony__time"]}>
          <p>Басталуы:</p>
          <span>18:00</span>
        </div>
      </section>

      <section className={styles["address"]}>
        <div className={styles["address__icon"]}>
          <CakeIcon />
        </div>

        <h2 className={styles["address__title"]}>Мекен-жайымыз:</h2>
        <div className={styles["address__content"]}>
          <p>Тараз қаласы,</p>
          <p>Абай даңғылы, 120</p>
          <p className={styles["colored"]}>“Сәтті”</p>
          <p>мейрамханасы</p>
        </div>

        <div className={styles["address__map"]}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d868.8668546233866!2d71.38092755047171!3d42.90433309466759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38a703ea01147721%3A0x47d829d02ba5b0a5!2z0KDQtdGB0YLQvtGA0LDQvSDQodOZ0YLRgtGW!5e0!3m2!1sru!2skz!4v1719849665449!5m2!1sru!2skz"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <section className={styles["form"]}>
        <div className={styles["form__icon"]}>
          <MusicIcon />
        </div>

        <h2 className={styles["form__title"]}>Тойға қатысуыңызды растауыңызды сұраймыз!</h2>

        <p className={styles["form__subtitle"]}>
          Аты-жөніңіз (жұбыңызбен келетін болсаңыз, есімдеріңізді бірге жазуыңызды өтінеміз)
        </p>

        <div className={styles["form-card"]}>
          <form className={styles["form-element"]} onSubmit={(e) => e.preventDefault()}>
            <input placeholder="Есіміңіз" className={styles["form-element__field"]} />

            <div className={styles["form-element__checkboxes"]}>
              <label htmlFor="coming">
                <input type="checkbox" id="coming" />
                <span>Келемін</span>
              </label>

              <label htmlFor="with-pair">
                <input type="checkbox" id="with-pair" />
                <span>Жұбыммен келемін</span>
              </label>

              <label htmlFor="no-coming">
                <input type="checkbox" id="no-coming" />
                <span>Өкінішке орай, қатыса алмаймын</span>
              </label>
            </div>

            <button type="submit" className={styles["form-element__submit"]}>
              Жіберу
            </button>
          </form>

          <div className={styles["form-card__image"]}>
            <img src={FormImage} alt="" />
          </div>
        </div>
      </section>

      <section className={styles["gallery"]}>
        <h2 className={styles["gallery__title"]}>Фотоальбом</h2>

        <div className={styles["gallery__icon"]}>
          <CameraIcon />
        </div>

        <Swiper
          breakpoints={{
            768: {
              spaceBetween: 50,
              slidesPerView: 3,
            },
            0: {
              spaceBetween: 50,
              slidesPerView: 1,
            },
          }}
          spaceBetween={50}
          slidesPerView={3}
          className={styles["swiper"]}
          allowTouchMove
          modules={[Navigation]}
          navigation={{ nextEl: "#swiper-next", prevEl: "#swiper-prev" }}
        >
          <SwiperSlide className={styles["swiper__item"]}>
            <img className={styles["swiper__image"]} src={Gallery1Image} alt="" />
          </SwiperSlide>
          <SwiperSlide className={styles["swiper__item"]}>
            <img className={styles["swiper__image"]} src={Gallery2Image} alt="" />
          </SwiperSlide>
          <SwiperSlide className={styles["swiper__item"]}>
            <img className={styles["swiper__image"]} src={Gallery3Image} alt="" />
          </SwiperSlide>
          <SwiperSlide className={styles["swiper__item"]}>
            <img className={styles["swiper__image"]} src={Gallery4Image} alt="" />
          </SwiperSlide>
          <SwiperSlide className={styles["swiper__item"]}>
            <img className={styles["swiper__image"]} src={Gallery5Image} alt="" />
          </SwiperSlide>
          <SwiperSlide className={styles["swiper__item"]}>
            <img className={styles["swiper__image"]} src={Gallery6Image} alt="" />
          </SwiperSlide>
        </Swiper>

        <div className={styles["swiper-actions"]}>
          <button type="button" id="swiper-prev" className={styles["swiper-actions__button"]}>
            <CircledChevronLeftIcon />
          </button>

          <button type="button" id="swiper-next" className={styles["swiper-actions__button"]}>
            <CircledChevronRightIcon />
          </button>
        </div>
      </section>

      <section className={styles["owners"]}>
        <h2 className={styles["owners__title"]}>Той иелері:</h2>
        <h2 className={styles["owners__names"]}>Жандарбек - Қарлығаш</h2>
        <h2 className={styles["owners__subtitle"]}>
          Келіңіздер, тойымыздың қадірлі қонағы болыңыздар!
        </h2>
      </section>
    </>
  );
};
