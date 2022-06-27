import React, {useContext} from 'react';
import {Image, StyleSheet, Text, View, SafeAreaView} from 'react-native';
import FastImage from 'react-native-fast-image';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {colors} from '../styles/colors';
import {lightModeColors} from '../styles/colors';
import {darkModeColors} from '../styles/colors';

import {Context} from '../../App';
import {LIGHT_APP_LOGO, DARK_APP_LOGO} from '../services/constants';
import {width} from '../styles/globalStyles';

const SplashScreen = () => {
  const {isDarkMode} = useContext(Context);
  console.log('ISDARK', isDarkMode);
  return (
    <View style={styles.container}>
      <FastImage
        source={isDarkMode == 'dark' ? DARK_APP_LOGO : LIGHT_APP_LOGO}
        resizeMode={FastImage.resizeMode.contain}
        style={{
          height: Platform.OS === 'ios' ? hp(20) : hp(22),
          width: Platform.OS === 'ios' ? hp(20) : hp(22),
        }}
      />
      {/* ARC */}
      <FastImage
        source={require('../assets/images/arc.png')}
        resizeMode={FastImage.resizeMode.cover}
        style={styles.arcWrapper}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  arcWrapper: {
    height: hp(58),
    width: width,
    position: 'absolute',
    bottom: 0,
  },
});

export default SplashScreen;
