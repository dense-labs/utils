import {describe, it, expect} from 'vitest'
import {sleep} from '../dist/index.mjs'
describe('sleep', () => {
	it('waits for a specific amount of time before resolving the promise', async () => {
		const ms = 1000
		const start = Date.now()
		await sleep(ms)
		const end = Date.now()
		expect(end - start).toBeGreaterThanOrEqual(ms)
	})
})
