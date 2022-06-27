import React, {useLayoutEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/welcomeScreen';
import {Navbar} from './bottomNavBar';
import PlayNowScreen from '../screens/musicScreens/playNow';
const Stack = createNativeStackNavigator();
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import SearchScreen from '../screens/musicScreens/searchScreen';
import TimerScreen from '../screens/musicScreens/timerScreen';
import {colors} from '../styles/colors';
import SettingScreen from '../screens/musicScreens/settings';
import AppearanceScreen from '../screens/musicScreens/appearance';
export const StackScreens = ({navigation, route}) => {
  const tabHiddenRoutes = ['SearchScreen', 'TimerScreen','AppearanceScreen','SettingScreen'];
  useLayoutEffect(() => {
    if (tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))) {
      navigation.setOptions({tabBarStyle: {display: 'none'}});
    } else {
      navigation.setOptions({
        tabBarStyle: {
          // ...ifIphoneX(
          //   {
          //     height: hp(6),

          //   },
          //   {
          //     height: hp(7),
          //   },
          // ),
          backgroundColor: colors.primary,
        },
      });
    }
  }, [navigation, route]);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={route.params.screenName}>
      <Stack.Screen name={'PlayNowScreen'} component={PlayNowScreen} />
      <Stack.Screen name={'SearchScreen'} component={SearchScreen} />
      <Stack.Screen name={'TimerScreen'} component={TimerScreen} />
      <Stack.Screen name={'SettingScreen'} component={SettingScreen} />
      <Stack.Screen name={'AppearanceScreen'} component={AppearanceScreen} />
    </Stack.Navigator>
  );
};
