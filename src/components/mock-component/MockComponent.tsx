import React, { PropsWithChildren, useRef } from 'react';
import styled, { css } from 'styled-components';

interface MockComponentProps {
  size: number;
  mockProp?: {};
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  border: 1px solid black;
  padding: 12px;
  ${(props: {width: number; height: number}) => css`
    width: ${props.width}px;
    height: ${props.height}px;
  `}
`;

export const MockComponent = (props: PropsWithChildren<MockComponentProps>) => {
  const { size, children } = props;
  const numberRef = useRef<HTMLSpanElement>(null);

  if (numberRef.current) {
    numberRef.current.innerHTML = `${Number(numberRef.current.innerHTML) + 1}` ?? 0
  }

  return (
    <StyledDiv width={size} height={size}>
      <span >re-rendered times:</span>
      <span ref={numberRef}>0</span>
      {children}
    </StyledDiv>
  );
};