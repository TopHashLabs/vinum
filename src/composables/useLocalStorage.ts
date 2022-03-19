export interface UseLocalStorage {
  getStorageItem(key: string): any
  setStorageItem(key: string, value: any): void
  removeStorageItem(key: string): void
}

export function useLocalStorage(): UseLocalStorage {
  function getStorageItem(key: string): any {
    try {
      const serializedData = localStorage.getItem(key)
      if (serializedData === null) {
        return undefined
      }

      return JSON.parse(serializedData)
    } catch (_) {
      return undefined
    }
  }

  function setStorageItem(key: string, value: any): void {
    try {
      const serializedData = JSON.stringify(value)
      localStorage.setItem(key, serializedData)
    } catch (err) {
      console.warn(err)
    }
  }

  function removeStorageItem(key: string): void {
    try {
      localStorage.removeItem(key)
    } catch (err) {
      console.warn(err)
    }
  }

  return { getStorageItem, setStorageItem, removeStorageItem }
}
