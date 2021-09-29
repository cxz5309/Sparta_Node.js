import Page from "../Page.js";

export default class CreatePost extends Page {
  constructor($app, $target) {
    super($app, $target, createPost());
  }
}

const createPost = () => {
  return `
  <div class="create-content">
        <form action="post">
          <label for="title" class="form-label">title</label>
          <div class="input-group mb-3 input-group-lg">
            <input type="text" id="title" class="form-control" placeholder="title">
          </div>
          <label for="writer" class="form-label">writer</label>
          <div class="input-group mb-3">
            <input type="text" id="writer" class="form-control" placeholder="writer">
          </div>
          <label for="password" class="form-label">password</label>
          <div class="input-group mb-3">
            <input type="text" id="password" class="form-control" placeholder="password">
          </div>
          <label for="description" id="description" class="form-label">description</label>
          <div class="input-group mb-3">
            <textarea class="form-control"></textarea>
          </div>
          <div>
            <button type="submit" action='/create_post' class="btn btn-primary mb-3" >게시물 작성</button>
          </div>
        </form>
      </div>`
}