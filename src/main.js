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
// 设置icon
import installIcon from '@/utils/plusIcon.ts'
app.use(installIcon)
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

// 可视化组件
import datavBox from "@/components/datavBox/index.vue"
app.component("datavBox",datavBox)

// 富文本组件
import Editor from "@/components/Editor/index.vue"
app.component("Editor",Editor)

// 推拽区域组件
import DropZone from "@/components/DropZone/index.vue"
app.component("DropZone",DropZone)

app.mount('#app')
