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

const PlaylistComponent = () => {
  const {isDarkMode} = useContext(Context);
  const [data, setData] = useState([1, 2])

  let headPhone = isDarkMode == 'dark' ? require('../../assets/icons/whiteHeadPhone.png') : require('../../assets/icons/blackHeadePhone.png')
  return (
    <SafeAreaView>
        <FlatList
            data={data}
            keyExtractor={(item,index)=>index.toString}
            renderItem={({item, index})=>(
                <View style={[globalStyles.configureWrapper]} >
                   <View style={[styles.boxWrapper,{
                        backgroundColor:isDarkMode == 'dark' ? colors.black :colors.white
                   }]} >
                    <FastImage
                            source={headPhone}
                            resizeMode={FastImage.resizeMode.contain}
                            style={{
                                height:Platform.OS === 'ios' ? hp(2.8) : hp(3.2),
                                width:Platform.OS === 'ios' ? hp(2.8) : hp(3.2)
                            }}
                        />
                   </View> 
                   <View style={[globalStyles.configureWrapper, {justifyContent:'space-between', width:wp(74)}]} >
                       <TouchableOpacity style={{marginLeft:wp(2)}} >
                           <Text style={[styles.trackName,{
                                    color:isDarkMode == 'dark' ? colors.white :"#00000090"
                           }]} >Track Name</Text>
                           <Text style={[styles.track,{
                                 color:isDarkMode == 'dark' ? colors.white :"#00000060"
                           }]} >Name</Text>
                       </TouchableOpacity>
                   <TouchableOpacity>
                    <FastImage
                                source={require("../../assets/icons/trackOptions.png")}
                                resizeMode={FastImage.resizeMode.contain}
                                style={{height:hp(2),width:hp(2)}}
                        />
                   </TouchableOpacity>
                   </View>
                </View>
            )}
            contentContainerStyle={styles.container}
        />
        <View style={{paddingHorizontal:wp(3), paddingVertical:hp(2)}} >
            <TouchableOpacity  >
                <Text style={styles.playlistCreateText} >Create Empty Playlist</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.playlistCreateText} >import</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // paddingBottom:hp(10)   ,
  },
  boxWrapper:{
      height:Platform.OS === 'ios' ? hp(8):hp(8),
      width:Platform.OS === 'ios' ? wp(18):wp(18),
      ...globalStyles.shadow,
      borderRadius:hp(1.5),
      margin:hp(1),
      justifyContent:'center',
      alignItems:'center'
  },
  trackName:{
      ...globalStyles.semiBoldFont,
      fontSize:Platform.OS === 'ios' ? hp(1.5):hp(1.6),
      color:"#00000090"
  },
  track:{
    ...globalStyles.semiBoldFont,
    fontSize:Platform.OS === 'ios' ? hp(1.1):hp(1.3),
    color:"#00000070"
  },
  playlistCreateText:{
      color:colors.primary,
      ...globalStyles.boldFont,
      fontSize:Platform.OS === 'ios' ? hp(1.6) : hp(1.8)
  }
});

export default PlaylistComponent;
