import Page from "../Page.js";

export default class PopularList extends Page {
  constructor($app, $target) {
    super($app, $target, popularList());
  }
}

const popularList = () => {
  return `
  <div class="popular-post-box">
  <div class="popular-header row">
    <div class="title col-10">Popular post</div>
    <a class="view-all col-2">View all</a>
  </div>
  <div class="contents-box row">
    <% for(var i = 0; i < 2; i++){%>
      <article onclick=location.href='read_post/<%= popularPosts[i]._id %>'>
        <div class="popular-content">
          <div class="popular-title"><%= popularPosts[i].title %></div>
          <div class="popular-info row">
            <div class="created-date col-4"><%= popularPosts[i].date %></div>
            <div class="writer col-8"><%= popularPosts[i].userName %></div>
          </div>
          <div class="popular-desc">
            <p><%= popularPosts[i].description %></p>
          </div>
        </div>
      </article>
    <%}%>
  </div>
</div>`
}

