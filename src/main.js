import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

// Tailwind Styles
import './style.css'

// MDI Fonts
import "@mdi/font/css/materialdesignicons.css";

// Lazy Loaders
import lazyPlugin from "vue3-lazy";

// Phone number validator
import VueTelInput from "vue-tel-input";
import "vue-tel-input/dist/vue-tel-input.css";

// Vue Select
import "vue-select/dist/vue-select.css";

// Vue toastification and styles
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const options = {
  // Default toast options
  position: "top-right",
  timeout: 2000,
  closeOnClick: true,
  pauseOnFocusLoss: false,
  pauseOnHover: false,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  closeButton: "button",
  icon: true,
  rtl: false,
};

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(lazyPlugin, {
  loading:
  "https://res.cloudinary.com/bladencove/image/upload/v1655997367/RC/ezgif.com-gif-maker_1_vptsnn.gif",
  error: "https://c.tenor.com/hwe3vkln0_UAAAAC/error-x-error.gif",
});

app.use(Toast, options);

app.use(VueTelInput);

app.mount("#app");
