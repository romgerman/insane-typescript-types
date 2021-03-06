import OptionalFields from "@/OptionalFields";

interface Rec1 {
  key1: string;
  key2?: string;
  key3?: string;
}

const test1: OptionalFields<Rec1> = {
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

const test2: OptionalFields<Rec2> = {
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

const test3: OptionalFields<Rec3> = {
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

const test4: OptionalFields<Rec4> = {
  nested: {
    doubleNested: {
      nnkey: 'test', // $ExpectError
      nnkek: 'test',
    }
  }
}
