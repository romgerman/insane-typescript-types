/**
 * Collect all keys as union, with any nested objects
 *
 * @template T Object to collect keys from
 */
export type FlattenKeys<T extends object> = {
  [K in keyof T]: T[K] extends object ? K | FlattenKeys<T[K]> : K
}[keyof T];
