import RequireFields from '@/RequireFields';
import OptionalFields from '@/OptionalFields';

interface Rec {
  key1?: string;
  key2?: string;
  key3: string;
  nestedReq: {
    kk1: string;
  }
  nested?: {
    nkey1?: string;
    nkey2: string;

    doubleNested?: {
      nnkey: string;
      nnkek?: string;
    }
  }
}

type SomeRequired = RequireFields<OptionalFields<Rec>, "key1" | "key2" | "nested" | "nested.nkey1">

// it wont trigger error in TODO-lines, but it will after removing errors in nested properties
const data2: SomeRequired = {
  key1: "",
  key2: "",
  key3: '', // TODO $ExpectError
  nested: {
    nkey1: "",
    nkey2: "", // TODO $ExpectError
    doubleNested: {
      nnkey: '', // $ExpectError
      nnkek: '',
    }
  }
};
