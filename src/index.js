import { render } from './scripts/framework/render';
import HeaderView from './scripts/Header-view';
import './sass/index.scss';

const siteMainElement = document.querySelector('.main');
const header = new HeaderView;
const headerButton = header.element.querySelector('.header__button');
const headaerList = header.element.querySelector('.header__list');

render(header, siteMainElement);
headerButton.addEventListener('click', () => {
  headerButton.classList.toggle('header__button--open');
  headaerList.classList.toggle('header__list--open');
})