import {h} from 'vue'
import type {Theme} from "vitepress"
import DefaultTheme from "vitepress/theme"
import './style/var.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import comment from '../components/comment.vue'
/* 暗黑主题样式 */
import 'element-plus/theme-chalk/dark/css-vars.css'
const theme: Theme = {
    ...DefaultTheme,
    Layout: () => {
		return h(DefaultTheme.Layout, null, {
			// https://vitepress.dev/guide/extending-default-theme#layout-slots
			'doc-after': () => h(comment)
		})
	},
    enhanceApp({app}) {
        app.component('Comment', comment);
        app.use(ElementPlus)
    }
}

export default theme