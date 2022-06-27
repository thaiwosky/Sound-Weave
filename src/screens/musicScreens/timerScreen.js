import React, {useContext, useState} from 'react';
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

import CheckBox from '@react-native-community/checkbox';

const TimerScreen = ({navigation}) => {
  const {isDarkMode} = useContext(Context);
  
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  let search = isDarkMode == 'dark' ? require('../../assets/icons/search-dark.png') : require('../../assets/icons/search-light.png')
  let arrow = isDarkMode == 'dark' ? require('../../assets/icons/arrow-dark.png') : require('../../assets/icons/arrow-light.png')
  
  return (
    <SafeAreaView style={[styles.container,{
       backgroundColor: isDarkMode == 'dark' ? darkModeColors.background : lightModeColors.background,
      
    }]}>
        {/* header */}
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
                <Text style={[styles.headerText,{
                    color:isDarkMode == 'dark' ? colors.white : colors.black
                }]} >Sleep Timer</Text>
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
        {/* BODY */}
        <View style={styles.bodyWrapper} >
          <View style={styles.minWrapper}>
          <Text style={styles.minText} >
                Minustes
            </Text>
          </View>
            <TouchableOpacity style={styles.timeWrapper} >
                <Text style={[styles.timeText,{
                     color:colors.black
                }]} >START TIMER</Text>
            </TouchableOpacity>
            {/* CHeckbox */}
                <View
                    style={{
                        flexDirection:'row',
                        alignItems:'center',
                        paddingHorizontal:wp(5),
                        marginTop:hp(1)
                    }}
                >
                <CheckBox
        disabled={false}
        value={toggleCheckBox}
        onValueChange={newValue => setToggleCheckBox(newValue)}
        style={{
          transform:
            Platform.OS === 'ios'
              ? [{scaleX: 0.8}, {scaleY: 0.8}]
              : [{scaleX: 1}, {scaleY: 1}],
          marginTop: Platform.OS === 'ios' ? hp(0.5) : null,
        }}
        boxType={'square'}
        tintColor={colors.otherTextColor}
        onCheckColor={colors.primary}
        onTintColor={colors.primary}

        tintColors={{ true:colors.primary, false: colors.otherTextColor }}
      />
        <Text style={styles.timeText} >Finish Last Track</Text>
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
        // backgroundColor:"#3C434434",
        // paddingVertical:Platform.OS === 'ios' ? hp(1.5) : null,
         borderRadius:hp(1),
        marginHorizontal:wp(2),
        alignItems:'center',
        width:wp(80)
       
  },
 
  headerText:{
      ...globalStyles.boldFont,
      fontSize:Platform.OS === 'ios' ? hp(1.6) : hp(1.8)
  },
  minWrapper:{
      backgroundColor:'#828B8D80',
      marginHorizontal:wp(6),
      marginVertical:hp(2),
      justifyContent:'center',
      alignItems:'center',
      paddingVertical:hp(2),
      borderRadius:hp(1)
  },
  minText:{
    ...globalStyles.boldFont,
    fontSize:Platform.OS === 'ios' ? hp(1.8) : hp(2)
  },
  timeWrapper:{
      backgroundColor:colors.white,
      ...globalStyles.shadow,
      marginHorizontal:wp(6),
      marginVertical:hp(2),
      justifyContent:'center',
      alignItems:'center',
      paddingVertical:hp(1.5),
      borderRadius:hp(1)
  },
timeText:{
    ...globalStyles.boldFont,
    fontSize:Platform.OS === 'ios' ? hp(1.6) : hp(1.8)
}
});

export default TimerScreen;
