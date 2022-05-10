import AbstractView from "./framework/view/abstract-view";

const createHeaderListViewTemplate = () => {
  return (
    `
      <button class='header__button burger__button' type='button'>
        <span class='visually-hidden'>Бургер меню</span>
      </button>
      <ul class='header__list list'>
        <li class='header__item header__item--active'>ГЛАВНАЯ</li>
        <li class='header__item'>ФОТО И ВИДЕО</li>
        <li class='header__item'>ФОРМА ОТЗЫВА</li>
        <li class='header__item'>HTML ACADEMY</li>
      </ul>
      <picture  class='logo'>

        <source media='(min-width: 1200px)' srcset='./images/logotype-desktop.svg' width='187' height='97'>
        <img src='./images/logotype-tablet.svg' alt='Sedona logo' width='102' height='84'>
      </picture>
      `
  )
}

export default class HeaderListView extends AbstractView {
  get template() {
    return createHeaderListViewTemplate();
  }
}