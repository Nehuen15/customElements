(function main() {
  class Test extends HTMLElement {
    constructor() {
      super();
      this.textContent = "constructor";
      // this.render();
    }
    render() {
      // var shadow = this.attachShadow({ mode: "open" });
    }
  }
  customElements.define("test-el", Test);
})();
