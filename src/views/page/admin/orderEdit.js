export default class OrderEdit {
  constructor(target, category) {
    this.target = target;
    this.render();
  }
  render() {
    this.target.innerHTML = `
      <h1>카테고리<h1>
    `
  }
}
