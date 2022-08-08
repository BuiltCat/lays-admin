import { createApp } from 'vue';
import pinia from './store';
import router from './router';
import App from './App.vue';
import i18n from './locale';

import 'vfonts/Lato.css';
import 'vfonts/FiraCode.css';
import 'uno.css';

const app = createApp(App);
app.use(pinia);
app.use(router);
app.use(i18n);
app.mount('#app');
