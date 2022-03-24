/**
 * Recursively expand type to primitive types.
 *
 * @template T Type to expand
 *
 * {@link https://stackoverflow.com/a/57683652/11949901 Stackoverflow reference}
 */
type Expand<T> = T extends object
  ? T extends infer O ? { [K in keyof O]: Expand<O[K]> } : never
  : T;

export default Expand;
