export function row(id, content, styles = '') {
  return `<div id="${id}" class = "row" style='${styles}'>${content}</div>`;
}
export function col(content) {
  return `<div class = "col-sm">${content}</div>`;
}

export function css(styles = {}) {
  if (typeof styles === 'string') return styles;
  const toString = (key) => `${key}:${styles[key]}`;
  return Object.keys(styles).map(toString).join(';');
}
export function block(type) {
  return `
  <form name="${type}">
  <h5>${type}</h5>
  <div class="form-group mb-2">
    <input
      class="form-control form-control-sm"
      name="value"
      placeholder="value"
    />
  </div>
  <div class="form-group mb-2 ">
    <textarea
      class=" form-control"
      style="height: 50px"
      name="styles"
      placeholder="styles"
    /></textarea>
  </div>
  <button type="submit" class="btm btn-primary btn-sm">Добавить</button>
</form>
<hr />
  `;
}

export function button(type) {
  return `
  <button type="button" id="${type}" class="btm btn-primary btn-sm">${type}</button>
  
  <hr />`;
}
