import {
  neutralColor as COLORLIST,
  textcolorDark as textcolor,
  backgroundColorDark as backgroundColor,
} from './common/color-board';
import { commonOption } from './common/option';

export default () => {
  let _option = commonOption({
    COLORLIST,
    textcolor: textcolor,
    backgroundColor,
  });
  return _option;
};
