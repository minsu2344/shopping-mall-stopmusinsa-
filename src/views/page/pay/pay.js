// import * as Api from '/api.js';

const userName = document.querySelector('#name');
const phone = document.querySelector('#phone');
const postCode = document.querySelector('#sample4_postcode');
const roadAddress = document.querySelector('#sample4_roadAddress');
// const jibunAddress = document.querySelector('#sample4_jibunAddress');
const detailAddress = document.querySelector('#sample4_detailAddress');
const payment = document.getElementsByName('payment');
const form = document.querySelector('form');
const productsMain = document.querySelector('.products__main');
const submitBtn = document.querySelector('#submintBtn');

async function handleFormSubmit(e) {
  e.preventDefault();
  console.log(e);
  const fullname = userName.value;
  const phoneNumber = phone.value;
  const postalcode = postCode.value;
  const address1 = roadAddress.value;
  const address2 = detailAddress.value;
  const paymentMethod = Array.from(payment).filter((method) => method.checked === true)[0].value;
  let totalPrice = 0;

  const productArr = [];
  JSON.parse(localStorage.getItem('products')).forEach((product) => {
    const {_id} = product;
    const count = product.quantity;
    const productData = {
      product: {
        _id,
        count,
      },
    };

    productArr.push(productData);
    totalPrice += product.price * count;
  });

  try {
    const data = {
      products: productArr,
      fullname,
      phoneNumber,
      address: {
        postalcode,
        address1,
        address2,
      },
      total: totalPrice,
      paymentMethod,
    };

    await Api.post('localhost:5000/api/order/', data);

    location.href = '../home/home.html';
  } catch (err) {
    console.error(err.stack);
    alert(`문제가 발생하였습니다. 확인 후 다시 시도해 주세요: ${err.message}`);
  }
}

function getProducts() {
  const element = JSON.parse(localStorage.getItem('products')).map((value) => {
    const {name, image, option, quantity, price} = value;
    
    return paintProducts(name, image, option, quantity, price);
  });
  
  productsMain.innerHTML = element.join('\n');
}

function paintProducts(name, image, option, qunatity, price) {
  return `
    <div class="product">
      <div class="products__basic">
          <img src=${image} alt="" />
          <div class="name__option">
              <p class="products__name">${name}</p>
              <p class="option">${option}</p>
          </div>
      </div>
      <div class="products__quantity">
          <p class="quantity">${qunatity}</p>
      </div>
      <div class="products__price">
          <p class="price">${Number(price).toLocaleString()}</p>
      </div>
    </div>
  `;
}

function priceSum() {
  const priceArray = document.querySelectorAll('.price');
  const priceResult = Array.from(priceArray).map((price) => Number(price.innerText.replace(/,/g, ''))).reduce((acc, cur) => acc + cur);

  submitBtn.value = `${priceResult.toLocaleString()}원 결제`;
}

form.addEventListener('submit', handleFormSubmit);

getProducts();
priceSum();
