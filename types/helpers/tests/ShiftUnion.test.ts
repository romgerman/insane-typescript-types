import ShiftUnion from "@helpers/ShiftUnion";

// $ExpectType [2, 3, 4]
type ShiftUnionByOne = ShiftUnion<[1, 2, 3, 4]>;

// $ExpectType [2] | [4]
type ShiftMultiUnion = ShiftUnion<[1, 2] | [3, 4]>;

// $ExpectType []
type ShiftEmptyUnion = ShiftUnion<[]>;
