import Shift from '@helpers/Shift';

/**
 * Takes first element from a union and returns the rest. Works with multiple unions
 *
 * @template T Union to shift
 */
type ShiftUnion<T> = T extends any[] ? Shift<T> : never;

export default ShiftUnion;
