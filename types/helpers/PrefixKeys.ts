// prefix keys of object with PREFIX
type PrefixKeys<T extends object, PREFIX extends string> = {
  [K in keyof T as `${PREFIX}.${string & K}`]: T[K]
};

// prefix nested object keys with parent key name
type PrefixKeysDeep<T extends object> = {
  [K in keyof T]: T[K] extends object ? PrefixKeysDeep<PrefixKeys<T[K], string & K>> : T[K]
}

export { PrefixKeysDeep };
export default PrefixKeys;
