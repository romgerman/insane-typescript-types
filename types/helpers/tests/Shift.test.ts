import Shift from "@helpers/Shift";

// $ExpectType [2, 3, 4]
type ShiftUnionByOne = Shift<[1, 2, 3, 4]>;

// $ExpectType []
type ShiftEmptyUnion = Shift<[]>;

// $ExpectError
type ShiftUnsupportedType = Shift<string>;
