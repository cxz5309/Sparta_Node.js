import Page from "./Page.js";
import Headline from './Main/Headline.js'
import PopularList from './Main/PopularList.js'
import RecentList from './Main/RecentList.js'
import CreatePost from'./CreatePost/CreatePost.js'
import ReadPost from './ReadPost/ReadPost.js'
import ListPost from './ListPost/ListPost.js'
import UpdatePost from './UpdatePost/UpdatePost.js'

export default class Main extends Page {
  constructor($app, $target) {
    super($app, $target);
    this.$app = $app;
    this.$target = $target;
    this.template = new Template();
  }

  //home.html
  makeHeadline($taget){
    this.$headline = document.createElement("section");
    this.$headline.classList.add('headline');
    $taget.appendChild(this.$headline);

    this.headline = new Headline(this.$app, this.$headline);
    this.headline.render();
  }
  makePopularList($target){
    this.$popularList = document.createElement("section");
    this.$popularList.classList.add('popular-post');
    $target.appendChild(this.$popularList);

    this.popularList = new PopularList(this.$app, this.$popularList);
    this.popularList.render();
  }
  makeRecentList($target){
    this.$recentList = document.createElement("section");
    this.$recentList.classList.add('recent-post');
    $target.appendChild(this.$recentList);

    this.recentList = new RecentList(this.$app, this.$recentList);
    this.recentList.render();
  }

  //create-post.html
  makeCreatePost($target){
    this.$createPost = document.createElement("section");
    $target.appendChild(this.$createPost);

    this.createPost = new CreatePost(this.$app, this.$createPost);
    this.createPost.render();
  }

  //read-post.html
  makeReadPost($target){
    this.$readPost = document.createElement("section");
    $target.appendChild(this.$readPost);

    this.readPost = new ReadPost(this.$app, this.$readPost);
    this.readPost.render();
  }

  //list-post.html
  makeListPost($target){
    this.$listPost = document.createElement("section");
    $target.appendChild(this.$listPost);

    this.listPost = new ListPost(this.$app, this.$listPost);
    this.listPost.render();
  }

  //update-post.html
  makeUpdatePost($target){
    this.$updatePost = document.createElement("section");
    $target.appendChild(this.$updatePost);

    this.updatePost = new UpdatePost(this.$app, this.$updatePost);
    this.updatePost.render();
  }


  render(){
    this.$element = '';
    switch(this.$app.page){
      case '/':
        this.makeHeadline(this.$target);
        this.makePopularList(this.$target);
        this.makeRecentList(this.$target);
        break;
      case '/list-post':
        this.makeListPost(this.$target);
        break;
      case '/create-post':
        this.makeCreatePost(this.$target);
        break;
      case '/read-post':
        this.makeReadPost(this.$target);
        break;
      case '/update-post':
        this.makeUpdatePost(this.$target);
        break;
    }
  }
}

class Template {

}