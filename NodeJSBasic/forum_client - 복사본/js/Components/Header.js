import Page from "./Page.js";

export default class Header extends Page {
  constructor($app, $target) {
    super($app, $target, header());
  }
}

const header = () => {
    return `
    <nav>
      <div>
        <div class="row">
          <div class="col-6">
            <a href='/' class="header-logo" ><img src="./image/zero-w-logo_mini.png" alt="logo-img"></a>
          </div>
          <div class="nav-items col-6 row">
            <a class="nav-item col-5">관리</a>
            <a class="nav-item col-5">로그인</a>
            <a class="nav-item col-2"><i class="fas fa-bars"></i></a>
          </div>
        </div>
      </div>
    </nav>`
}