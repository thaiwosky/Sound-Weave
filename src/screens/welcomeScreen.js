import React, {useContext} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
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
import {globalStyles, width} from '../styles/globalStyles';

const WelcomeScreen = ({navigation}) => {
  const {isDarkMode,  soundPremission, setSoundPremission} = useContext(Context);

  return (
    <ImageBackground
      style={styles.container}
      source={require('../assets/images/bgWelcome.png')}
      resizeMode={'cover'}>
      {/* PREMISSION LABELS */}
      <View>
        <FastImage
          source={require('../assets/images/logo.png')}
          resizeMode={FastImage.resizeMode.contain}
          style={{
            height: Platform.OS === 'ios' ? hp(28) : hp(30),
            width: Platform.OS === 'ios' ? hp(28) : hp(30),
            alignSelf: 'center',
            marginVertical: hp(-10),
          }}
        />
        <Text style={styles.title}>
          Welcome, to start we first{'\n'}need your permission
        </Text>
        <Text style={styles.subLine}>
          The Read and Write Storage permission is required to{'\n'}read, edit
          audio files and covers properly.
        </Text>
      </View>
      {/* BTN */}
      <View>
        <TouchableOpacity
          style={[
            styles.btnWrapper,
            {
              backgroundColor:
                isDarkMode == 'dark'
                  ? darkModeColors.background
                  : lightModeColors.background,
            },
          ]}
          onPress={()=>setSoundPremission(true)}  
        >
          <View
            style={[
              styles.tickWrapper,
              {
                borderWidth: isDarkMode == 'dark' ? null : 1,
                borderColor: isDarkMode == 'dark' ? null : '#00000030',
              },
            ]}>
            <FastImage
              source={require('../assets/icons/tick.png')}
              resizeMode={FastImage.resizeMode.contain}
              style={{height: hp(2), width: hp(2)}}
            />
          </View>
          <Text
            style={[
              styles.btnText,
              {
                color: isDarkMode == 'dark' ? colors.white : colors.black,
              },
            ]}>
            Grant Premission
          </Text>
        </TouchableOpacity>
      </View>
      {/* EXIT ARC */}
      <ImageBackground
        source={require('../assets/images/exitArc.png')}
        resizeMode={FastImage.resizeMode.contain}
        style={{
          height: hp(15),
          width: hp(15),
          position: 'absolute',
          bottom: hp(-2.4),
          right: 0,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity>
          <Text
            style={[
              styles.btnText,
              {
                color: isDarkMode == 'dark' ? colors.white : colors.black,
              },
            ]}>
            Exit
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    justifyContent: 'space-between',
    paddingTop: hp(8),
    paddingBottom: hp(15),
    
  },
  title: {
    textAlign: 'center',
    ...globalStyles.regularFont,
    fontSize: Platform.OS === 'ios' ? hp(2.3) : hp(2.5),
    paddingTop: hp(1),
    color: colors.white,
  },
  subLine: {
    textAlign: 'center',
    ...globalStyles.regularFont,
    fontSize: Platform.OS === 'ios' ? hp(1.4) : hp(1.6),
    color: colors.white,
  },
  tickWrapper: {
    height: hp(4),
    width: hp(4),
    borderRadius: 100 / 2,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnWrapper: {
    ...globalStyles.configureWrapper,
    alignSelf: 'center',
    paddingVertical: hp(1),
    width: wp(60),
    justifyContent: 'center',
    borderRadius: hp(2),
  },
  btnText: {
    ...globalStyles.mediumFont,
    fontSize: Platform.OS === 'ios' ? hp(1.6) : hp(1.8),
    paddingLeft: wp(5),
  },
  exitArcWrapper: {
    position: 'absolute',
    bottom: hp(-2.4),
    right: 0,
  },
});

export default WelcomeScreen;
