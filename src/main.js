import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import { createToast } from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import '../src/assets/css/main.css';

const app = createApp(App);

// Register plugins
app.use(router);
// app.use(BootstrapVue);
// app.use(BootstrapVueIcons);
app.use(createToast);

// Mount the app
app.mount('#app');
