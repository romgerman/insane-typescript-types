// Minimum TypeScript Version: 4.1
import { PrefixKeysDeep } from '@helpers/PrefixKeys';

// collect all keys as union, with any nested objects
export type FlattenKeys<T extends object> = {
  [K in keyof T]: T[K] extends object ? K | FlattenKeys<T[K]> : K
}[keyof T];

// get all keys as union, with prefixed by parent object keys
export type GetKeysOfObjectAsUnion<T extends object> = FlattenKeys<PrefixKeysDeep<T>>;

export default GetKeysOfObjectAsUnion;
