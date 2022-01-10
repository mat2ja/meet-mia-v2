import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';
import 'boxicons';

const app = createApp(App).use(router);

app.mount('#app');
