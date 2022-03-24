import Expand from '@helpers/Expand';

interface Test {
  a: number;
  b: {
    c: boolean
  }
}

// $ExpectType Test
type T1 = Test;

// $ExpectType { a: number; b: { c: boolean; }; }
type T2 = Expand<Test>;
