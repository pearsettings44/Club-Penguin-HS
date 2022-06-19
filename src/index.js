import { renderAnnouncementBar } from "./functions/announcementBar";
import { renderNav } from "./functions/navbar";
import { renderSpacer } from "./functions/spacer";
import { renderStore } from "./functions/store";

/* Main div, contains everything */
const maindiv = document.getElementById("content");
renderAnnouncementBar();
renderNav();
renderSpacer();
renderStore();
export { maindiv };
