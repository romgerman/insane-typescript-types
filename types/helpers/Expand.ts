/**
 * Recursively expand type to primitive types.
 *
 * @typeParam T - Type to expand
 */
type Expand<T> = T extends object
  ? T extends infer O ? { [K in keyof O]: Expand<O[K]> } : never
  : T;
