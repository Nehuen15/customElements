export function init() {
  class TextLarge extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      var shadow = this.attachShadow({ mode: "open" });

      var textEl = document.createElement("p");
      textEl.textContent = this.textContent;
      textEl.classList.add("text");

      var style = document.createElement("style");
      style.textContent = `.text{
        text-align: center;
        margin:0px;
        margin-bottom:110px;
        margin-top:110px;
        max-width:274px;
        font-size: 22px;
        line-height: 26px;
      }
      @media (min-width:768px){
.text{max-width:505px;}
      }
      `;

      shadow.appendChild(style);
      shadow.appendChild(textEl);
    }
  }
  customElements.define("text-large-comp", TextLarge);
}
