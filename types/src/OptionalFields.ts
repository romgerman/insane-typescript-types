/**
 * Takes out only optional fields (marked as ?) from a type. Works with nested types
 *
 * @template T Type to process
 */
type OptionalFields<T> = {
  [K in keyof T as (T[K] extends Required<T>[K] ? never : K)]: T[K] extends object | undefined
  ? OptionalFields<T[K]>
  : T[K];
};

export default OptionalFields;
