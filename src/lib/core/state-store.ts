export interface StateStore {
  readonly map: Map<string, any>
  clear(): void
  getOrCreate<T>(key: string, create: () => T): T
  create<T>(key: string, value: T): void
}

export const StateStore: StateStore = {
  map: new Map(),
  clear() {
    if (this.map) {
      this.map.clear()
    }
  },
  getOrCreate<T>(key: string, create: () => T): T {
    let value = this.map.get(key)
    if (value == undefined) {
      value = create()
      this.map.set(key, value)
    }
    return value
  },
  create<T>(key: string, value: T) {
    this.map.set(key, value)
  }
}
