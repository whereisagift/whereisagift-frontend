import { createContext, useContext } from 'react';

import type { ContextAndHooks, Hooks, Selector } from './types';

export const createContextAndHooks = <
  Value,
  Selectors extends Selector<Value>[],
>(
  useContextState: (...args: unknown[]) => unknown,
  selectors: Selectors,
  initialState: Value,
): ContextAndHooks<Value, Selectors> => {
  const Context = createContext(initialState);

  if (useContextState?.name) {
    Context.displayName = useContextState.name.substring(3);
  }

  const hooks = selectors.length
    ? // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      selectors.map((selector) => () => selector(useContext(Context)))
    : [() => useContext(Context)];

  return [Context, hooks as Hooks<Value, Selectors>];
};
