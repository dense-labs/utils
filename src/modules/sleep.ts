/**
 * 返回一个在指定毫秒数后解决的 Promise。
 * @param ms 等待解决 Promise 的毫秒数。
 */
export const sleep = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms))
