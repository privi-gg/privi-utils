export type Primitive = string | number | symbol;

export type NestedObjectOf<T> = {
  [K: Primitive]: T | NestedObjectOf<T> | NestedArrayOf<T>;
};

export type NestedArrayOf<T> = Array<T | NestedArrayOf<T> | NestedObjectOf<T>>;
