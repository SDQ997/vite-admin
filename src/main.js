import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
const app = createApp(App)
import store from '@/store/index.ts'

// element-ui
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
app.use(ElementPlus)
// element-ui 图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// 语言切换
import lang from "@/components/lang/index.vue"
app.component("lang",lang)

// 路由
import router from "@/router/index.ts"
app.use(router)

// 国际化
import i18n from "@/language/index.ts"
app.use(i18n)

// vuex
app.config.globalProperties.$store = store

// 动态路由
import { menuList } from "@/api/menu/menu.ts"
menuList().then(res=>{
  router.addRoute(res[0])
})

app.mount('#app')
