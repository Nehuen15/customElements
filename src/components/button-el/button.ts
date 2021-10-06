export function init() {
  class Button extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      var shadow = this.attachShadow({ mode: "open" });

      var contEl = document.createElement("div");
      contEl.classList.add("conteiner");

      var buttonEl = document.createElement("button");
      buttonEl.classList.add("button");
      buttonEl.textContent = this.textContent;

      var style = document.createElement("style");
      style.textContent = `.button{
        font-family: "Roboto",sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 22px;
        line-height: 26px;
        background-color:#9CBBE9;
        width:100%;
        height:100%;
        border:0;
        border-radius: 4px;
        padding:0;
        cursor: pointer;
      }

      .conteiner{
        height:55px
      }`;

      shadow.appendChild(style);
      contEl.appendChild(buttonEl);
      shadow.appendChild(contEl);
    }
  }
  customElements.define("button-comp", Button);
}
