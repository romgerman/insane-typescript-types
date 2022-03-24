// Minimum TypeScript Version: 4.1
import { FlattenKeys } from '@helpers/FlattenKeys';
import { PrefixKeysDeep } from '@helpers/PrefixKeys';

/**
 * Get all keys as union, with prefixed by parent object keys
 *
 * @template T Object to collect keys from
 */
export type GetKeysOfObjectAsUnion<T extends object> = FlattenKeys<PrefixKeysDeep<T>>;

export default GetKeysOfObjectAsUnion;
