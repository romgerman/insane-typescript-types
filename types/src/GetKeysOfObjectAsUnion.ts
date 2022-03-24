// Minimum TypeScript Version: 4.1

// prefix keys of object with PREFIX
export type PrefixKeys<T extends object, PREFIX extends string> = {
  [K in keyof T as `${PREFIX}.${string & K}`]: T[K]
};

// prefix nested object keys with parent key name
export type PrefixKeysDeep<T extends object> = {
  [K in keyof T]: T[K] extends object ? PrefixKeysDeep<PrefixKeys<T[K], string & K>> : T[K]
}

// collect all keys as union, with any nested objects
export type FlattenKeys<T extends object> = {
  [K in keyof T]: T[K] extends object ? K | FlattenKeys<T[K]> : K
}[keyof T];

// get all keys as union, with prefixed by parent object keys
export type GetKeysOfObjectAsUnion<T extends object> = FlattenKeys<PrefixKeysDeep<T>>;

export default GetKeysOfObjectAsUnion;
