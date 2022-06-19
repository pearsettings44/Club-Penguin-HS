import { renderAnnouncementBar } from "./functions/announcementBar";
import { renderNav } from "./functions/navbar";
import { renderSpacer } from "./functions/spacer";

/* Main div, contains everything */
const maindiv = document.getElementById("content");
renderAnnouncementBar();
renderNav();
renderSpacer();
export { maindiv };
