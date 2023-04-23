export type ExLocalStorageItem = {
	value: string
	expireTime?: number
}

export class ExLocalStorage {
	private static readonly STORAGE_PREFIX = '__ex_local_storage_'

	private static getStorageKey(key: string) {
		return `${ExLocalStorage.STORAGE_PREFIX}${key}`
	}

	setItem(key: string, value: string, expireTime?: number) {
		const item: ExLocalStorageItem = {value}
		if (expireTime) {
			item.expireTime = Date.now() + expireTime
		}
		localStorage.setItem(ExLocalStorage.getStorageKey(key), JSON.stringify(item))
	}

	getItem(key: string): string | null {
		const itemStr = localStorage.getItem(ExLocalStorage.getStorageKey(key))
		if (!itemStr) return null

		const item: ExLocalStorageItem = JSON.parse(itemStr)
		if (Date.now() > item.expireTime) {
			localStorage.removeItem(ExLocalStorage.getStorageKey(key))
			return null
		}

		return item.value
	}

	removeItem(key: string) {
		localStorage.removeItem(ExLocalStorage.getStorageKey(key))
	}

	clear() {
		localStorage.clear()
	}
}

export function storageLocal() {
	return new ExLocalStorage()
}
