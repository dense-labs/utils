import {isMobile} from '../modules/tools'

/**
 * @param ele：需要绑定手写签名功能的 DOM 元素的选择器字符串。
 * @param autoFit：一个可选的布尔值，表示是否自动适应父容器的大小。默认值为 false。
 * @param width：一个可选的数字，表示签名画布的宽度，单位为像素。
 * @param height：一个可选的数字，表示签名画布的高度，单位为像素。
 * @param background：一个可选的字符串，表示签名画布的背景颜色。
 * @param lineWidth：一个可选的数字，表示签名笔画的宽度，单位为像素。
 * @param fontColor：一个可选的字符串，表示签名笔画的颜色。
 */
export type SignatureConfig = {
	ele: string
	autoFit?: boolean
	width?: number
	height?: number
	background?: string
	lineWidth?: number
	fontColor?: string
}

export class Signature {
	constructor(opt: SignatureConfig) {
		this.reset(opt)
		this.setEvent()
	}

	protected dom!: HTMLCanvasElement

	protected ctx!: CanvasRenderingContext2D

	// 返回base64 图片
	public getImg() {}

	public clear() {
		this.ctx.clearRect(0, 0, this.config.width, this.config.height)
	}

	getPNGImage() {
		return this.dom.toDataURL('image/png')
	}
	getJPGImage() {
		return this.dom.toDataURL('image/jpeg', 0.5)
	}

	protected renderState = false

	// 事件处理中心
	protected setEvent() {
		const mouseMove = (e: MouseEvent) => {
			const [x, y] = this.getOffsetTopByBody(e)
			this.ctx.lineTo(x, y)
			this.ctx.stroke()
		}
		this.dom.addEventListener('mousedown', (e) => {
			const [x, y] = this.getOffsetTopByBody(e)
			this.ctx.beginPath()
			this.ctx.moveTo(x, y)
			this.dom.addEventListener('mousemove', mouseMove)
		})
		// eslint-disable-next-line no-unused-vars
		this.dom.addEventListener('mouseup', (e) => {
			this.dom.removeEventListener('mousemove', mouseMove)
			this.ctx.closePath()
		})
	}

	// 计算位于边界距离
	protected getOffsetTopByBody(e: MouseEvent) {
		return [e.clientX - this.config.boxLeft, e.clientY - this.config.boxRight]
	}

	protected config = {
		boxLeft: 0,
		boxRight: 0,
		width: 0,
		height: 0
	}
	// 设置签名面板
	protected reset(opt: SignatureConfig) {
		if (typeof opt.ele === 'string') {
			this.dom = document.getElementById(opt.ele)! as HTMLCanvasElement
			this.ctx = this.dom.getContext('2d')!
			// s设置画布宽高
			this.dom.width = opt.width || 0
			this.dom.height = opt.height || 0
		}
		const {left, top} = this.dom.getBoundingClientRect()

		const selfStyle = window.getComputedStyle(this.dom, null)
		const self = {
			style: selfStyle,
			width: Number(selfStyle.width.replace('px', '')),
			height: Number(selfStyle.height.replace('px', ''))
		}

		this.config = {
			boxLeft: left,
			boxRight: top,
			width: self.width,
			height: self.height
		}

		const devicePixelRatio = window.devicePixelRatio
		if (devicePixelRatio) {
			this.dom.style.width = `${self.width}px`
			this.dom.style.height = `${self.height}px`
			this.dom.height = self.height * devicePixelRatio
			this.dom.width = self.width * devicePixelRatio
			this.ctx.scale(devicePixelRatio, devicePixelRatio)
		} else {
			this.dom.width = self.width
			this.dom.height = self.height
		}

		this.ctx.lineWidth = opt.lineWidth || 6
		this.ctx.strokeStyle = opt.fontColor || 'black'
		this.ctx.lineCap = 'round'
		this.ctx.lineJoin = 'round'

		// 解决移动端渲染性能问题
		if (!isMobile) {
			this.ctx.shadowBlur = 1
			this.ctx.shadowColor = opt.fontColor || 'black'
		}
	}
}
