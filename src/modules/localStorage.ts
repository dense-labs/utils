export type ExLocalStorageItem = {
	value: string
	expireTime?: number
}

export class ExLocalStorage {
	private static readonly STORAGE_PREFIX = '__ex_local_storage_'

	private static getStorageKey(key: string) {
		return `${ExLocalStorage.STORAGE_PREFIX}${key}`
	}

	static setItem(key: string, value: string, expireTime?: number) {
		const item: ExLocalStorageItem = {value}
		if (expireTime) {
			item.expireTime = Date.now() + expireTime
		}
		localStorage.setItem(ExLocalStorage.getStorageKey(key), JSON.stringify(item))
	}

	static getItem(key: string): string | null {
		const itemStr = localStorage.getItem(ExLocalStorage.getStorageKey(key))
		if (!itemStr) return null

		const item: ExLocalStorageItem = JSON.parse(itemStr)
		if (Date.now() > item.expireTime) {
			localStorage.removeItem(ExLocalStorage.getStorageKey(key))
			return null
		}

		return item.value
	}

	static removeItem(key: string) {
		localStorage.removeItem(ExLocalStorage.getStorageKey(key))
	}
}

export function storageLocal() {
	return new ExLocalStorage()
}
