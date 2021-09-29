export default class Page {
  constructor($app, $target, $element, data) {

    this.$app = $app;
    this.$target = $target;
    this.$element = $element;
    this.data = data;
  }

  // makeNode() {
  //   this.$Element = document.createElement("div");
  //   this.$Element.className = 'Node';
  //   this.$Image = document.createElement('img');
  //   switch (this.data.type) {
  //     case "FILE":
  //       this.$Image.setAttribute('src', './assets/file.png')
  //       this.$Image.addEventListener('click', () => {
  //         this.onClickFile(this.$app);
  //       });
  //       break;
  //     case "DIRECTORY":
  //       this.$Image.setAttribute('src', './assets/directory.png')
  //       this.$Image.addEventListener('click', () => {
  //         this.onClickDir(this.$app);
  //       });
  //       break;
  //     default:
  //       this.$Image.setAttribute('src', './assets/prev.png')
  //       this.$Image.addEventListener('click', () => {
  //         this.onClickPrev(this.$app);
  //       });
  //       break;
  //   }

  //   this.$Element.appendChild(this.$Image);
  //   if (this.data.name) {
  //     this.$Caption = document.createElement('div');
  //     this.$Caption.textContent = this.data.name;
  //     this.$Element.appendChild(this.$Caption);
  //   }
  //   this.$target.appendChild(this.$Element);
  // }

  addTemplate($element){
    while (this.$target.firstChild) {
      this.$target.removeChild(this.$target.lastChild);
    }
    if($element){
      this.$target.innerHTML = $element;
    }
  }

  render($element = this.$element) {
    this.addTemplate($element);
  }
}