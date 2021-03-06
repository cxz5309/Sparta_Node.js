import Page from "../Page.js";

export default class ListPost extends Page {
  constructor($app, $target) {
    super($app, $target, listPost());
  }
}

const listPost = () => {
  return `
  <div class="content-header">
        <h1 class="page-title">Designing Dashboards</h1>
      </div>
      <div class="list-contents">
        <div class="contents">
          <div class="contents-box">
            <% for(var i = 0; i < contents.length; i++){%>
              <article class="row">
                <div class="thumbnail-box col-3">
                  <img class="thumbnail" src=<%= contents[i].thumbnail %> alt="썸네일"
                    class="col-3">
                </div>
                <div class="list-content col-9">
                  <div class="list-title"><%= contents[i].title %></div>
                  <div class="list-info row">
                    <div class="created-date col-3"><%= contents[i].date %></div>
                    <div class="writer col-9"><%= contents[i].userName %></div>
                  </div>
                  <div class="list-desc">
                    <%= contents[i].thumbnail %>
                  </div>
              </article>
            <%}%>
          </div>
        </div>
      </div>`
}