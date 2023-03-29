// index.ts
import { createI18n } from 'vue-i18n';
import zh from './lang/zh/index';
import en from './lang/en/index';
import store from '../store';
const messages = {
  en,
  zh,
};
const language = store.getters.lang; // 这是获取浏览器的语言
const i18n = createI18n({
  locale: language, // 首先从缓存里拿，没有的话就用浏览器语言，
  fallbackLocale: 'zh', // 设置备用语言
  messages,
});

export default i18n;