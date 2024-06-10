import { createApp } from "vue";
import "./style.scss";
import App from "./App.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCirclePlus,
  faCalendar,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import router from "./router";

library.add(faCirclePlus, faCalendar, faTrash);

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
