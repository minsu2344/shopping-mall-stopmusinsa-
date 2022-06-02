import * as Api from '/api.js';

const username = document.querySelector('#name');
const newPassword = document.querySelector('#password');
const email = document.querySelector('#email');
const postCdoe = document.querySelector('#sample6_postcode');
const address = document.querySelector('#sample6_address');
const detailAdd = document.querySelector('#sample6_detailAddress');
const form = document.querySelector('form');

async function handleFormSubmit(e) {
  e.preventDefault();

  const fullName = username.value;
  const currentPassword = ;
  const password = newPassword.value;
  const postalCode = postCdoe.value;
  const address1 = address.value;
  const address2 = detailAdd.value;

  try {
    const data = {
      fullName,
      currentPassword,
      password,
      address: {
        postalCode,
        address1,
        address2,
      }
    };

    await Api.patch('localhost:5000/api/user', userId, data);
  }
  catch(err) {
    console.error(err.stack);
    alert(`문제가 발생하였습니다. 확인 후 다시 시도해 주세요: ${err.message}`);
  }
}

async function paintUserInfo() {
  const user = Api.get();
}

form.addEventListener('submit', handleFormSubmit);