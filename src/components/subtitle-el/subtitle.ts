export function init() {
  class Subtitle extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      var shadow = this.attachShadow({ mode: "open" });
      var subtitleEl = document.createElement("h2");
      subtitleEl.classList.add("subtitle");
      subtitleEl.textContent = this.textContent;

      var style = document.createElement("style");
      style.textContent = `.subtitle{
        margin:0;
        margin-bottom:33px;
        font-size: 38px;
        line-height: 45px;
      }`;

      shadow.appendChild(style);
      shadow.appendChild(subtitleEl);
    }
  }
  customElements.define("subtitle-comp", Subtitle);
}
