import Split from '@helpers/Split';
import ShiftUnion from '@helpers/ShiftUnion';

/**
 * Require some fields from an object recursive
 *
 * @template T Object to process
 * @template P Union of fields to require
 */
type RequireFields<T, P extends string> = T extends object
  ? (
    Omit<T, Extract<keyof T, Split<P[0], ".">[0]>> & Required<{
      [K in Extract<keyof T, Split<P[0], ".">[0]>]: RequireFields<T[K], ShiftUnion<P>[number]>
    }>
  ) : T;

export default RequireFields;
