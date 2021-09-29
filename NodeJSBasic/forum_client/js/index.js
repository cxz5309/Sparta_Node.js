import App from './Components/App.js';

document.addEventListener('DOMContentLoaded', async ()=>{
  const app = new App();
  await app.render();
})