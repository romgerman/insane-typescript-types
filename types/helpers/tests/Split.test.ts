import Split from "@helpers/Split";

// $ExpectType ["hello", "world", "this", "is", "string"]
type SplitByDot = Split<'hello.world.this.is.string', '.'>;

// $ExpectType []
type SplitEmptyString = Split<'', '.'>;
