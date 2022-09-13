import React, { useState } from 'react';
import { MockComponent } from '../mock-component/MockComponent';

export const PropDrilling = () => {
  const [propValue, setPropValue] = useState<{}>();

  return (
    <>
      <button onClick={() => setPropValue({})}>New prop value</button>
      <MockComponent mockProp={propValue} size={800}>
        <MockComponent mockProp={propValue} size={600} >
          <MockComponent mockProp={propValue} size={400}>
            <MockComponent mockProp={propValue} size={200}/>
          </MockComponent>
        </MockComponent>
      </MockComponent>
    </>
  );
};