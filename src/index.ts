import { init as initHeaderEl } from "./components/header-el/header";
import { init as initTitleEl } from "./components/title-el/title";
import { init as initSubtitleEl } from "./components/subtitle-el/subtitle";
import { init as initTextLargeEl } from "./components/text-large-el/text-large";
import { init as initBodyTextEl } from "./components/body-text-el/body-text";
import { init as initInputEl } from "./components/input-el/input";
import { init as initButtonEl } from "./components/button-el/button";
import { init as initButtonOutlinedEl } from "./components/button-outlined-el/button-outlined";
import { init as initFooterEl } from "./components/footer-el/footer";

(function main() {
  initHeaderEl();
  initTitleEl();
  initSubtitleEl();
  initTextLargeEl();
  initBodyTextEl();
  initInputEl();
  initButtonEl();
  initButtonOutlinedEl();
  initFooterEl();
})();
