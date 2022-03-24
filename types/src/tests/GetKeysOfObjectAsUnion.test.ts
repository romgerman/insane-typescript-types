import GetKeysOfObjectAsUnion from '@/GetKeysOfObjectAsUnion';

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

const keys: Array<GetKeysOfObjectAsUnion<Test>> = [
  'name',
  'address',
  'nonExists', // $ExpectError
  'address.index',
  'address.isLiving',
  'address.nonExists', // $ExpectError
  'work.name',
  'work.department.depId',
  'work.department.id', // $ExpectError
];
