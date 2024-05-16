// TODO: Add types

type BFTypes = {
  _id: string;
  id: number;
  descripcion: string;
  __v: number;
}[];

export function BFTypesFormatter(types: BFTypes) {
  return types.map((type) => ({
    value: type.descripcion,
    label: type.descripcion,
  }));
}
