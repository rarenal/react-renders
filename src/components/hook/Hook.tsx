import { MockComponent } from '../mock-component/MockComponent';
import { MockComponentWithHook } from '../mock-component/MockComponentWithHook';
import { HookChildren } from './HookChildren';


export const Hook = () => {
  return (
    <HookChildren>
      <MockComponent size={800}>
        <MockComponentWithHook size={600} >
          <MockComponentWithHook size={400}>
            <MockComponent size={200}/>
          </MockComponentWithHook>
        </MockComponentWithHook>
      </MockComponent>
    </HookChildren>
  );
};