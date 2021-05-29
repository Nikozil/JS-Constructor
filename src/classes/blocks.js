import { col, css, row } from '../utils';

class Block {
  constructor(type, id, value, options) {
    this.type = type;
    this.value = value;
    this.options = options;
    this.id = id;
  }
  toHTML() {
    throw new Error('Метод toHTML должен быть реализован');
  }
}

export class TitleBlock extends Block {
  constructor(id, value, options) {
    super('title', id, value, options);
  }
  toHTML() {
    const { tag = 'h1', styles } = this.options;

    return row(this.id, col(`<${tag}>${this.value}</${tag}>`), css(styles));
  }
}
export class ImageBlock extends Block {
  constructor(id, value, options) {
    super('image', id, value, options);
  }
  toHTML() {
    const { imageStyles: is, alt = '', styles } = this.options;
    return row(
      this.id,
      `<img src="${this.value}" alt="${alt}" style="${css(is)}">`,
      css(styles)
    );
  }
}
export class ColumnsBlock extends Block {
  constructor(id, value, options) {
    super('columns', id, value, options);
  }
  toHTML() {
    const html = this.value.map(col).join('');
    return row(this.id, html, css(this.options.styles));
  }
}
export class TextBlock extends Block {
  constructor(id, value, options) {
    super('text', id, value, options);
  }
  toHTML() {
    return row(this.id, col(`<p>${this.value}</p>`), css(this.options.styles));
  }
}
