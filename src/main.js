import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import '../src/assets/css/main.css';

const app = createApp(App);

app.use(Toast, options);
app.use(router);
app.use(BootstrapVue);
app.use(BootstrapVueIcons);
app.component('bootstrap-icon', BootstrapIcon);

app.mount('#app');
