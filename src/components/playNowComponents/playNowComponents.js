import React, {useContext, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  ScrollView
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {Context} from '../../../App';
import {colors, darkModeColors, lightModeColors} from '../../styles/colors';
import {globalStyles, height, width} from '../../styles/globalStyles';

const PlayNowComponent = () => {
  const {isDarkMode} = useContext(Context);
  const [data, setData] = useState([1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5,])

  let play = isDarkMode == 'dark' ? require('../../assets/icons/play-dark.png') : require('../../assets/icons/play-light.png')
  let tools =isDarkMode == 'dark' ? require('../../assets/icons/tools-dark.png') : require('../../assets/icons/tools-light.png') 
  return (
    <SafeAreaView>
        <ScrollView contentContainerStyle={[styles.container,{
        backgroundColor:isDarkMode == 'dark' ? darkModeColors.background :lightModeColors.background,
        
    }]}>
       <ScrollView horizontal showsHorizontalScrollIndicator={false} >
        <FlatList
                data={data}
                keyExtractor={(item, index)=>index.toString()}
                renderItem={({item})=>(
                    <View style={[styles.boxWrapper,{
                        backgroundColor:isDarkMode == 'dark' ? colors.black :colors.white
                    }]} >
                        <Text style={[styles.trackName,{
                            color:isDarkMode == 'dark' ? colors.white : colors.black
                        }]} >Track Name</Text>
                    </View>
                )}
                contentContainerStyle={{alignSelf: 'flex-start', paddingLeft:wp(4), paddingVertical:hp(2)}}
                numColumns={Math.ceil(data.length / 3)}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                bounces={false}
                
            />
       </ScrollView>
       {/* BLUE BANNER */}
       <View style={[styles.blueBanner, globalStyles.configureWrapper]} >
            <View style={[globalStyles.configureWrapper]} >
                <FastImage
                    source={play}
                    resizeMode={FastImage.resizeMode.contain}
                    style={{height:hp(2), width:hp(2)}}
                />
                <Text style={styles.textBar} >Play</Text>
            </View>
            <View style={[globalStyles.configureWrapper]} >
                <FastImage
                    source={tools}
                    resizeMode={FastImage.resizeMode.contain}
                    style={{height:hp(2), width:hp(2)}}
                />
                <Text style={styles.textBar} >Shuffle Play</Text>
            </View>
       </View>
       {/* PLaylist */}
       <ScrollView horizontal showsHorizontalScrollIndicator={false} >
        <FlatList
                data={data}
                keyExtractor={(item, index)=>index.toString()}
                renderItem={({item})=>(
                    <View style={[styles.boxWrapper,{
                        backgroundColor:isDarkMode == 'dark' ? colors.black :colors.white
                    }]} >
                        <Text style={[styles.trackName,{
                            color:isDarkMode == 'dark' ? colors.white : colors.black
                        }]} >Track Name</Text>
                    </View>
                )}
                contentContainerStyle={{alignSelf: 'flex-start', paddingLeft:wp(4), paddingVertical:hp(2)}}
                numColumns={Math.ceil(data.length / 3)}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                bounces={false}
            />
       </ScrollView>
              {/* BLUE BANNER -NEVER PLAY */}
              <View style={[styles.blueBanner, globalStyles.configureWrapper]} >
                        <Text style={[styles.textBar, {textAlign:'center'}]} >NEVER PLAY</Text>
       </View>
       {/* PLaylist */}
       <ScrollView horizontal showsHorizontalScrollIndicator={false} >
        <FlatList
                data={data}
                keyExtractor={(item, index)=>index.toString()}
                renderItem={({item})=>(
                    <View style={[styles.boxWrapper,{
                        backgroundColor:isDarkMode == 'dark' ? colors.black :colors.white
                    }]} >
                        <Text style={[styles.trackName,{
                            color:isDarkMode == 'dark' ? colors.white : colors.black
                        }]} >Track Name</Text>
                    </View>
                )}
                contentContainerStyle={{alignSelf: 'flex-start', paddingLeft:wp(4), paddingVertical:hp(2)}}
                numColumns={Math.ceil(data.length / 3)}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                bounces={false}
            />
       </ScrollView>
    </ScrollView> 
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom:hp(10)    
  },
  boxWrapper:{
      height:Platform.OS === 'ios' ? hp(12):hp(13),
      width:Platform.OS === 'ios' ? wp(25):wp(23),
      ...globalStyles.shadow,
      
      borderRadius:hp(1.5),
      margin:hp(1)
  },
  trackName:{
      ...globalStyles.semiBoldFont,
      fontSize:Platform.OS === 'ios' ? hp(1.5):hp(1.3),
      textAlign:'center',
      position:'absolute',
      bottom:hp(1),
      alignSelf:'center'
  },
  blueBanner:{
  
    backgroundColor:colors.primary,
    justifyContent:'space-between',
    paddingHorizontal:wp(12),
    paddingVertical:hp(1)
  },
  textBar:{
      ...globalStyles.semiBoldFont,
      fontSize:Platform.OS === 'ios' ? hp(1.6) : hp(1.8),
      paddingLeft:wp(3),
    textTransform:'uppercase'
  }
});

export default PlayNowComponent;
