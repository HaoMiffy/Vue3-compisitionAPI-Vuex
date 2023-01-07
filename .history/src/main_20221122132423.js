import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import uploader from 'vue-simple-uploader'

createApp(App).use(store).use(uploader).mount('#app')
