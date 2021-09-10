import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import GlobalComponent from './components/Week7/GlobalComponent.vue' //For Week 7, task 1


// Mounting the GlobalComponent using .component('name', component) 
createApp(App).use(router).component('GlobalComponent', GlobalComponent).mount('#app');