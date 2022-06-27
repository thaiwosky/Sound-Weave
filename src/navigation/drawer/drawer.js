import React, {useContext} from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,

} from 'react-native-responsive-screen';
import {colors, darkModeColors} from '../../styles/colors';
import {Navbar} from '../bottomNavBar';
import {CustomDrawer} from './customDrawer';

import {Context} from '../../../App';
import SettingScreen from '../../screens/musicScreens/settings';
import { useNavigation, } from '@react-navigation/native';
import { StackScreens } from '../stack';
const Drawer = createDrawerNavigator();
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

export const SoundDrawer = (props) => {
  const navigation = useNavigation()
  const {isDarkMode, } = useContext(Context);

  return (  
    <Drawer.Navigator
      initialRouteName='Library'    
      useLegacyImplementation={true}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: isDarkMode == 'dark' ? '#00000080':'#C4C4C4',
        drawerItemStyle:{          
         borderTopRightRadius:hp(2),
         borderBottomRightRadius:hp(2),
            width:wp(55)
         },
         drawerStyle:{
          width:wp(70),
         }
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="Library"
        component={Navbar}
        initialParams={{screenName:'Library'}}
        options={{
          title: ({focused, size}) => (
            <View style={[styles.drawerItemStyle,{
                
            }]} >
              <Text style={[styles.drawerLabelStyle,{
                color: isDarkMode == 'dark' ? colors.white : '#00000080',
                
            }]} >Library</Text>
                {focused ? <View style={styles.borderContent} /> : null}
            </View>
          ),
        }}
      />
      <Drawer.Screen 
        name="Playlist" 
        component={Navbar} 
        initialParams={{screenName:'Playlist'}}
        options={{
            title: ({focused, size}) => (
              <View style={[styles.drawerItemStyle,{
                  
              }]} >
                <Text style={[styles.drawerLabelStyle,{
                  color: isDarkMode == 'dark' ? colors.white : '#00000080',
                  
              }]} >Playlist</Text>
                  {focused ? <View style={styles.borderContent} /> : null}
              </View>
            ),
          }}    
          />
            <Drawer.Screen 
        name="Equalizer" 
        component={Navbar} 
        initialParams={{screenName:'Equalizer'}}
        options={{
            title: ({focused, size}) => (
              <View style={[styles.drawerItemStyle,{
                  
              }]} >
                <Text style={[styles.drawerLabelStyle,{
                  color: isDarkMode == 'dark' ? colors.white : '#00000080',
                  
              }]} >Equalizer</Text>
                  {focused ? <View style={styles.borderContent} /> : null}
              </View>
            ),
          }}    
          />
            <Drawer.Screen 
        name="Settings" 
        component={StackScreens} 
        initialParams={{screenName:'SettingScreen'}}
        options={{
            title: ({focused, size}) => (
              <View style={[styles.drawerItemStyle,{
                  
              }]} >
                <Text style={[styles.drawerLabelStyle,{
                  color: isDarkMode == 'dark' ? colors.white : '#00000080',
                  
              }]} >Settings</Text>
                  {focused ? <View style={styles.borderContent} /> : null}
              </View>
            ),
          }}    
          />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerLabelStyle: {
    fontFamily: 'Poppins-Regular',
    fontSize: hp(1.7),
    // marginTop: hp(0.1),
    marginLeft: wp(4),

  },
drawerItemStyle:{
    
        borderTopRightRadius:hp(2),
        borderBottomRightRadius:hp(2),

        },
        borderContent:{
            height:Platform.OS === 'ios' ?  hp(6) : hp(7),
            width:wp(2),
            backgroundColor:colors.primary,
            position:'absolute',
            left:0,
            marginLeft:wp(-2),
            marginTop:hp(-2)
        }
});
