/**
 * Splits a string by a delimiter. Returns a union of strings
 *
 * @template S Input string
 * @template D Delimiter string
 */
type Split<S extends string, D extends string> =
  string extends S ? string[] :
  S extends '' ? [] :
  S extends `${infer T}${D}${infer U}` ? [T, ...Split<U, D>] : [S];

export default Split;
