const totalProductsNum = document.querySelector('#cart-num');
const totalInProducts = document.querySelector('#product-num-all');
const checkAllBox = document.querySelector('#product-check-all');
const deleteAllBtn = document.querySelector('#deleteAllBtn');
const deleteBtn = document.querySelector('#deleteBtn');
const totalPrice = document.querySelector('#orderBtn');
const productBox = document.querySelector('#product-box');

const deleteOneBtn = document.querySelectorAll('.delete')

const PRODUCTS_KEY = 'products';

let products = [{_id: 'djf20', url: '../tabIcon.png', name: '나이키', size: 'L', price: '19000', quantity: 1}, {_id: '12fd1', url: '../tabIcon.png', name: '나이키', size: 'L', price: '19000', quantity: 1}];

// 로컬스토리지 저장
function saveProducts() {
  localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));
}

// 로컬 스토리지 받기
function getProducts() {
  setProductNum();

  const items = JSON.parse(localStorage.getItem(PRODUCTS_KEY));
  for(let i=0; i<products.length; i++) {
    const index = i+1;
    const {url, name, size, price, quantity} = items[i];
    const result = price*quantity;
    productBox.innerHTML += paintProductBox(
      index,
      url,
      name,
      size,
      price,
      quantity,
      result
    );
  }
}

// 화면에 getProducts 띄우기
function paintProductBox(index, url, name, size, price, quantity, result) {
  return `
  <div class="product">
      <p id="product-num">${index}</p>
      <input type="checkbox" name="" class="product-check" checked>
      <div class="product-info">
        <img src="${url}" alt="" style="width: 50px;">
        <div class="option">
          <p class="product-name">${name}</p>
          <p class="product-option">SIZE: ${size}</p>
        </div>
        </div>
        <p class="product-price">${Number(price).toLocaleString()}</p>
        <div class="product-quantity-box">
          <input type="button" value="-" onclick="changeValue();">
          <input type="number" class="product-quantity" value="${quantity}">
          <input type="button" value="+" onclick="changeValue();">
        </div>
        <p class="product-result">${Number(result).toLocaleString()}</p>
        <div class="delete-box">
          <input class="delete" type="button" value="삭제하기">
        </div>
      </div>
    </div>
  </div>
  `
}

// 상품 갯수 innerText 정리 함수
function setProductNum() {
  const numberOfProducts = JSON.parse(localStorage.products).length;
  totalProductsNum.innerText = numberOfProducts;
  totalInProducts.innerText = `전체 ${numberOfProducts}개`;
}

// 삭제하기 버튼 이벤트 함수
function deleteOne(e) {
  const result = confirm('장바구니에서 제거하시겠습니까?');

  if(result) {
    const product = e.target.parentElement.parentElement;
    products = products.filter(x => x._id !== product.firstElementChild.innerText) ;
    product.remove();
    saveProducts();

    setProductNum();
  }
}

// 전체삭제 버튼 클릭 함수
function handleDeleteAllBtnClick() {
  if(!localStorage.products) {
    alert('장바구니가 비어있습니다.');
    return;
  }
  const result = confirm('장바구니를 비우시겠습니까?');

  if(result) {
    products = [];
    localStorage.removeItem(PRODUCTS_KEY);
    productBox.innerHTML = '';
  }
}








// 각 삭제하기 버튼 클릭 이벤트
Array.from(deleteOneBtn).forEach(x => x.addEventListener('click', deleteOne));

// 전체삭제 버튼 클릭 이벤트
deleteAllBtn.addEventListener('click', handleDeleteAllBtnClick);




// 상품 갯수 innerText 정리
saveProducts(products);
getProducts();