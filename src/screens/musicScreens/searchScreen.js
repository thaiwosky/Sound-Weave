import React, {useContext} from 'react';
import {Image, StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput} from 'react-native';
import FastImage from 'react-native-fast-image';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {colors} from '../../styles/colors';
import {lightModeColors} from '../../styles/colors';
import {darkModeColors} from '../../styles/colors';

import {Context} from '../../../App';
import {LIGHT_APP_LOGO, DARK_APP_LOGO} from '../../services/constants';
import {globalStyles, width} from '../../styles/globalStyles';
import PlaylistTopBar from '../../components/playlistComponents/topNavBar';



const SearchScreen = ({navigation}) => {
  const {isDarkMode} = useContext(Context);
  
  
  let search = isDarkMode == 'dark' ? require('../../assets/icons/search-dark.png') : require('../../assets/icons/search-light.png')
  let arrow = isDarkMode == 'dark' ? require('../../assets/icons/arrow-dark.png') : require('../../assets/icons/arrow-light.png')
  
  return (
    <SafeAreaView style={[styles.container,{
       backgroundColor: isDarkMode == 'dark' ? darkModeColors.background : lightModeColors.background,
      
    }]}>
        <View style={styles.header} >
            <TouchableOpacity onPress={()=>{navigation.goBack()}} >
                <FastImage
                    source={arrow}
                    resizeMode={FastImage.resizeMode.contain}
                    style={{
                        height:hp(2),
                        width:hp(2)
                    }}
                />
            </TouchableOpacity>
            <View style={styles.customField} >
                <TextInput
                    placeholder='Tracks, Album, Artists'
                    style={styles.field}
                    placeholderTextColor={isDarkMode == 'dark' ? "#ffffff80" : "#00000080"}
                />
                 <FastImage
                    source={search}
                    resizeMode={FastImage.resizeMode.contain}
                    style={{
                        height:hp(2),
                        width:hp(2)
                    }}
                />
            </View>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height:hp(100),
  },
  header:{
    flexDirection:'row',
    paddingHorizontal:wp(6),
    alignItems:"center",
    borderBottomWidth:1,
   paddingVertical:hp(2),
  },
  customField:{
      flexDirection:'row',
      justifyContent:"space-between",
        paddingHorizontal:wp(5),
        backgroundColor:"#3C434434",
        paddingVertical:Platform.OS === 'ios' ? hp(1.5) : null,
         borderRadius:hp(1),
        marginHorizontal:wp(2),
        alignItems:'center'
       
  },
  field:{
      width:wp(65)
  }
  
});

export default SearchScreen;
