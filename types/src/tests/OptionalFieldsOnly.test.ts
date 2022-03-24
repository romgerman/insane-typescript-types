import { OptionalFieldsOnly } from '../RequireSomeOfFields';

interface Rec1 {
  key1: string;
  key2?: string;
  key3?: string;
}

type Expand<T> = T extends object
  ? T extends infer O ? { [K in keyof O]: Expand<O[K]> } : never
  : T;

const test1: OptionalFieldsOnly<Rec1> = {
  key1: 'test', // $ExpectError
  key2: 'test',
  key3: 'test',
}

interface Rec2 {
  key1: string;
  nested?: {
    nkey1: string;
    nkey2?: string;
  }
}

const test2: OptionalFieldsOnly<Rec2> = {
  nested: {
    nkey1: 'test', // $ExpectError
    nkey2: 'test',
  }
}

interface Rec3 {
  key1: string;
  nested: {
    nkey1: string;
    nkey2?: string;
  }
}

const test3: OptionalFieldsOnly<Rec3> = {
  nested: {} // TODO $ExpectError
}

interface Rec4 {
  key1: string;
  nested?: {
    nkey1: string;
    doubleNested?: {
        nnkey: string;
        nnkek?: string;
    }
  }
}

const test4: OptionalFieldsOnly<Rec4> = {
  nested: {
    doubleNested: {
      nnkey: 'test', // $ExpectError
      nnkek: 'test',
    }
  }
}
