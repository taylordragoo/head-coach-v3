import './assets/style.css'
import 'primeicons/primeicons.css'

import PrimeVue from 'primevue/config';
import {PrimeIcons} from "@primevue/core/api";
import App from './App.vue'
import Aura from '@primevue/themes/aura';
import StyleClass from 'primevue/styleclass';
import router from './router/index';

const app = createApp(App)

app.use(PrimeVue, {
  theme: {
    preset: Aura
  },
  plugins: [StyleClass]
});

app.use(router)
app.use(PrimeIcons);
app.directive('styleclass', StyleClass);

app.mount('#app')