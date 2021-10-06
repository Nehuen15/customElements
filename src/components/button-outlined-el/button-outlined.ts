export function init() {
  class ButtonOutlined extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      var shadow = this.attachShadow({ mode: "open" });
      var contEl = document.createElement("div");
      contEl.classList.add("conteiner");

      var buttonOutlinedEl = document.createElement("button");
      buttonOutlinedEl.classList.add("buttonOutlined");
      buttonOutlinedEl.textContent = this.textContent;

      var style = document.createElement("style");
      style.textContent = `.buttonOutlined{
        font-family: "Roboto",sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 22px;
        line-height: 26px;
        background-color:#ffffff;
width:100%;
        height:100%;
        border: 2px solid #000000;
        border-radius: 4px;
        padding:0;
        cursor: pointer;
      }

      .conteiner{
        height:55px
      }`;

      shadow.appendChild(style);
      contEl.appendChild(buttonOutlinedEl);
      shadow.appendChild(contEl);
    }
  }
  customElements.define("button-outlined-comp", ButtonOutlined);
}
