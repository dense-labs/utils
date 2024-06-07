/**
 * 判断给定的元素是否包含指定的 class。
 * @param obj 要判断的元素。
 * @param cls 要查找的 class 名称。
 * @returns 如果元素包含指定的 class，则返回 true；否则返回 false。
 */
export const hasClass = function (obj: Element, cls: string): boolean {
	return obj && obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)')) !== null
}

/**
 * 给指定的元素添加指定的 class。
 * @param obj 要添加 class 的元素。
 * @param cls 要添加的 class 名称。
 */
export const addClass = function (obj: Element, cls: string): void {
	if (!hasClass(obj, cls)) {
		obj.className += ' ' + cls
	}
}

/**
 * 从指定的元素中移除指定的 class。
 * @param obj 要移除 class 的元素。
 * @param cls 要移除的 class 名称。
 */
export const removeClass = function (obj: Element, cls: string): void {
	if (hasClass(obj, cls)) {
		const reg = new RegExp('(\\s|^)' + cls + '(\\s|$)')
		obj.className = obj.className.replace(reg, ' ')
	}
}

/**
 * 切换指定元素的 class，如果元素包含指定的 class，则移除该 class；否则添加该 class。
 * @param obj 要切换 class 的元素。
 * @param cls 要切换的 class 名称。
 */
export const toggleClass = function (obj: Element, cls: string): void {
	if (hasClass(obj, cls)) {
		removeClass(obj, cls)
	} else {
		addClass(obj, cls)
	}
}

/**
 * 获取滚动条的宽度。
 * @returns 返回滚动条的宽度。
 */
let scrollBarWidth: number | undefined
export const getScrollBarWidth = function (): number {
	if (scrollBarWidth !== undefined) return scrollBarWidth

	const outer = document.createElement('div')
	outer.className = 'scrollbar__wrap'
	outer.style.visibility = 'hidden'
	outer.style.width = '100px'
	outer.style.position = 'absolute'
	outer.style.top = '-9999px'
	document.body.appendChild(outer)

	const widthNoScroll = outer.offsetWidth
	outer.style.overflow = 'scroll'

	const inner = document.createElement('div')
	inner.style.width = '100%'
	outer.appendChild(inner)

	const widthWithScroll = inner.offsetWidth
	outer.parentNode?.removeChild(outer)
	scrollBarWidth = widthNoScroll - widthWithScroll

	return scrollBarWidth
}

/**
 * 获取指定元素的所有类名。
 * @param element 要获取类名的元素。
 * @returns 包含元素所有类名的字符串数组。
 */
export function getClass(element: HTMLElement): string[] {
	return element.className.split(' ').filter(Boolean)
}

/**
 * 获取视频第一帧封面图
 * @param {url = '', currentTime = 0}
 * @returns 返回base64格式的图片数据
 */
export const getFirstFrame = ({url = '', currentTime = 0}: {url: string; currentTime?: number}): Promise<string> => {
	return new Promise((resolve) => {
		const video = document.createElement('video')
		const canvas = document.createElement('canvas')
		const ctx = canvas.getContext('2d')
		video.src = url
		video.style.cssText = 'position: fixed; top: -100%; left: -100%; width: 400px; display: none; visibility: hidden;'
		video.controls = true
		video.crossOrigin = 'Anonymous'
		video.currentTime = currentTime
		video.addEventListener('loadedmetadata', function () {
			// 确保视频已加载元数据后绘制第一帧
			canvas.width = video.videoWidth // 设置canvas的宽度和高度
			canvas.height = video.videoHeight
			// 绘制视频的第一帧到Canvas
			ctx && ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
			// 从Canvas获取第一帧的图像
			const firstFrame = canvas.toDataURL('image/png')
			// 将第一帧显示到img元素中
			resolve(firstFrame)
		})
		resolve('')
	})
}
