import { scienceColor as COLORLIST, textcolor } from './common/color-board';
import { commonOption } from './common/option';

export default () => {
  let _option = commonOption({ COLORLIST, textcolor: textcolor });
  return _option;
};
