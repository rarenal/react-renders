import { useState } from 'react';

export const useHook = () => {
  const [state, setState] = useState<{}>();

  const setter = () => {
    setState({});
  }

  return {
    getter: state,
    setter,
  }
}