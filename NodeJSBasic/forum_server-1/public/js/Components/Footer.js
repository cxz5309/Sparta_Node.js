import Page from "./Page.js";

export default class Header extends Page {
  constructor($app, $target) {
    super($app, $target, header());
  }
}

const header = () => {
    return `
    <div class="footer">
      <div class="link">
        <a href="cxz5309@gmail.com"><i class="far fa-envelope fa-3x"></i></a>
        <a href="https://github.com/cxz5309"><i class="fab fa-github fa-3x"></i></a>
      </div>
    </div>`
}