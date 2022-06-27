import React, {useContext, useState} from 'react';
import {Image, StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput, FlatList, ScrollView} from 'react-native';
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

const AppearanceScreen = ({navigation}) => {
  const {isDarkMode,setIsDarkMode} = useContext(Context);
  
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  let select =  require('../../assets/icons/select.png')
  let unselect =  require('../../assets/icons/unselect.png')
  let arrow = isDarkMode == 'dark' ? require('../../assets/icons/arrow-dark.png') : require('../../assets/icons/arrow-light.png')
  
  
  return (
    <SafeAreaView style={[styles.container,{
       backgroundColor: isDarkMode == 'dark' ? darkModeColors.background : lightModeColors.background,
      
      
    }]}>
        {/* header */}
        <View style={styles.header} >
            <TouchableOpacity onPress={()=>{navigation.pop()}} >
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
                }]} >Appearance</Text>
                
            </View>
        </View>
{/* body */}
<View style={[styles.contentWrapper,{marginTop:hp(2)}]} >
        <View style={[styles.boxColorWrapper,globalStyles.configureWrapper,{
          
        }]} >
            <View style={[styles.boxColor,{
                  backgroundColor:colors.black
            }]} />
            <Text style={[styles.boxColorText,{
                color:isDarkMode == 'dark' ? colors.white : colors.black
            }]} >Dark Mode</Text>
        </View>
     <TouchableOpacity
     onPress={()=>{
        setIsDarkMode('dark')
    }}
     >
     <FastImage 
            source={isDarkMode == 'dark' ? select:unselect}
            resizeMode={FastImage.resizeMode.contain}
            style={{
                height:hp(2.3),
                width:hp(2.3)
            }}

        />
   
     </TouchableOpacity>
</View>
<View style={styles.contentWrapper} >
        <View style={[styles.boxColorWrapper,globalStyles.configureWrapper,{
           
        }]} >
            <View style={[styles.boxColor,{
                 backgroundColor:colors.white
            }]} />
            <Text style={[styles.boxColorText,{
                color:isDarkMode == 'dark' ? colors.white : colors.black
            }]} >Light Mode</Text>
        </View>
     <TouchableOpacity  
        onPress={()=>{
            setIsDarkMode('light')
        }}
     >
     <FastImage 
            source={isDarkMode == 'light' ? select:unselect}
            resizeMode={FastImage.resizeMode.contain}
            style={{
                height:hp(2.3),
                width:hp(2.3)
            }}

        />
     </TouchableOpacity>
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
  title:{
    ...globalStyles.boldFont,
    fontSize:Platform.OS === 'ios' ? hp(1.8) : hp(2),
    color:colors.primary
  },
  bodyWrapper:{
      paddingHorizontal:wp(5),
      paddingVertical:hp(1)
  },
  iconWrapper:{
      height:hp(5),
      width:hp(5),
      backgroundColor:'#828B8D80',
      borderRadius:100/2,
      justifyContent:'center',
      alignItems:'center', 
      marginVertical:hp(1)
  },
  settingOptionWrapper:{
      flexDirection:'row', 
      alignItems:'center',

  },
  infoWrapper:{
      marginLeft:wp(2)
  },
  tagline:{
    ...globalStyles.regularFont,
    fontSize:Platform.OS === 'ios' ? hp(1.4) : hp(1.6),
    
  },

  boxColor:{
    
    height:hp(3),
    width:wp(20),
    ...globalStyles.shadow,
    borderRadius:hp(0.5)
  },
  contentWrapper:{
      flexDirection:'row',
      justifyContent:"space-between",
      marginHorizontal:wp(4),
      marginVertical:hp(1.5)
  },
  boxColorText:{
    ...globalStyles.regularFont,
    fontSize:Platform.OS === 'ios' ? hp(1.6) : hp(1.8),
    marginLeft:wp(3)
  }
});

export default AppearanceScreen;
