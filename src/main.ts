import { createApp } from "vue"
import { createMetaManager } from 'vue-meta'
import App from "./App.vue"

const app = createApp(App)
const metaManager = createMetaManager()

app.use(metaManager)
app.mount("#app")