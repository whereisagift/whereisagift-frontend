import { type PropsWithChildren } from "react";

import { createContextAndHooks } from "./createContextAndHooks";
import type {
  ContextProviderTuple,
  ContextProviderTupleWithProps,
  FunctionComponentWithContext,
  Selector,
} from "./types";

export function createContextProvider<
  Value,
  Selectors extends Selector<Value>[],
  ProviderProps,
>(
  useContextState: (providerProps: ProviderProps) => Value,
  initialValue: Value,
  ...selectors: Selectors
): ContextProviderTupleWithProps<Value, Selectors, ProviderProps>;
export function createContextProvider<
  Value,
  Selectors extends Selector<Value>[],
>(
  useContextState: () => Value,
  initialValue: Value,
  ...selectors: Selectors
): ContextProviderTuple<Value, Selectors>;
export function createContextProvider(
  useContextState: (value: unknown) => unknown,
  initialValue: unknown,
  // eslint-disable-next-line
  ...selectors: any[]
) {
  const [Context, hooks] = createContextAndHooks(
    useContextState,
    selectors,
    initialValue,
  );
  const Provider: FunctionComponentWithContext<
    unknown,
    PropsWithChildren<unknown>
  > = ({ children, ...providerProps }) => {
    const contextState = useContextState(providerProps);

    return <Context.Provider value={contextState}>{children}</Context.Provider>;
  };

  Provider.Context = Context;

  return [Provider, ...hooks];
}
