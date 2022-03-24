import PrefixKeys, { PrefixKeysDeep } from '@helpers/PrefixKeys';
import Expand from '@helpers/Expand';

interface Test1 {
  a: number;
  b: {
    c: string;
  }
}

// $ExpectType { "PRE.a": number; "PRE.b": { c: string; }; }
type T1 = Expand<PrefixKeys<Test1, 'PRE'>>;

interface Test2 {
  a: number;
  b: {
    c: string;
    d: {
      e: boolean;
    }
  }
}

// $ExpectType { a: number; b: { "b.c": string; "b.d": { "b.d.e": boolean; }; }; }
type T2 = Expand<PrefixKeysDeep<Test2>>;
