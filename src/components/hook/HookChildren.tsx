import React, { PropsWithChildren } from 'react';
import { useHook } from './useHook';

export const HookChildren = (props: PropsWithChildren) => {
  const { children } = props;
  const { setter } = useHook();

  return (
    <>
      <button onClick={() => setter()}>New hook value</button>
      {children}
    </>
  );
};