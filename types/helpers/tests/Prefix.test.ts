import PrefixKeys, { PrefixKeysDeep } from '@helpers/PrefixKeys';
import Expand from '@helpers/Expand';

interface Test {
  a: number;
  b: {
    c: string;
  }
}

// $ExpectType { "PRE.a": number; "PRE.b": { c: string; }; }
type T1 = Expand<PrefixKeys<Test, 'PRE'>>;
