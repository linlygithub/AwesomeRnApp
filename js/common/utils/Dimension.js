/**
 * Created by Administrator on 2017/7/25.
 */
import {PixelRati, Dimensions} from 'react-native';

const px2dp = (px) => {
  return px / PixelRatio.get();
};

const scale = Dimensions.get('window').width / 375;

export default scale;