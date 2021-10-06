export function init() {
  class Footer extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      var shadow = this.attachShadow({ mode: "open" });

      var conteinerEl = document.createElement("div");
      conteinerEl.classList.add("footer");
      //
      var textEl = document.createElement("h1");
      textEl.classList.add("footer__text");
      textEl.textContent = this.textContent;
      conteinerEl.appendChild(textEl);
      //
      var style = document.createElement("style");
      style.textContent = `.footer{
        background-color: #FFA0EA;
      }
      .footer__text{
        margin:0;
        padding:104px 0;
        text-align:center;
        font-size: 22px;
        line-height: 26px;}`;

      shadow.appendChild(style);
      shadow.appendChild(conteinerEl);
    }
  }
  customElements.define("footer-comp", Footer);
}
