// Selector can extract any value

import { ComponentType, Context, FC, JSX, PropsWithChildren } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Selector<Value> = (value: Value) => any;

type SelectorHooks<Selectors> = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [K in keyof Selectors]: () => Selectors[K] extends (...args: any[]) => infer R
    ? R
    : never;
};

export type Hooks<
  Value,
  Selectors extends Selector<Value>[],
> = Selectors["length"] extends 0 ? [() => Value] : SelectorHooks<Selectors>;

export type ContextHOCTuple<Value, Selectors extends Selector<Value>[]> = [
  // Component can have any props
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  <P extends Record<string, any>>(
    Component: ComponentType<PropsWithChildren<P>>,
  ) => (props: P) => JSX.Element,
  ...Hooks<Value, Selectors>,
];

export type ContextProviderTuple<Value, Selectors extends Selector<Value>[]> = [
  FunctionComponentWithContext<Value, PropsWithChildren<unknown>>,
  ...Hooks<Value, Selectors>,
];
export type ContextProviderTupleWithProps<
  Value,
  Selectors extends Selector<Value>[],
  ProviderProps,
> = [
  FunctionComponentWithContext<Value, PropsWithChildren<ProviderProps>>,
  ...Hooks<Value, Selectors>,
];

export type ContextAndHooks<Value, Selectors extends Selector<Value>[]> = [
  Context<Value>,
  Hooks<Value, Selectors>,
];

export interface FunctionComponentWithContext<T, P = unknown> extends FC<P> {
  Context: Context<T>;
}
