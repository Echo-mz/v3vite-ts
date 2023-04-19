import { createApp } from "vue";
import router from "./router";
import App from "@/App.vue";
import ElementPlus from 'element-plus'
import { createPinia } from "pinia";
const pinia = createPinia();
const app = createApp(App);
// 1.2. use挂载
app.use(router).use(pinia).use(ElementPlus, {size: 'small', zIndex: 3000})
app.mount("#app");