import Page from "../Page.js";

export default class ReadPost extends Page {
  constructor($app, $target) {
    super($app, $target, readPost());
  }
}

const readPost = () => {
  return `
  <div class="content-header">
    <h1 class="read-title"><%= content.title %></h1>
    <div class="read-info row">
      <div class="created-date col-3"><%= content.date %></div>
      <div class="writer col-9"><%= content.userName %></div>
    </div>
  </div>
  <div class="read-content">
    <div class="desc">
      <%= content.description %>
    </div>
  </div>`
}