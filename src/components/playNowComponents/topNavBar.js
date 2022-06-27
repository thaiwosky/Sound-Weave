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
import PlayNowComponent from './playNowComponents';
import TrackComponent from './tracksComponents';
import ArtistComponent from './artistComponents';
import FolderComponent from './folders';
import AlbumComponent from './albumsComponet';
import GenresComponent from './genres';
import AlbumArtistComponent from './albumArtist';

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
const PlayNowTopBar = () => {
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
        <Tab.Screen name="Play Now" component={PlayNowComponent} />
        <Tab.Screen name="Tracks" component={TrackComponent} />
        <Tab.Screen name="Artists" component={ArtistComponent} />
        <Tab.Screen name="Folders" component={FolderComponent} />
        <Tab.Screen name="Albums" component={AlbumComponent} />
        <Tab.Screen name="Generes" component={GenresComponent} />
        <Tab.Screen name="Albums Artist" component={AlbumArtistComponent} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});

export default PlayNowTopBar;
