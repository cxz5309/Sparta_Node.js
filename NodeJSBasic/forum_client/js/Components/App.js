import axios from  'axios'
import {$app, $body} from '../Constants/qs.js'
import Header from './Header.js';
import Main from './Main.js'
import Footer from './Footer.js'

export default class App {
  constructor() {
    this.state = "home";
    this.page = '';
  }

  getUrl() {
    try {
      const response = await axios.get('/')
      console.log(response)
      return response;
    } catch (error) {
      console.error(error)
      return '';
    }
  }

  async render() {

    this.page = this.getUrl();
    
    while ($body.firstChild) {
      $body.removeChild($body.lastChild);
    }
    this.$header = document.createElement("header");
    this.$main = document.createElement("main");
    this.$footer = document.createElement("footer");

    $body.appendChild(this.$header);
    $body.appendChild(this.$main);
    $body.appendChild(this.$footer);

    this.header = new Header(this, this.$header);
    this.main = new Main(this, this.$main);
    this.footer = new Footer(this, this.$footer);

    this.header.render();
    this.main.render();
    this.footer.render();
  }
}