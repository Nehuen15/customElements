export function init() {
  class Header extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      var shadow = this.attachShadow({ mode: "open" });
      var conteinerEl = document.createElement("div");
      conteinerEl.classList.add("header");
      //
      var textEl = document.createElement("h1");
      textEl.classList.add("header__text");
      textEl.textContent = this.textContent;
      conteinerEl.appendChild(textEl);
      //
      var style = document.createElement("style");
      style.textContent = `.header{
        background-color: #FF8282;
      }
      .header__text{
        margin:0;
        padding:17px 0;
        text-align:center;
        font-size: 22px;
        line-height: 26px;}
        
        @media(min-width:768px){
          .header__text{
            padding: 27px 0;
          }
        }`;

      shadow.appendChild(style);
      shadow.appendChild(conteinerEl);
    }
  }
  customElements.define("header-comp", Header);
}
