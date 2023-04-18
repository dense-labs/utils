class ResizableElement {
	ele: HTMLElement
	constructor(ele: HTMLElement) {
		this.ele = ele
		if (getComputedStyle(ele, null).position === 'static') {
			ele.style.position = 'relative'
		}
	}
}
export default ResizableElement
