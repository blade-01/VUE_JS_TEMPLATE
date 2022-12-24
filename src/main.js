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

// Vue Select
import "vue-select/dist/vue-select.css";


const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(lazyPlugin, {
  loading:
    "https://res.cloudinary.com/bladencove/image/upload/v1655997367/RC/ezgif.com-gif-maker_1_vptsnn.gif",
  error: "https://c.tenor.com/hwe3vkln0_UAAAAC/error-x-error.gif",
});

app.mount("#app");
