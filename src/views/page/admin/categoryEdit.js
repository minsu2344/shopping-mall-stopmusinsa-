import * as Api from '../../js/api.js';

export default class CategoryEdit {
  constructor(target) {
    this.target = target;
    this.target.innerHTML = ``;
    this.title = document.createElement('h1');
    this.title.className = 'EditContainer__title';
    this.target.appendChild(this.title);
    this.content = document.createElement('div');
    this.content.className = 'EditContainer__content';
    this.target.appendChild(this.content);
    this.render();
  }

  async fetchCategory() {
    const categories = await Api.get('/api/category');
    return categories;
  }

  render() {
    this.title.innerText = '카테고리';
    this.fetchCategory().then((categories)=>{
      categories.forEach((category)=>{
        const form = document.createElement('form');
        form.className = 'categoryUpdateForm';
        form.innerHTML = `
            <h3>Main</h3>
            <input  value='${category.item}'/>
            <h3>Sub</h3>
            <input value='${category.subItem}'/>
            <button name='update' type='submit'>수정하기</button>
            <button name='delete' type='submit'>삭제하기</button>
        `;
        this.content.appendChild(form);

        form.addEventListener('submit', async (e)=>{
          e.preventDefault();
          if (e.submitter.name === 'update') {
            alert('준비중입니다ㅠㅠ');
          } else if (e.submitter.name === 'delete') {
            await Api.delete(`/api/category/${category._id}`, '', {replaceCategoryIdArray: []});
            location.reload();
          }
        });
      });
      const registerForm = document.createElement('form');
      this.content.appendChild(registerForm);
      registerForm.className = 'categoryUpdateForm';
      registerForm.innerHTML += `
            <h3>Main</h3>
            <input name='item'/>
            <h3>Sub</h3>
            <input name='subItem'/>
            <button type='submit'>등록하기</button>
    `;
      registerForm.addEventListener('submit', async (e)=>{
        e.preventDefault();
        const data = new FormData(e.target);
        await Api.post('/api/category', Object.fromEntries(data));
        location.reload();
      });
    });
  }
}
