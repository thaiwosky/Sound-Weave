import React, {useState, useContext} from 'react';

import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
// bottom tab
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//Notch Handler
import {ifIphoneX} from 'react-native-iphone-x-helper';
import FastImage from 'react-native-fast-image';

import {Context} from '../../App';
import {colors} from '../styles/colors';

import PlayNowScreen from '../screens/musicScreens/playNow';
import PlaylistScreen from '../screens/musicScreens/playlist';
import EqualizerScreen from '../screens/musicScreens/equalizer';
import { StackScreens } from './stack';



const Chat1 = () => {
  return (
    <View style={{backgroundColor: 'green', flex: 1}}>
      <Text>Chasandasbndkt</Text>
    </View>
  );
};

const Chat2 = () => {
  return (
    <View style={{backgroundColor: 'green', flex: 1}}>
      <Text>Chasandasbndkt</Text>
    </View>
  );
};
const Chat3 = () => {
  return (
    <View style={{backgroundColor: 'green', flex: 1}}>
      <Text>Chasandasbndkt</Text>
    </View>
  );
};

const Chat4 = () => {
  return (
    <View style={{backgroundColor: 'green', flex: 1}}>
      <Text>Chasandasbndkt</Text>
    </View>
  );
};
const Chat5 = () => {
  return (
    <View style={{backgroundColor: 'green', flex: 1}}>
      <Text>Chasandasbndkt</Text>
    </View>
  );
};

const Tab = createBottomTabNavigator();

export const  Navbar = ({navigation, route}) => {
  return (
    <Tab.Navigator
    initialRouteName={route.params.screenName}
    screenOptions={{
        tabBarShowLabel: false,
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
      }}>
      <Tab.Screen
        name="Music"
        component={StackScreens}
        initialParams={{ screenName: 'PlayNowScreen' }}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {focused ? (
                <View>
                  <View style={styles.iconCenter}>
                    <FastImage
                      source={require('../assets/icons/music-selected.png')}
                      resizeMode={'contain'}
                      style={{
                        height: hp(3),
                        width: hp(3),
                      }}
                    />
                  </View>
                </View>
              ) : (
                <View>
                  <View style={styles.iconCenter}>
                    <FastImage
                      source={require('../assets/icons/music.png')}
                      resizeMode={'contain'}
                      style={{
                        height: hp(3),
                        width: hp(3),
                      }}
                    />
                  </View>
                </View>
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Playlist"
        component={PlaylistScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {focused ? (
                <View>
                  <View style={styles.iconCenter}>
                    <FastImage
                      source={require('../assets/icons/playlist-selected.png')}
                      resizeMode={'contain'}
                      style={{
                        height: hp(3),
                        width: hp(3),
                      }}
                    />
                  </View>
                </View>
              ) : (
                <View>
                  <View style={styles.iconCenter}>
                    <FastImage
                      source={require('../assets/icons/playlist.png')}
                      resizeMode={'contain'}
                      style={{
                        height: hp(3),
                        width: hp(3),
                      }}
                    />
                  </View>
                </View>
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Equalizer"
        component={EqualizerScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {focused ? (
                <View>
                  <View style={styles.iconCenter}>
                    <FastImage
                      source={require('../assets/icons/equalizer-selected.png')}
                      resizeMode={'contain'}
                      style={{
                        height: hp(3),
                        width: hp(3),
                      }}
                    />
                  </View>
                </View>
              ) : (
                <View>
                  <View style={styles.iconCenter}>
                    <FastImage
                      source={require('../assets/icons/volumes.png')}
                      resizeMode={'contain'}
                      style={{
                        height: hp(3),
                        width: hp(3),
                      }}
                    />
                  </View>
                </View>
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={StackScreens}
        initialParams={{ screenName: 'SearchScreen' }}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {focused ? (
                <View>
                  <View style={styles.iconCenter}>
                    <FastImage
                      source={require('../assets/icons/search.png')}
                      resizeMode={'contain'}
                      style={{
                        height: hp(3),
                        width: hp(3),
                      }}
                    />
                  </View>
                </View>
              ) : (
                <View>
                  <View style={styles.iconCenter}>
                    <FastImage
                      source={require('../assets/icons/search.png')}
                      resizeMode={'contain'}
                      style={{
                        height: hp(3),
                        width: hp(3),
                      }}
                    />
                  </View>
                </View>
              )}
            </View>
          ),
        }}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault()
            navigation.navigate("SearchScreen")
          },
        })}
      />
      <Tab.Screen
        name="Watch"
        component={Chat1}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {focused ? (
                <View>
                  <View style={styles.iconCenter}>
                    <FastImage
                      source={require('../assets/icons/watch.png')}
                      resizeMode={'contain'}
                      style={{
                        height: hp(3),
                        width: hp(3),
                      }}
                    />
                  </View>
                </View>
              ) : (
                <View>
                  <View style={styles.iconCenter}>
                    <FastImage
                      source={require('../assets/icons/watch.png')}
                      resizeMode={'contain'}
                      style={{
                        height: hp(3),
                        width: hp(3),
                      }}
                    />
                  </View>
                </View>
              )}
            </View>
          ),
        }}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault()
            navigation.navigate("TimerScreen")
          },
        })}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconCenter: {
    alignSelf: 'center',
  },
});
