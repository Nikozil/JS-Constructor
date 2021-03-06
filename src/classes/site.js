export class Site {
  constructor(selector) {
    this.$el = document.querySelector(selector);
  }

  render(model) {
    this.$el.innerHTML = '';
    model.forEach((block) => {
      this.$el.insertAdjacentHTML('beforeend', block.toHTML());
    });
  }
  string(model) {
    let str = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>JavaScript Constructor</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
          crossorigin="anonymous"
        />
      </head>
      <body>`;
    model.forEach((block) => {
      str += block.toHTML();
    });

    str += `</body>
    </html>`;
    return str;
  }
}
