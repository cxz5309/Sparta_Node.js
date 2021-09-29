import Page from "../Page.js";

export default class UpdatePost extends Page {
  constructor($app, $target) {
    super($app, $target, updatePost());
  }
}

const updatePost = () => {
  return `
  <div class="update-content">
        <form action="post">
          <label for="title" class="form-label">제목</label>
          <div class="input-group mb-3 input-group-lg">
            <input type="text" id="title" class="form-control" placeholder="제목" value=<%= content.title %>>
          </div>
          <label for="writer" class="form-label">작성자</label>
          <div class="input-group mb-3">
            <input type="text" id="writer" class="form-control" placeholder="작성자" value=<%= content.userName %>>
          </div>
          <label for="password" class="form-label">비밀번호</label>
          <div class="input-group mb-3">
            <input type="text" id="password" class="form-control" placeholder="비밀번호" value=''>
          </div>
          <label for="description" id="description" class="form-label">내용</label>
          <div class="input-group mb-3">
            <textarea class="form-control" value=<%= content.description %>></textarea>
          </div>
          <div>
            <button type="submit" action='/update_post' class="btn btn-success mb-3">게시물 수정</button>
            <button type="submit" action='/delete_post' class="btn btn-danger mb-3">게시물 삭제</button>
          </div>
        </form>
      </div>`
}