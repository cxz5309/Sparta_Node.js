import Page from "../Page.js";

export default class Headline extends Page {
  constructor($app, $target) {
    super($app, $target, headline());
  }
}

const headline = () => {
  return `
    <div class="headline-box row">
        <div class="col-8">
          <article>
            <div class="title">영우의 블로그</div>
            <div class="description">시간배분을..잘하자..</div>
            <div class="btn"><input type="button" value="게시글 생성"></div>
          </article>
        </div>
        <div class="col-4">
          <article class="user-avatar">
            <img src="image/me.jpg" alt="아바타">
          </article>
        </div>
      </div>`
}