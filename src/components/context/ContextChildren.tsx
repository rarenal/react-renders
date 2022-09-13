import React, { PropsWithChildren, useState } from 'react';
import { MockContext } from '../mock-component/MockContext';

export const ContextChildren = (props: PropsWithChildren) => {
  const { children } = props;
  const [value, setValue] = useState<{}>({});

  return (
    <>
      <button onClick={() => setValue({})}>New context value</button>
      <MockContext.Provider value={value}>
        {children}
      </MockContext.Provider>
    </>
  );
};