/**
 * Prefix keys of object with some label
 *
 * @template T Object to prefix keys
 * @template PREFIX Label to add as prefix in key names
 */
type PrefixKeys<T extends object, PREFIX extends string> = {
  [K in keyof T as `${PREFIX}.${string & K}`]: T[K]
};

/**
 * Prefix nested object keys with parent key name
 *
 * @template T Object to transform
 */
type PrefixKeysDeep<T extends object> = {
  [K in keyof T]: T[K] extends object ? PrefixKeysDeep<PrefixKeys<T[K], string & K>> : T[K]
}

export { PrefixKeysDeep };
export default PrefixKeys;
