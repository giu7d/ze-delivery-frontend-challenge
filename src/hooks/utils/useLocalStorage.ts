export function useLocalStorage(key: string) {
  const persistStorageData = (data: any) =>
    localStorage.setItem(key, JSON.stringify(data))

  const clearStorageData = () => localStorage.removeItem(key)

  const getStorageData = () => {
    const storedData = localStorage.getItem(key)

    if (!storedData) return []

    return JSON.parse(storedData)
  }

  return {
    persistStorageData,
    getStorageData,
    clearStorageData
  }
}
