
import { type Theme } from "vitepress"
import DefaultTheme from "vitepress/theme"
import './style/var.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
/* 暗黑主题样式 */
import 'element-plus/theme-chalk/dark/css-vars.css'
const theme: Theme = {
    ...DefaultTheme,
    enhanceApp({app}) {
        app.use(ElementPlus)
    }
}

export default theme