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

const AlbumArtistComponent = () => {
  const {isDarkMode} = useContext(Context);
  const [data, setData] = useState([1,2,3,4,5,6,7,8,9,0])

  let soundWeave = isDarkMode == 'dark' ? require('../../assets/icons/soundWeaveDark.png') : require('../../assets/icons/soundWeaveLight.png')
  return (
    <SafeAreaView>
        <View
            style={styles.blueBanner}
         >
            <FastImage
                source={soundWeave}
                resizeMode={FastImage.resizeMode.contain}
                style={{
                    height:Platform.OS === 'ios' ? wp(35):wp(33),
                    width:Platform.OS === 'ios' ? wp(35):wp(33),
                    alignSelf:'center',
                    
                }}
            />
        </View>
        <FlatList
            data={data}
            keyExtractor={(item,index)=>index.toString}
            renderItem={({item, index})=>(
                <View style={[globalStyles.configureWrapper]} >
                   <View style={[styles.boxWrapper,{
                        backgroundColor:isDarkMode == 'dark' ? colors.black :colors.white
                   }]} >
                 <Text style={[styles.trackName,{
                                    color:isDarkMode == 'dark' ? colors.white :colors.black 
                           }]} >Track Name</Text>
                   </View>
                </View>
            )}
            contentContainerStyle={styles.container}
            numColumns={2}
        />
   
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom:hp(10)   ,
    marginTop:hp(1)
  },
  blueBanner:{
      backgroundColor:colors.primary,
      width:wp(100),
      height:hp(10),
      marginTop:hp(-5.5)
  },
  boxWrapper:{
      height:Platform.OS === 'ios' ? hp(12):hp(12),
      width:Platform.OS === 'ios' ? wp(45):wp(45),
      ...globalStyles.shadow,
      borderRadius:hp(1.5),
      margin:hp(1),
      justifyContent:'center',
      alignItems:'center'
  },
  trackName:{
      ...globalStyles.semiBoldFont,
      fontSize:Platform.OS === 'ios' ? hp(1.5):hp(1.6),
      color:"#000000",
      position:'absolute',
      bottom:hp(1),
  
  },
  track:{
    ...globalStyles.semiBoldFont,
    fontSize:Platform.OS === 'ios' ? hp(1.1):hp(1.3),
    color:"#00000070"
  }
});

export default AlbumArtistComponent;
