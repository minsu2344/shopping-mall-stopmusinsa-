export default class ProductCard extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    // html 추가
    const product = this._product;
    this.innerHTML = `
      <a href="/product?id=12345">
        <div class="ProductCard">
            <div class="ProductCard__header">
                <div class="ProductCard__ranking">${product.ranking}위</div>
            </div>
            <div class="ProductCard__imageContainer">
                <img class="ProductCard__image" src="${product.image}" alt="product_image" />
            </div>
            <div class="ProductCard__body">
                <h3 class="ProductCard__brand">${product.brand}</h3>
                <p class="ProductCard__title">${product.name}</p>
                <p class="ProductCard__price">${product.price}원</p>
            </div>
        </div>
      </a>
    `;

    // css 파일 추가
    const linkElem = document.createElement('link');
    linkElem.setAttribute('rel', 'stylesheet');
    linkElem.setAttribute('href', '/src/views/components/product/ProductCard/ProductCard.css');
    this.appendChild(linkElem);
  }
  get product() {
    return this._product;
  }
  set product(product) {
    this._product = product;
  }
}
window.customElements.define('product-card', ProductCard);
