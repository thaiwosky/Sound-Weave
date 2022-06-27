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

const RecentlyPlayedComponent = () => {
  const {isDarkMode} = useContext(Context) ;
  const [data, setData] = useState([1,2])
  const [selected, setSelected] = useState(null)

  let tools =isDarkMode == 'dark' ? require('../../assets/icons/tools-light.png') : require('../../assets/icons/tools-dark.png') 
  return (
    <SafeAreaView>
        {
            data.length ==  0 ? 
            <View style={{height:hp(70), alignItems:'center', justifyContent:'center'}} >
                <Text style={[styles.playlistCreateText,{
                    color:isDarkMode == 'dark' ? "#ffffff80" : "#00000090"
                }]} >No Favorite Found</Text>
            </View>
            :
            <View>
                      <View style={[globalStyles.configureWrapper,{paddingHorizontal:wp(4), marginTop:hp(2)}]} >
        <FastImage
            source={tools}
            resizeMode={FastImage.resizeMode.contain}
            style={{
                height:hp(2.5),
                width:hp(2.5)
            }}
        />
        <Text style={[styles.headline,{
            paddingLeft: wp(2), 
        
        }]} >Suffle Play</Text>
      </View>
            <FlatList
            data={data}
            keyExtractor={(item,index)=>index.toString}
            renderItem={({item, index})=>(
                <TouchableOpacity style={[globalStyles.configureWrapper,{
                    backgroundColor:index == selected ? '#14B8EC80' : null,
                    paddingVertical:hp(1),
                    paddingHorizontal:wp(6)
                }]} 
                    onPress={()=>{setSelected(index)}}
                >

                  <FastImage
                        source={require('../../assets/images/music.png')}
                        resizeMode={FastImage.resizeMode.contain}
                        style={{
                            height:hp(7),
                            width:hp(7)
                        }}
                    />
                   <View style={[globalStyles.configureWrapper, {justifyContent:'space-between', width:wp(74)}]} >
                       <TouchableOpacity style={{marginLeft:wp(2)}} >
                           <Text style={[styles.trackName,{
                                    color:isDarkMode == 'dark' ? colors.white :index == selected ? colors.white : "#00000090"
                           }]} >Fly Away</Text>
                           <Text style={[styles.track,{
                                   color:isDarkMode == 'dark' ? colors.white :index == selected ? colors.white : "#00000090"
                           }]} >Tones and I</Text>
                       </TouchableOpacity>
                  
                   </View>
                </TouchableOpacity>
            )}
            contentContainerStyle={styles.container}
        />
        </View>

        }
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
    fontSize:Platform.OS === 'ios' ? hp(1.8) : hp(2)
},
count:{
    ...globalStyles.boldFont,
    fontSize:Platform.OS === 'ios' ? hp(1.6):hp(1.8),
    color:"#469398"
},
headline:{
    ...globalStyles.boldFont,
    fontSize: Platform.OS === 'ios' ? hp(1.6) : hp(1.8),
    
    textTransform: 'uppercase',
    
  },  
});

export default RecentlyPlayedComponent;
