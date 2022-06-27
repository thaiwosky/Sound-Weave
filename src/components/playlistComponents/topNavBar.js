import React, {useContext} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {Context} from '../../../App';
import {colors, darkModeColors, lightModeColors} from '../../styles/colors';
import {globalStyles, height, width} from '../../styles/globalStyles';
import PlaylistComponent from './playlists';
import FavoriteComponent from './favorite';
import RecentlyAddedComponent from './recentlyAdded';
import MostPlayedComponent from './mostPlayed';
import RecentlyPlayedComponent from './recentlyPlayed';


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
const Tab = createMaterialTopTabNavigator();
const PlaylistTopBar = () => {
  const {isDarkMode} = useContext(Context);
  return (
    <SafeAreaView style={styles.container}>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor:
              isDarkMode == 'dark'
                ? darkModeColors.background
                : lightModeColors.background,
            elevation: 0,

            shadowOpacity: 0,
            borderBottomColor: isDarkMode == 'dark' ? '#3C4344' : colors.black,
            borderBottomWidth: 2,
          },
          tabBarContentContainerStyle: {
            marginVertical: -8,
            marginTop: hp(0.5),
          },
          tabBarLabelStyle: {
            fontSize: hp(1.5),
            marginHorizontal: -2,
            fontFamily: 'Poppins-Bold',
            textTransform: 'capitalize',

            color: isDarkMode == 'dark' ? colors.white : colors.black,
          },
          tabBarIndicatorStyle: {
            borderBottomColor:
              isDarkMode == 'dark' ? colors.white : colors.black,
            borderWidth: 1,
          },
          tabBarItemStyle: {
            width: wp(27),
          },
          tabBarScrollEnabled: true,
        
        }}>
        <Tab.Screen name="Playlist" component={PlaylistComponent} />
        <Tab.Screen name="Favorite" component={FavoriteComponent} />
        <Tab.Screen name="Recently Added " component={RecentlyAddedComponent} />
        <Tab.Screen name="Most Played" component={MostPlayedComponent} />
        <Tab.Screen name="Recently Played" component={RecentlyPlayedComponent} />

      </Tab.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});

export default PlaylistTopBar;
