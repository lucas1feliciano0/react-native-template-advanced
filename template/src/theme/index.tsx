import {DefaultTheme} from 'styled-components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const theme: DefaultTheme = {
  borderRadius: {
    small: 4,
    medium: 6,
    big: 8,
  },

  widthPercentage: wp,
  heightPercentage: hp,

  padding: {
    small: wp('1%'),
    medium: wp('3%'),
    big: wp('5%'),
    large: wp('12%'),
  },

  colors: {
    primary: '#FFFFFF',

    secondary: '#FFFFFF',

    danger: '#F769A2',
    success: '#5ED46A',
    info: '#5e9dd4',

    background: {
      primary: '#FDFDFF',
    },

    texts: {
      primary: '#525252',
      secondary: '#757575',
    },

    disabled: '#838B90',
  },
};

export default theme;
