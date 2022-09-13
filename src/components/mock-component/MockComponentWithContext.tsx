import React, { PropsWithChildren, useContext } from 'react';
import { MockComponent } from './MockComponent';
import { MockContext } from './MockContext';

export const MockComponentWithContext = (props: PropsWithChildren<{size: number}>) => {
  const { size, children } = props;
  const contextValue = useContext(MockContext);
  return (
    <>
      <MockComponent size={size} mockProp={contextValue}>
        <span>I use the context!</span>
        {children}
      </MockComponent>
    </>
  );
};