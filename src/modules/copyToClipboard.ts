/**
 * 复制文本到剪贴板
 * @param text 要复制到剪贴板的文本
 * @returns 返回一个 Promise<boolean> 类型的值，表示复制操作是否成功
 */
export async function copyToClipboard(text: string): Promise<boolean> {
	if (navigator.clipboard) {
		try {
			await navigator.clipboard.writeText(text)
			console.log('Text copied to clipboard')
			return true
		} catch (err) {
			console.error('Error copying text: ', err)
			return false
		}
	} else {
		const textArea = document.createElement('textarea')
		textArea.value = text
		textArea.style.position = 'fixed'
		textArea.style.position = 'absolute'
		textArea.style.left = '-9999px'
		document.body.appendChild(textArea)
		textArea.focus()
		textArea.select()
		try {
			const successful = document.execCommand('copy')
			document.body.removeChild(textArea)
			if (successful) {
				console.log('Text copied to clipboard')
				return true
			} else {
				console.error('Unable to copy text to clipboard')
				return false
			}
		} catch (err) {
			console.error('Error copying text: ', err)
			return false
		}
	}
}

/**
 * 从剪贴板中获取文本并返回该文本
 * @returns 返回一个 Promise<string> 类型的值，表示获取操作是否成功以及获取到的文本
 */
export async function pasteFromClipboard(): Promise<string> {
	if (navigator.clipboard) {
		try {
			const text = await navigator.clipboard.readText()
			console.log('Text pasted from clipboard')
			return text
		} catch (err) {
			console.error('Error pasting text: ', err)
			return ''
		}
	} else {
		const textArea = document.createElement('textarea')
		textArea.style.position = 'fixed'
		textArea.style.position = 'fixed'
		textArea.style.position = 'absolute'
		textArea.style.left = '-9999px'
		document.body.appendChild(textArea)
		textArea.focus()
		try {
			const successful = document.execCommand('paste')
			document.body.removeChild(textArea)
			if (successful) {
				const text = textArea.value
				console.log('Text pasted from clipboard')
				return text
			} else {
				console.error('Unable to paste text from clipboard')
				return ''
			}
		} catch (err) {
			console.error('Error pasting text: ', err)
			return ''
		}
	}
}
