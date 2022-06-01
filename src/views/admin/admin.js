import {Header} from '../components/index.js';

const body = document.querySelector('body');
const token = sessionStorage.getItem('token');
console.log('hygy');
const header = new Header(body, token);
// const main = new Main(body);
