import React, {useState, useEffect} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';

import {NavigationContainer, useNavigation} from '@react-navigation/native';

import {colors} from './src/styles/colors';
import {lightModeColors} from './src/styles/colors';
import {darkModeColors} from './src/styles/colors';

import SplashScreen from './src/screens/splashScreen';
import WelcomeScreen from './src/screens/welcomeScreen';
import {Navbar} from './src/navigation/bottomNavBar';
import {StackScreens} from './src/navigation/stack';
import {SoundDrawer} from './src/navigation/drawer/drawer';
import {globalStyles, width} from './src/styles/globalStyles';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import FastImage from 'react-native-fast-image';
globalStyles;
export const Context = React.createContext();

const App = () => {
  const [play, setPlay] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState('light');
  const [splash, setSplash] = useState(true);
  const [soundPremission, setSoundPremission] = useState(false);
  const [customRoute, setCustomRoute] = useState('');
  const colorScheme = useColorScheme();
  
  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 1500);
  }, []);
  return (
    <NavigationContainer
      theme={{
        colors: {
          background:
            isDarkMode == 'dark'
              ? darkModeColors.background
              : lightModeColors.background,
        },
      }}>
      <Context.Provider
        value={{
          isDarkMode,
          soundPremission,
          setSoundPremission,
          customRoute,
          setCustomRoute,
          setIsDarkMode

        }}>
        <View style={{flex: 1}}>
          {splash ? (
            <SplashScreen />
          ) : soundPremission ? (
            <View style={{flex: 1}}>
              <SoundDrawer />
              <View style={styles.playerWrapper}>
                <FastImage
                  resizeMode={FastImage.resizeMode.contain}
                  source={require('./src/assets/images/music.png')}
                  style={{
                    height: hp(8),
                    width: hp(8),
                    marginTop: hp(-1),
                  }}
                />
                <View style={styles.nameAndTrackWrapper}>
                  <Text
                    style={[
                      styles.trackName,
                      {
                        color:
                          isDarkMode == 'dark' ? colors.white : '#00000090',
                      },
                    ]}>
                    Fly Away
                  </Text>
                  <Text
                    style={[
                      styles.track,
                      {
                        color:
                          isDarkMode == 'dark' ? colors.white : '#00000090',
                      },
                    ]}>
                    Tones and I
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    setPlay(!play);
                  }}>
                  <FastImage
                    resizeMode={FastImage.resizeMode.contain}
                    source={
                      play
                        ? require('./src/assets/icons/player-resume.png')
                        : require('./src/assets/icons/player-pause.png')
                    }
                    style={{
                      height: hp(3),
                      width: hp(3),
                      marginRight: wp(5),
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <WelcomeScreen />
          )}
        </View>
      </Context.Provider>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  playerWrapper: {
    backgroundColor: '#178435',
    width: width,
    height: hp(8),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  trackName: {
    ...globalStyles.semiBoldFont,
    fontSize: Platform.OS === 'ios' ? hp(1.6) : hp(1.8),
    color: '#00000090',
  },
  track: {
    ...globalStyles.semiBoldFont,
    fontSize: Platform.OS === 'ios' ? hp(1.3) : hp(1.5),
    color: '#00000070',
  },
});
export default App;
