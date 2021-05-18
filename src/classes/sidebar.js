import { block } from '../utils';
import { TextBlock, ColumnsBlock, ImageBlock, TitleBlock } from './blocks';
export class Sidebar {
  constructor(selector, updateCallback) {
    this.$el = document.querySelector(selector);
    this.update = updateCallback;
    this.init();
  }

  init() {
    this.$el.insertAdjacentHTML('afterbegin', this.template);
    this.$el.addEventListener('submit', this.add.bind(this));
  }

  get template() {
    return [
      block('text'),
      block('title'),
      block('column'),
      block('image'),
    ].join('');
  }
  add(event) {
    event.preventDefault();
    const type = event.target.name;
    const value = event.target.value.value;
    const styles = event.target.styles.value;

    let newBlock;

    switch (type) {
      case 'text':
        newBlock = new TextBlock(value, { styles });
        break;
      case 'title':
        newBlock = new TitleBlock(value, { styles });
        break;
      case 'column':
        newBlock = new ColumnsBlock(value, { styles });
        break;
      case 'image':
        newBlock = new ImageBlock(value, { styles });
        break;

      default:
        break;
    }
    this.update(newBlock);

    event.target.value.value = '';
    event.target.styles.value = '';
  }
}
