import Example2View from "./Example2View";
import useExample2 from "./useExample2";
import { withHook } from './../../utils/withHook';

const Example2 = withHook(useExample2, Example2View);
export default Example2;