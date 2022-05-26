const _id = document.getElementsByClassName('product-num');
const checkBox = document.getElementsByClassName('product-check');
const  = document.getElementsByClassName('product-num');
const _id = document.getElementsByClassName('product-num');
const _id = document.getElementsByClassName('product-num');
const _id = document.getElementsByClassName('product-num');
const _id = document.getElementsByClassName('product-num');
const _id = document.getElementsByClassName('product-num');

const productTemplete = `
<div class="product">
<p id="product-num">${id}</p>
<input type="checkbox" name="" class="product-check" checked>
<div class="product-info">
  <img src="${url}" alt="" style="width: 50px;">
  <div class="option">
    <p class="product-name">${name}</p>
    <p class="product-option">SIZE: ${L}</p>
  </div>
</div>
<p class="product-price">${price}</p>
<div class="product-quantity-box">
  <input type="button" value="-" onclick="">
  <input type="number" class="produect-quantity" value="${quan}">
  <input type="button" value="+" onclick="">
</div>
<p class="product-result">${result}</p>
<div class="delete-box">
  <input class="delete" type="button" value="삭제하기" onclick="">
</div>
</div>
</div>
</div>
`

function deleteAll() {
  const result = confirm('장바구니를 비우시겠습니까?');
  if(result) {
    localStorage.removeItem(products);
    return;
  }
}





// _id: index
// checked: Boolean
// imageurl:
// product name:
// price:
// number
// total:
// dele: