import * as Api from '../../js/api.js';

export default class ProductEdit {
  constructor(target) {
    this.target = target;
    this.target.innerHTML = ``;
    this.title = document.createElement('h1');
    this.title.className = 'EditContainer__title';
    this.target.appendChild(this.title);
    this.content = document.createElement('div');
    this.content.className = 'EditContainer__content__row';
    this.target.appendChild(this.content);
    this.form = document.createElement('form');
    this.content.appendChild(this.form);
    this.render();
  }
  async render() {
    await this.formRender();
    await this.productRender();
  }

  async formRender(product) {
    this.title.innerText = `상품 목록`;
    this.form.className = 'productRegisterForm';
    const [colors, sizes, categories] = await Promise.all([Api.get('/api/category/color'), Api.get('/api/category/size'), Api.get('/api/category')]);
    console.log(colors, sizes, categories);
    this.form.innerHTML = `
        <label for='name'>제품명 : </label>
        <input name='name' id ='name' value='${product ? product.name : ''}'/>
        <label for='price'>가격 : </label>
        <input name='price' type='number' id ='price' value='${product ? product.price : ''}'/>
        <label for='image'>상품 이미지 : </label>
        <input type="file" name="image" id="image" />
        <label for='brand'>브랜드 : </label>
        <input name='brand' id ='brand' value='${product ? product.brand : ''}'/>
        <label for='sex'>성별 : </label>
        <label><input type="radio" id='sex' name="sex" ${product && product.sex === 'male' ? 'checked' : null} value="male">male</label>
        <label><input type="radio" id='sex' name="sex" ${product && product.sex === 'female' ? 'checked' : null }  value="female"/>female</label>
        <label for='description'>상품 설명 : </label>
        <input name='description' type='file' id ='description'/>
        <p>색상 선택</p>
        `;
    colors.forEach((color, index)=>{
      this.form.innerHTML += `
            <label><input type="checkbox" name="colors[${index}]" value='${color._id}'> ${color.colorName}</label>
        `;
    });
    this.form.innerHTML += `<p>사이즈 선택</p>`;
    sizes.forEach((size, index)=>{
      this.form.innerHTML += `
            <label><input type="checkbox" name="sizes[${index}]" value='${size._id}'> ${size.sizeName}</label>
        `;
    });
    this.form.innerHTML += `<p>카테고리</p>`;
    const categorySelect = document.createElement('select');
    categorySelect.className = 'categorySelect';
    categorySelect.name = 'category';
    this.form.appendChild(categorySelect);

    categories.forEach((category)=>{
      categorySelect.innerHTML += `
            <option value='${category._id}'>Main : ${category.item} , Sub : ${category.subItem}<opiton>    
        `;
    });

    this.form.innerHTML += `<button class='Button' type='submit' id='${product ? 'update' : 'add'}'>${product ? '상품 정보 수정' : '새 상품 등록'}</button>`;

    this.form.addEventListener('submit', async (e)=>{
      const data = new FormData(this.form);
      console.log(data.get('image'), data.get('description'));
      const created = await fetch('/api/product', {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>',
          'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
        },
        body: data,
      });
      e.preventDefault();
      console.log(await created.json());
    });
  }

  async productRender() {
    const ul = document.createElement('ul');
    ul.className = 'productuList';
    const products = await Api.get('/api/product');
    console.log(products);
    this.content.appendChild(ul);
    products.forEach((product)=>{
      const li = document.createElement('li');
      li.className = 'productList';
      ul.appendChild(li);
      li.innerHTML = `
            <div class='productList__desc'>
                <img src='${product.image}' alt='제품 이미지'/>
                <h3>${product.name}</h3>
                <h4>${product.brand}</h4>
                <h4>${product.sex}</h4>
                <h4>${product.price}</h4>
            </div>
            <div class='productList__btns'>
                <button class='Button--secondary update'>수정</button>
                <button class='Button--secondary delete'>삭제</button>
            </div>
        `;
      li.querySelector('.update').addEventListener('click', ()=>{
        this.formRender(product);
      });
      li.querySelector('.delete').addEventListener('click', ()=>{
        Api.delete(`/api/product/${product._id}`);
        alert('삭제 되었습니다.');
        location.reload();
      });
    });
  }
}
