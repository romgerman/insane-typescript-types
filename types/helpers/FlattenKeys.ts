/**
 * Collect all keys as union. Works with nested objects
 *
 * @template T Object to collect keys from
 */
type FlattenKeys<T extends object> = {
  [K in keyof T]: T[K] extends object ? K | FlattenKeys<T[K]> : K
}[keyof T];

export default FlattenKeys;
