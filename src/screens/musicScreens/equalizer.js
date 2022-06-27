import React, {useContext} from 'react';
import {Image, StyleSheet, Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {colors} from '../../styles/colors';
import {lightModeColors} from '../../styles/colors';
import {darkModeColors} from '../../styles/colors';

import {Context} from '../../../App';
import {globalStyles, width} from '../../styles/globalStyles';
import EqualizerTopBar from '../../components/equalizerComponents/topNavbar';



const EqualizerScreen = ({navigation}) => {
  const {isDarkMode} = useContext(Context);
  
  let drawer = isDarkMode == 'dark' ? require('../../assets/icons/drawer-dark.png') : require('../../assets/icons/drawer-light.png')
  let search = isDarkMode == 'dark' ? require('../../assets/icons/search-dark.png') : require('../../assets/icons/search-light.png')
  let menu = isDarkMode == 'dark' ? require('../../assets/icons/menu-dark.png') : require('../../assets/icons/menu-light.png')
  
  return (
    <SafeAreaView style={[styles.container,{
       backgroundColor: isDarkMode == 'dark' ? darkModeColors.background : lightModeColors.background,
       
    }]}>
        {/* HEADER BAR - START */}
        <View style={[styles.headerWrapper, globalStyles.configureWrapper]} >
            <View style={globalStyles.configureWrapper}  >
                <TouchableOpacity onPress={()=>{navigation.toggleDrawer()}} >
                    <FastImage
                        source={drawer}
                        resizeMode={FastImage.resizeMode.contain}
                        style={{
                            height:Platform.OS === 'ios' ? hp(2.5) :hp(3),
                            width:Platform.OS === 'ios' ? hp(2.5) :hp(3),
                        }}
                    />
                </TouchableOpacity>
                <Text style={[styles.libraryText,{
                     color:isDarkMode == 'dark' ? colors.white : colors.black
                }]} >Equalizer</Text>
            </View>
            <View style={globalStyles.configureWrapper} >
                <TouchableOpacity>
                    <FastImage
                        source={search}
                        resizeMode={FastImage.resizeMode.contain}
                        style={{
                            height:Platform.OS === 'ios' ? hp(2.5) :hp(3),
                            width:Platform.OS === 'ios' ? hp(2.5) :hp(3),
                            marginRight:wp(4)
                        }}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <FastImage
                        source={menu}
                        resizeMode={FastImage.resizeMode.contain}
                        style={{
                            height:Platform.OS === 'ios' ? hp(2.5) :hp(3),
                            width:Platform.OS === 'ios' ? hp(2.5) :hp(3),
                        }}
                    />
                </TouchableOpacity>
            </View>
        </View>
         {/* HEADER BAR - END */}
         {/* TABS - PANEL */}
         <EqualizerTopBar/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height:hp(100),
  },
  headerWrapper:{
      justifyContent:'space-between',
      paddingHorizontal:wp(5),
      paddingTop:Platform.OS === 'ios' ? null:hp(1.5),
      paddingBottom:hp(1.5),
  },
  libraryText:{
      ...globalStyles.semiBoldFont,
      fontSize:Platform.OS === 'ios' ? hp(1.5) : hp(1.7),
      paddingLeft:wp(3)
  }
});

export default EqualizerScreen;
