import { block, button } from '../utils';
import { TextBlock, ColumnsBlock, ImageBlock, TitleBlock } from './blocks';
export class Sidebar {
  constructor(selector, siteSelector, updateCallback, deleteElemCallback) {
    this.$el = document.querySelector(selector);
    this.$site = document.querySelector(siteSelector);

    this.update = updateCallback;
    this.deleteElem = deleteElemCallback;

    this.init();

    this.stringModel = null;
    this.id = 10;
    this.deleteMode = false;
  }

  init() {
    this.$el.insertAdjacentHTML('afterbegin', this.template);
    this.$el.addEventListener('click', this.click.bind(this));
    this.$el.addEventListener('submit', this.add.bind(this));
    this.$site.addEventListener('click', this.delete.bind(this));
  }

  get template() {
    return [
      block('text'),
      block('title'),
      block('column'),
      block('image'),
      button('download'),
      button('delete'),
    ].join('');
  }
  click(event) {
    if (event.type != 'click') return;
    console.log(event.type);
    const type = event.target.id;
    if (type == 'download') {
      event.preventDefault();
      let link = document.createElement('a');
      link.download = 'site.html';
      let blob = new Blob([this.stringModel], { type: 'text/html' });
      link.href = URL.createObjectURL(blob);
      link.click();
      URL.revokeObjectURL(link.href);
    } else if (type == 'delete') {
      event.preventDefault();
      this.deleteMode = true;
    }
  }

  add(event) {
    if (event.type != 'submit') return;
    console.log(event.type);

    event.preventDefault();
    const type = event.target.name;
    const value = event.target.value.value;
    const styles = event.target.styles.value;

    let newBlock;

    switch (type) {
      case 'text':
        newBlock = new TextBlock(this.id++, value, { styles });
        break;
      case 'title':
        newBlock = new TitleBlock(this.id++, value, { styles });
        break;
      case 'column':
        newBlock = new ColumnsBlock(this.id++, value.split(';'), { styles });
        break;
      case 'image':
        newBlock = new ImageBlock(this.id++, value, { styles });
        break;

      default:
        break;
    }
    this.stringModel = this.update(newBlock);

    event.target.value.value = '';
    event.target.styles.value = '';
  }
  delete(event) {
    if (event.type != 'click') return;
    if (this.deleteMode) {
      let id =
        event.target.id ||
        event.target.parentNode.id ||
        event.target.parentNode.parentNode.id ||
        event.target.parentNode.parentNode.parentNode.id;
      this.deleteElem(id);
      this.deleteMode = false;
    }
  }
}
