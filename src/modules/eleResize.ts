interface ResizeHandler {
	handler: (e: Event) => void
	context: any
}

interface ResizeOptions {
	onResize?: (e: Event) => void
	onRemove?: () => void
}
interface HTMLObjectElement {
	__resizeElement__?: Element
}

/**
 * 监听一个元素大小是否改变了
 * @param ele Element
  const targetEle = document.getElementById('target-ele');
     const resizableEle = new ResizableElement(targetEle);
    resizableEle.on({
        onResize: (e: Event) => {
            console.log('Element resized!');
        }
    });
 * @returns viod
 */
class ResizableElement {
	private _ele: HTMLElement
	private _resizeTrigger?: HTMLObjectElement
	private _resizeHandlers: ResizeHandler[] = []

	constructor(ele: HTMLElement) {
		this._ele = ele
		if (getComputedStyle(ele, null).position === 'static') {
			ele.style.position = 'relative'
		}
		this.createResizeTrigger()
	}

	public on(options: ResizeOptions): void {
		let {onResize} = options
		if (onResize) {
			this._resizeHandlers.push({
				handler: onResize,
				context: this
			})
		}
	}

	public off(options: ResizeOptions): void {
		let {onRemove} = options
		if (onRemove) {
			onRemove()
		}
	}

	private createResizeTrigger(): void {
		let obj = document.createElement('object')
		obj.setAttribute('style', 'display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden;opacity: 0; pointer-events: none; z-index: -1;')
		obj.onload = this.handleObjectLoad.bind(this)
		obj.type = 'text/html'
		this._ele.appendChild(obj)
		obj.data = 'about:blank'
		this._resizeTrigger = obj
		this._resizeTrigger.__resizeElement__ = this._ele
	}

	private handleObjectLoad(): void {
		let trigger = this._resizeTrigger!
		;(window as any).__resizeTrigger__ = trigger.__resizeElement__
		trigger.contentDocument!.defaultView!.addEventListener('resize', this.handleResize.bind(this))
	}

	private handleResize(e: Event): void {
		// let trigger = this._resizeTrigger!
		let handlers = this._resizeHandlers
		if (handlers) {
			let size = handlers.length
			for (let i = 0; i < size; i++) {
				let h = handlers[i]
				let handler = h.handler
				let context = h.context
				handler.apply(context, [e])
			}
		}
	}
}
