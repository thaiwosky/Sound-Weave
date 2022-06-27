import React, {useContext} from 'react';
import {View, Text, Image, Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { colors, darkModeColors, lightModeColors } from '../../styles/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Context } from '../../../App';
import FastImage from 'react-native-fast-image';
import { globalStyles } from '../../styles/globalStyles';
const {height, width} = Dimensions.get('window');

export const CustomDrawer = props => {
    const {isDarkMode} = useContext(Context)
    return(
        <View
            style={{
                flex:1,
                backgroundColor: isDarkMode == 'dark' ? darkModeColors.background : lightModeColors.background,
                width:wp(70)
                
            }}
        >
            <DrawerContentScrollView {...props}>
                <View style={{paddingHorizontal:wp(7)}} >
                    <View style={globalStyles.configureWrapper} >
                        <FastImage
                            source={require('../../assets/images/logo2.png')}
                            resizeMode={FastImage.resizeMode.contain}
                            style={{
                                height:Platform.OS === 'ios' ? hp(6):hp(6),
                                width:Platform.OS === 'ios' ? hp(6):hp(6),

                            }}
                        />
                        <FastImage
                            source={require('../../assets/images/taglline.png')}
                            resizeMode={FastImage.resizeMode.contain}
                            style={{
                                height:Platform.OS === 'ios' ? hp(17):hp(17),
                                width:Platform.OS === 'ios' ? hp(17):hp(17),
                                marginVertical:hp(-4),
                                marginLeft:wp(2),

                            }}
                        />
                        
                    </View>
                    <Text style={styles.navigationText} >NAVIGATION</Text>
                </View>
            <DrawerItemList {...props} />
            <View  >
                <View style={styles.blackBanner} >
                    <Text style={styles.blackText} >MOST PLAYED</Text>
                </View>
                <View style={globalStyles.configureWrapper} >
                    <FastImage
                        source={require('../../assets/images/music.png')}
                        resizeMode={FastImage.resizeMode.contain}
                        style={{
                            height:hp(7),
                            width:hp(7)
                        }}
                    />
                    <View style={styles.infoWrapper} >
                        <Text style={styles.musicName} >Fly Away</Text>
                        <Text style={[styles.musicTagline,{
                            color:isDarkMode == 'dark' ? "#ffffff70" : "#00000090"
                        }]} >Tones and I</Text>
                    </View>
                </View>
            </View>
            </DrawerContentScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    navigationText:{
        ...globalStyles.boldFont,
        fontSize:Platform.OS === 'ios' ? hp(1.8) : hp(2),
        color:colors.primary,
    },
    blackBanner:{
        backgroundColor:"#00000074",
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:hp(0.3),
    },
    blackText:{
        color:colors.white,
        ...globalStyles.semiBoldFont
    },
    infoWrapper:{
        marginLeft:wp(2)
    },
    musicName:{
        color:"green",
        ...globalStyles.regularFont,
        fontSize:Platform.OS === 'ios' ? hp(1.8):hp(2)
    },
    musicTagline:{
        
        ...globalStyles.regularFont,
        fontSize:Platform.OS === 'ios' ? hp(1.5):hp(1.8)
    }
})