import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { setActivePinia } from 'pinia'

import BlockViewer from '@/components/BlockViewer.vue';
import Aura from '@primevue/themes/aura';
import PrimeVue from 'primevue/config';
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';

import '@/assets/styles.scss';
import '@/assets/tailwind.css';
import { definePreset } from '@primevue/themes';

import {StoreController} from "./controllers";
import moment from "moment";

const app = createApp(App);

app.use(router);

const MyPreset = definePreset(Aura, {
    semantic: {
        primary: {
            50: '{blue.50}',
            100: '{blue.100}',
            200: '{blue.200}',
            300: '{blue.300}',
            400: '{blue.400}',
            500: '{blue.500}',
            600: '{blue.600}',
            700: '{blue.700}',
            800: '{blue.800}',
            900: '{blue.900}',
            950: '{blue.950}'
        }
    }
});
app.use(PrimeVue, {
    theme: {
        preset: MyPreset,
        options: {
            darkModeSelector: '.app-dark'
        }
    }
});
app.use(ToastService);
app.use(ConfirmationService);

app.component('BlockViewer', BlockViewer);

const storeController = StoreController.getInstance();
const store = storeController.getStore()
app.use(store);
setActivePinia(store)

moment.updateLocale('en', {
    week: {
        dow: 1, // Monday is the first day of the week
        doy: 4  // The week that contains Jan 4th is the first week of the year
    }
});

console.log(moment('2023-07-10').week()); // This is a Monday
console.log(moment('2023-07-09').week()); // This is a Sunday

app.mount('#app');
