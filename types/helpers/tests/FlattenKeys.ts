import FlattenKeys from '@helpers/FlattenKeys';

interface Test {
  a: number;
  b: {
    a: boolean;
    c: string;
  }
}

const T: Array<FlattenKeys<Test>> = [
  'a',
  'b',
  'c',
  'd', // $ExpectError
  'b.a', // $ExpectError
]
