export function init() {
  class Input extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      var shadow = this.attachShadow({ mode: "open" });

      const cont = document.createElement("div");
      cont.classList.add("conteiner");

      const label = document.createElement("label");
      label.classList.add("label");
      label.textContent = this.textContent;

      const input = document.createElement("input");
      input.classList.add("input");
      input.setAttribute("placeholder", this.getAttribute("placeholder"));

      const style = document.createElement("style");
      style.textContent = `.conteiner{
      text-align:left;
      display:flex;
      flex-direction:column;
      }
      .label{
        font-size: 18px;
        line-height: 21px;
        
      }
      .input{
        margin-bottom: 16px;
        border-radius: 4px;
        border: 2px solid #000000;
        height: 55px;
        font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 21px;
      }`;

      cont.appendChild(label);
      cont.appendChild(input);
      shadow.appendChild(style);
      shadow.appendChild(cont);
    }
  }
  customElements.define("input-comp", Input);
}
