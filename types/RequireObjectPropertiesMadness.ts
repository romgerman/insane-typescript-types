type OptionalFieldsOnly<T> = {
  [K in keyof T as (T[K] extends Required<T>[K] ? never : K)]: T[K] extends object | undefined 
      ? OptionalFieldsOnly<T[K]> 
      : T[K];
}

type Shift<T extends any[]> = ((...t: T) => any) extends ((
first: any,
...rest: infer Rest
) => any)
? Rest
: never;

type Test_Shift_HasValues = Shift<['1', '2', '3']>;
type Test_Shift_Empty = Shift<[]>;

type ShiftUnion<T> = T extends any[] ? Shift<T> : never;

type Test_ShiftUnion_NotEmpty = ShiftUnion<["props1", "props2", "props3"]>;
type Test_ShiftUnion_Double = ShiftUnion<["first", "props2", "prop3"] | ["second", "prop2"]>;

type Split<S extends string, D extends string> =
  string extends S ? string[] :
  S extends '' ? [] :
  S extends `${infer T}${D}${infer U}` ? [T, ...Split<U, D>] : [S];

type Test_Split_NotEmpty = Split<"prop1.prop2.prop3", ".">;
type Test_Split_Empty = Split<"", ".">;

type SO_DeepRequired<T, P extends string[]> = T extends object
? (Omit<T, Extract<keyof T, P[0]>> &
    Required<
      {
        [K in Extract<keyof T, P[0]>]: NonNullable<
          SO_DeepRequired<T[K], ShiftUnion<P>>
        >
      }
    >)
: T;

type ArrayHasElements<T> = T extends any[] ? T[number] : never;

type Test_ArrayHasElements_True = ArrayHasElements<["hello world"]>;
type Test_ArrayHasElements_False = ArrayHasElements<[]>;

type RequireSomeOfFields<T, P extends string> = T extends object
? (
  Omit<T, Extract<keyof T, Split<P[0], ".">[0]>> & Required<{
    [K in Extract<keyof T, Split<P[0], ".">[0]>]: RequireSomeOfFields<T[K], ShiftUnion<P>[number]>
  }>
) : T;
// DeepRequired<T, Split<ShiftUnion<P>[0], ".">>;

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

type OptionalRec = OptionalFieldsOnly<Rec>;

const data: OptionalRec = {
  key1: 'poop',
  key2: 'moop',
  key3: '#ERROR',
  keyNonExist: '#ERROR',
  nestedReq: {
      kk1: '#ERROR',
  },
  nested: {
      nkey1: 'peep',
      nkey2: '#ERROR',
      keyNonExist: '#ERROR',
      doubleNested: {
          nnkey: 'boop',
          nnkek: '#ERROR'
          keyNonExist: '#ERROR',
      }
  }
};

type SomeRequired = RequireSomeOfFields<OptionalRec, "key1" | "key2" | "nested" | "nested.nkey1">

const data2: SomeRequired = {
  key1: "",
  key2: "",
  nested: {
    nkey1: "",
  }
};