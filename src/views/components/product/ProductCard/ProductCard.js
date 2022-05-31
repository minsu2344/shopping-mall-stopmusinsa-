export default class ProductCard extends HTMLElement {
  constructor() {
    super();
    // html 추가
    this.innerHTML = `
        <div class="ProductCard">
            <div class="ProductCard__header">
                <div class="ProductCard__ranking">0위</div>
            </div>
            <div class="ProductCard__imageContainer">
                <img class="ProductCard__image" src="//image.msscdn.net/images/goods_img/20210609/1989228/1989228_4_320.jpg" alt="product_image" />
            </div>
            <div class="ProductCard__body">
                <h3 class="ProductCard__brand">캘빈클라인 골프</h3>
                <p class="ProductCard__title">[NF]링클워머 스워트 셋업</p>
                <p class="ProductCard__price">84,550원</p>
            </div>
        </div>
    `;

    // css 파일 추가
    const linkElem = document.createElement('link');
    linkElem.setAttribute('rel', 'stylesheet');
    linkElem.setAttribute('href', '/src/views/components/product/ProductCard/ProductCard.css');
    this.appendChild(linkElem);
  }
}
window.customElements.define('product-card', ProductCard);
