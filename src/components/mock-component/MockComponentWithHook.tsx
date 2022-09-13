import React, { PropsWithChildren } from 'react';
import { useHook } from '../hook/useHook';
import { MockComponent } from './MockComponent';

export const MockComponentWithHook = (props: PropsWithChildren<{size: number}>) => {
  const { getter } = useHook();
  const { size, children } = props;

  console.log('hey');
  return (
    <>
      <MockComponent size={size} mockProp={getter}>
        <span>I use the hook!</span>
        {children}
      </MockComponent>
    </>
  );
};