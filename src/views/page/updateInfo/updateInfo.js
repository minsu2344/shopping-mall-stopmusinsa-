import * as Api from '/api.js';

const username = document.querySelector('#name');
const newPassword = document.querySelector('#password');
const email = document.querySelector('#email');
const postCdoe = document.querySelector('#sample6_postcode');
const address = document.querySelector('#sample6_address');
const detailAdd = document.querySelector('#sample6_detailAddress');
const form = document.querySelector('form');
const deleteBtn = document.querySelector('#delete__btn');

// 폼 제출 함수
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

// 기존 회원 정보 넣기
async function paintUserInfo() {
  const user = await Api.get();
}

// 회원탈퇴 버튼 클릭 함수
async function handleDeleteBtnClick() {
  const result = confirm('정말로 회원탈퇴를 하시겠습니까?');

  try {
    if(result) {
      await Api.del('/api/user/', userId);

      alert('이용해주셔서 감사합니다.');
      location.href('/');
    }
  }
  catch(err) {
    console.error(err.stack);
    alert(`문제가 발생하였습니다. 확인 후 다시 시도해 주세요: ${err.message}`);
  }
}

// 유저 정보 api에서 가져오기
async function getUserInfo() {
  const user = await Api.get('/api/user/userlist', )
}

// 폼 제출 이벤트
form.addEventListener('submit', handleFormSubmit);

// 회원 탈퇴 버튼 클릭 이벤트
deleteBtn.addEventListener('click', handleDeleteBtnClick);