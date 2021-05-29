import { Sidebar } from './sidebar';
import { Site } from './site';

export class App {
  constructor(model) {
    this.model = model;
  }
  init() {
    const site = new Site('#site');

    site.render(this.model);

    new Sidebar(
      '#panel',
      '#site',
      (newBlock) => {
        this.model.push(newBlock);
        site.render(this.model);
        return site.string(this.model);
      },
      (id) => {
        this.model = this.model.filter((elem) => {
          return elem.id != +id;
        });
        site.render(this.model);
        return site.string(this.model);
      }
    );
  }
}
