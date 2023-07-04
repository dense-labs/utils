<template>
	<div class="comments">
		<component
			v-if="isShow"
			src="https://giscus.app/client.js"
			:is="'script'"
			:key="title"
			:data-repo="gcConfig.repo"
			:data-repo-id="gcConfig.repoId"
			:data-category="gcConfig.category"
			:data-category-id="gcConfig.categoryId"
			:data-mapping="gcConfig.mapping"
			:data-strict="gcConfig.strict"
			:data-reactions-enabled="gcConfig.reactionsEnabled"
			:data-emit-metadata="gcConfig.emitMetadata"
			:data-input-position="gcConfig.inputPosition"
			:data-lang="gcConfig.lang"
			:data-theme="gcConfig.theme"
			:data-loading="gcConfig.loading"
		/>
	</div>
</template>
<script lang="ts" setup>
import {reactive, ref, watch} from 'vue'
import {useData, useRoute} from 'vitepress'
const route = useRoute()

const {title, isDark} = useData()

// params generate in https://giscus.app/zh-CN
const gcConfig = reactive({
    repo: 'dense-labs/utils',
    repoId: 'R_kgDOJUcvEQ',
    category: 'Show and tell',
    categoryId: 'DIC_kwDOJUcvEc4CXqSZ',
    mapping: 'pathname',
    strict: '0',
    reactionsEnabled: '1',
    emitMetadata: '0',
    inputPosition: 'bottom',
    theme: '',
    lang: 'zh-CN',
    crossorigin: 'anonymous',
    loading: 'lazy'
})
watch(
    () => isDark.value,
    (newIsDark, oldIsDark) => {
        isShow.value = false
		setTimeout(() => {
			isShow.value = true
            gcConfig.theme = newIsDark ? 'dark' : ''
		}, 10);
    }
)

const isShow = ref(true)
watch(
	() => route.path,
	() => {
		isShow.value = false
		setTimeout(() => {
			isShow.value = true
		}, 10);
	},
	{
		immediate: true
	}
)

</script>
<style>
/* // TODO 使用giscus自定义主题结合vitepress主题切换 */
.comments {
	background-color: #ffffff;
	padding: 20px;
	border-radius: 10px;
}
.dark .comments {
    background-color: #161618;
    margin-top: 20px;
}
</style>