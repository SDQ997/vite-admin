import { reactive , markRaw } from 'vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const dictIcon = markRaw({})
const installIcon = (app) => {
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
        dictIcon[key] = component
    }
    app.config.globalProperties.$icon = dictIcon
}

export default installIcon