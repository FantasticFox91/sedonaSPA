import AbstractView from './framework/view/abstract-view';
import HeaderListView from './Header-list-view';

const headerList = new HeaderListView;

const createHeaderViewTemplate = () => `<header class='header'>${headerList.template}</header>`;

export default class HeaderView extends AbstractView{
  get template() {
    return createHeaderViewTemplate();
  }
}