import {describe, expect, test} from 'vitest'
import {imageUrlToBase64, base64ToBlob, fileToBase64, base64ToFile} from '../dist/index.mjs'

// describe('imageUrlToBase64', () => {
// 	test('converts image URL to Base64', async () => {
// 		const url = 'https://i.imgur.com/7CtSjzX.jpg'
// 		const result = await imageUrlToBase64(url)
// 		expect(result).toContain('data:image/jpeg;base64,')
// 	})
// 	test('throws error when image fails to load', async () => {
// 		const url = 'https://invalid-url'
// 		await expect(imageUrlToBase64(url)).rejects.toThrow('Failed to load image')
// 	})
// 	test('throws error when failed to convert image URL to Base64', async () => {
// 		const url = 'https://i.imgur.com/invalid.jpg'
// 		await expect(imageUrlToBase64(url)).rejects.toThrow('Failed to convert image URL to Base64')
// 	})
// })

// describe('base64ToBlob', () => {
// 	test('base64ToBlob should return a blob object with correct content type', () => {
// 		const base64Data = 'data:image/png;base64,iVBORw0KGg....'
// 		const contentType = 'image/png'
// 		const blob = base64ToBlob(base64Data, contentType)
// 		expect(blob).toBeInstanceOf(Blob)
// 		expect(blob.type).toBe(contentType)
// 	})
// 	test('base64ToBlob should return a blob object with empty content type if not provided', () => {
// 		const base64Data = 'data:image/png;base64,iVBORw0KGg....'
// 		const blob = base64ToBlob(base64Data)
// 		expect(blob).toBeInstanceOf(Blob)
// 		expect(blob.type).toBe('')
// 	})
// })

// describe('fileToBase64', () => {
// 	test('should return a base64 string', async () => {
// 		const file = new File(['hello world'], 'hello.txt', {type: 'text/plain'})
// 		const result = await fileToBase64(file)
// 		expect(typeof result).toBe('string')
// 		expect(result).toMatch(/^data:[a-z]+\/[a-z]+;base64,[a-zA-Z0-9+/]+={0,2}$/)
// 	})
// 	test('should throw an error when file is not provided', async () => {
// 		await expect(fileToBase64(null)).rejects.toThrow(TypeError)
// 	})
// 	test('should throw an error when file type is not supported', async () => {
// 		const file = new File(['hello world'], 'hello.txt', {type: 'text/html'})
// 		await expect(fileToBase64(file)).rejects.toThrow(Error)
// 	})
// 	test('should handle large files', async () => {
// 		const file = new File([new Uint8Array(10 * 1024 * 1024)], 'large.bin', {type: 'application/octet-stream'})
// 		const result = await fileToBase64(file)
// 		expect(result.length).toBeGreaterThan(10 * 1024 * 1024)
// 	})
// })
describe('base64ToFile', () => {
	test('should throw an error if base64 data is empty', async () => {
		const base64 = ''
		const filename = 'test.txt'
		await expect(base64ToFile(base64, filename)).rejects.toThrow()
	})
	test('should throw an error if filename is empty', async () => {
		const base64 = 'SGVsbG8gV29ybGQ=' // "Hello World" in base64
		const filename = ''
		await expect(base64ToFile(base64, filename)).rejects.toThrow()
	})
})
