export default class UserEdit {
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
