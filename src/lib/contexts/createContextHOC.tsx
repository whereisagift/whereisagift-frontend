import { type ComponentType } from "react";

import { createContextAndHooks } from "./createContextAndHooks";
import type { ContextHOCTuple, InferComponentType, Selector } from "./types";

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

  const withContext = <P,>(Component: ComponentType<P>) =>
    ((props: P) => {
      const contextState = useContextState();

      return (
        <Context.Provider value={contextState}>
          {/* @ts-expect-error какая-то ошибка передачи пропсов - пофиксим, когда потребуется */}
          <Component {...props} />
        </Context.Provider>
      );
    }) as InferComponentType<P>;

  return [withContext, ...hooks];
}
