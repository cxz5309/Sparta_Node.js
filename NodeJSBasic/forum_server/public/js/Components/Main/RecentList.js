import Page from "../Page.js";

export default class RecentList extends Page {
  constructor($app, $target) {
    super($app, $target, recentList());
  }
}

const recentList = () => {
  return `<div class="recent-post-box">
  <div class="recent-header row">
    <div class="title col-10">Recent post</div>
    <a class="view-all col-2">View all</a>
  </div>
  <div class="contents-box">
  <% for(var i = 0; i < recentPosts.length; i++){%>
    <article class="row" onclick=location.href='read-post/<%= recentPosts[i]._id %>'>
      <div class="thumbnail-box col-3">
        <img class="thumbnail" src="<%= recentPosts[i].thumbnail %>" alt="썸네일"
          class="col-3">
      </div>
      <div class="recent-content col-9">
        <div class="recent-title"><%= recentPosts[i].title %></div>
        <div class="recent-info row">
          <div class="created-date col-3"><%= recentPosts[i].date %></div>
          <div class="writer col-9"><%= recentPosts[i].userName %></div>
        </div>
        <div class="recent-desc">
          <%= recentPosts[i].description %></q>
        </div>
    </article>
    <%}%>
  </div>
</div>`
}

