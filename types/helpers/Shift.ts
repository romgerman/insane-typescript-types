/**
 * Takes a first element from a union and returns the rest
 *
 * @template T Union to shift
 */
type Shift<T extends any[]> = ((...t: T) => any) extends ((
  first: any,
  ...rest: infer Rest
) => any)
  ? Rest
  : never;

export default Shift;
