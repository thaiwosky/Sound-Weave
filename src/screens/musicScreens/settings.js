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

const SettingScreen = ({navigation}) => {
  const {isDarkMode} = useContext(Context);
  
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  let search = isDarkMode == 'dark' ? require('../../assets/icons/search-dark.png') : require('../../assets/icons/search-light.png')
  let arrow = isDarkMode == 'dark' ? require('../../assets/icons/arrow-dark.png') : require('../../assets/icons/arrow-light.png')
  
  const categoryData = [
      {
          icon:require('../../assets/icons/styling.png'),
          title:"Styling",
          tagline:"Colors, Font, Animation",
          action:()=>{
            
        }
      },
      {
        icon:require('../../assets/icons/nowPlaying.png'),
        title:"Styling",
        tagline:"",
        action:()=>{
            
        }
    },
    {
        icon:require('../../assets/icons/interface.png'),
        title:"Interface",
        tagline:"Sliding menu, Library",
        action:()=>{
            
        }
    },
    {
        icon:require('../../assets/icons/audio.png'),
        title:"Audio",
        tagline:"Gapless, Crossfading, Equalizer, Repeat",
        action:()=>{
            
        }
        
    },
    {
        icon:require('../../assets/icons/metaData.png'),
        title:"Audio",
        tagline:"Album Cover, Artist image, Scrobble, Library, Manual select folders",
        action:()=>{
            
        }
    },
    {
        icon:require('../../assets/icons/remote.png'),
        title:"Remote",
        tagline:"Widget, Notification & Lockscreen",
        action:()=>{
            
        }
    },
    {
        icon:require('../../assets/icons/advanced.png'),
        title:"Advanced",
        tagline:"Development, Beta Features",
        action:()=>{
            
        }
    },
    {
        icon:require('../../assets/icons/backup.png'),
        title:"Backup & Restore",
        tagline:"Development, Beta Features",
        action:()=>{
            
        }
    },
    {
        icon:require('../../assets/icons/appearance.png'),
        title:"Appearance",
        tagline:"",
        action:()=>{
        navigation.navigate('AppearanceScreen')   
        }
    },
  ]
  const aboutData = [
    {
        icon:require('../../assets/icons/question.png'),
        title:"FAQ",
        tagline:'Need Help? Check here first!'
    },
    {
        icon:require('../../assets/icons/changelog.png'),
        title:"Changelog",
        tagline:'Click to open changelog'
    },
    {
        icon:require('../../assets/icons/about.png'),
        title:"About",
        tagline:'Sound Weave Version'
    },
    {
        icon:require('../../assets/icons/fb.png'),
        title:"Sound Weave on Facebook",
        tagline:''
    },
    
  ]
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
                }]} >Settings</Text>
               
            </View>
        </View>
        {/* BODY */}
        <ScrollView style={styles.bodyWrapper} >
            <View>
                <Text style={styles.title} >Categories</Text>
                <FlatList
                    data={categoryData}
                    keyExtractor={(item, index)=>index.toString()}
                    renderItem={({item,index})=>(
                        <TouchableOpacity style={styles.settingOptionWrapper} onPress={item.action} >
                            <View style={styles.iconWrapper} >
                                <FastImage
                                    source={item.icon}
                                    resizeMode={FastImage.resizeMode.contain}
                                    style={{
                                        height:hp(3),
                                        width:hp(3)
                                    }}
                                />
                            </View>
                            <View  style={styles.infoWrapper} >
                                <Text style={[styles.headerText,{
                                    color:isDarkMode == 'dark' ? colors.white : colors.black
                                }]} >{item.title}</Text>
                                {item.tagline == '' ? null :    <Text style={[styles.tagline,{
                                     color:isDarkMode == 'dark' ? colors.white : colors.black
                                }]} >{item.tagline}</Text>}
                            </View>
                        </TouchableOpacity>
                    )}

                />
            </View>

            <View>
                <Text style={styles.title} >About</Text>
                <View>
            <View style={styles.settingOptionWrapper} >
                           
                                <FastImage
                                    source={require('../../assets/images/logo2.png')}
                                    resizeMode={FastImage.resizeMode.contain}
                                    style={{
                                        height:hp(5),
                                        width:hp(5)
                                    }}
                                />
                         
                            <View  style={styles.infoWrapper} >
                                <Text style={[styles.headerText,{
                                    color:isDarkMode == 'dark' ? colors.primary : colors.primary
                                }]} >Sound Weave</Text>
                               <Text style={[styles.tagline,{
                                    color:isDarkMode == 'dark' ? colors.white : colors.black
                               }]} >Support indie development! Buy exclusive version for visualizer, custom colors, folder view, light theme, Blacklisting</Text>
                            </View>
                        </View>  
            </View>
                <FlatList
                    data={aboutData}
                    keyExtractor={(item, index)=>index.toString()}
                    contentContainerStyle={{
                        paddingBottom:hp(20)
                    }}
                    renderItem={({item,index})=>(
                        <TouchableOpacity style={styles.settingOptionWrapper} >
                            {
                                item.title == 'Sound Weave on Facebook' ? 
                                <FastImage
                                    source={item.icon}
                                    resizeMode={FastImage.resizeMode.contain}
                                    style={{
                                        height:hp(5),
                                        width:hp(5)
                                    }}
                                />
                                :
                                 <View style={styles.iconWrapper} >
                                <FastImage
                                    source={item.icon}
                                    resizeMode={FastImage.resizeMode.contain}
                                    style={{
                                        height:hp(3),
                                        width:hp(3)
                                    }}
                                />
                            </View>
                            }
                           
                            <View  style={styles.infoWrapper} >
                                <Text style={[styles.headerText,{
                                     color:isDarkMode == 'dark' ? colors.white : colors.black
                                }]} >{item.title}</Text>
                                {item.tagline == '' ? null :    <Text style={[styles.tagline,{
                                     color:isDarkMode == 'dark' ? colors.white : colors.black
                                }]} >{item.tagline}</Text>}
                            </View>
                        </TouchableOpacity>
                    )}

                />
            </View>
        </ScrollView>
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
    
  }

});

export default SettingScreen;
