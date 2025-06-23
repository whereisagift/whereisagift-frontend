import React, { ComponentType } from "react";

import { createContextAndHooks } from "./createContextAndHooks";
import type { ContextHOCTuple, Selector } from "./types";

export function createContextHOC<Value, Selectors extends Selector<Value>[]>(
  useContextState: () => Value,
  initialValue: Value,
  ...selectors: Selectors
): ContextHOCTuple<Value, Selectors> {
  const [Context, hooks] = createContextAndHooks(
    useContextState,
    selectors,
    initialValue,
  );

  const withContext =
    <P extends Record<string, unknown>>(
      Component: ComponentType<React.PropsWithChildren<P>>,
    ) =>
    // eslint-disable-next-line react/display-name
    (props: P) => {
      const contextState = useContextState();

      return (
        <Context.Provider value={contextState}>
          <Component {...props} />
        </Context.Provider>
      );
    };

  return [withContext, ...hooks];
}
