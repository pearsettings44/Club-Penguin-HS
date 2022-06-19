import { renderAnnouncementBar } from "./functions/announcementBar";
import { renderNav } from "./functions/navbar";

/* Main div, contains everything */
const maindiv = document.getElementById("content");
renderAnnouncementBar();
renderNav();
export { maindiv };
