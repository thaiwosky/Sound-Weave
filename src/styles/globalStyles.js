import {StyleSheet, Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export const {width, height} = Dimensions.get('window');

import {colors, darkModeColors, lightModeColors} from './colors';

export const globalStyles = StyleSheet.create({
  btnTouchWrapper: {
    backgroundColor: 'transparent',
    borderRadius: 100 / 2,
    height: hp(4),
    width: hp(4),
    justifyContent: 'center',
    alignItems: 'center',
  },
  //   alignments
  configureWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  // fonts
  regularFont: {
    fontFamily: 'Poppins-Regular',
  },
  boldFont: {
    fontFamily: 'Poppins-Bold',
  },
  semiBoldFont: {
    fontFamily: 'Poppins-SemiBold',
  },
  mediumFont: {
    fontFamily: 'Poppins-Medium',
  },
//   SHADOQ
  shadow:{
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
    elevation: 5,
  }
});
