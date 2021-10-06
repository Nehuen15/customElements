export function init() {
  class BodyText extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      var shadow = this.attachShadow({ mode: "open" });

      var text = document.createElement("p");
      text.textContent = this.textContent;
      text.classList.add("text");

      var style = document.createElement("style");
      style.textContent = `.text{
        margin:0;
        margin-bottom:33px;
font-size: 18px;
line-height: 21px;
      }
      @media(min-widht:768px){
        .text{
          margin-bottom: 42px
        }
      }`;
      shadow.appendChild(style);
      shadow.appendChild(text);
    }
  }
  customElements.define("body-text-comp", BodyText);
}
