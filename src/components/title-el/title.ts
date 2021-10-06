export function init() {
  class Title extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      var shadow = this.attachShadow({ mode: "open" });

      var titleEl = document.createElement("h1");
      titleEl.classList.add("title");
      titleEl.textContent = this.textContent;
      var style = document.createElement("style");
      style.textContent = `.title{
        margin:0;
        margin-bottom:23px;
        font-size: 52px;
        line-height: 61px;
      }
      @media (min-width:768px){
        .title{
          margin-bottom:42px;
        }
      }`;

      shadow.appendChild(style);
      shadow.appendChild(titleEl);
    }
  }
  customElements.define("title-comp", Title);
}
