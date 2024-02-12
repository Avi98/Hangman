export type expandedTypeRecursively<T> = T extends object
  ? T extends infer O
    ? { [K in keyof O]: expandedTypeRecursively<O[K]> }
    : never
  : T;

type Mutate<S> = S extends object
  ? { -readonly [K in keyof S]: Mutate<S[K]> }
  : S extends boolean
    ? boolean
    : S extends string
      ? string
      : S;

type Immutable<S> = { readonly [K in keyof S]: Immutable<S[K]> };

export type ExtractType<S> = expandedTypeRecursively<Immutable<Mutate<S>>>;
