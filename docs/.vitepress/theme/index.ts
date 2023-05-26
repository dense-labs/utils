
import { type Theme } from "vitepress"
import DefaultTheme from "vitepress/theme"
import './style/var.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const theme: Theme = {
    ...DefaultTheme,
    enhanceApp({app}) {
        app.use(ElementPlus)
    }
}

export default theme