import React from 'react';
import { MockComponent } from '../mock-component/MockComponent';
import { MockComponentWithContext } from '../mock-component/MockComponentWithContext';
import { ContextChildren } from './ContextChildren';


export const Context = () => {
  return (
    <ContextChildren>
      <MockComponent size={800}>
        <MockComponentWithContext size={600} >
          <MockComponent size={400}>
            <MockComponentWithContext size={200}/>
          </MockComponent>
        </MockComponentWithContext>
      </MockComponent>
    </ContextChildren>
  );
};