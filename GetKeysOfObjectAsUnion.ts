interface Test {
  id: number;
  name?: string;
  address: {
    id: number;
    index: number;
    street: string;
    city: string;
    isLiving: boolean;
  };
  work: {
    name: string;
    place: string;
    department: {
      depId: number;
      depName: string;
    }
  }
}

type PrefixKeys<T extends object, PREFIX extends string> = {
  [K in keyof T as `${PREFIX}.${string & K}`]: T[K]
};

type PrefixKeysDeep<T extends object> = {
  [K in keyof T]: T[K] extends object ? PrefixKeysDeep<PrefixKeys<T[K], string & K>> : T[K]
}

type FlattenKeys<T extends object> = {
  [K in keyof T]: T[K] extends object ? K | FlattenKeys<T[K]> : K
}[keyof T];

type GetKeys<T extends object> = FlattenKeys<PrefixKeysDeep<T>>

const keys: GetKeys<Test>[] = [
  'name',
  'address',
  'nonExists', // error
  'address.index',
  'address.isLiving',
  'address.nonExists', // error
  'work.name',
  'work.department.depId',
  'work.department.id', // error
];
