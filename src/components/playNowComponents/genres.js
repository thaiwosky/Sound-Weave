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

const GenresComponent = () => {
  const {isDarkMode} = useContext(Context);
  const [data, setData] = useState([1,2,3,4,5,6,7,8,9,0])

  let headPhone = isDarkMode == 'dark' ? require('../../assets/icons/whiteHeadPhone.png') : require('../../assets/icons/blackHeadePhone.png')
  return (
    <SafeAreaView>
        <FlatList
            data={data}
            keyExtractor={(item,index)=>index.toString}
            renderItem={({item, index})=>(
                <View >
                   <View style={[styles.boxWrapper,{
                        backgroundColor:isDarkMode == 'dark' ? colors.black :colors.white
                   }]} >
                 <Text style={[styles.trackName,{
                                    color:isDarkMode == 'dark' ? colors.white :"#00000090"
                           }]} >Track Name</Text>
                   </View>
                </View>
            )}
            contentContainerStyle={styles.container}
        />
   
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom:hp(10)   ,
    marginTop:hp(1)
  },
  boxWrapper:{
      height:Platform.OS === 'ios' ? hp(8):hp(8),
      width:Platform.OS === 'ios' ? wp(95):wp(95),
      ...globalStyles.shadow,
      borderRadius:hp(1.5),
      margin:hp(1),
      justifyContent:'center',
      alignItems:'center'
  },
  trackName:{
      ...globalStyles.semiBoldFont,
      fontSize:Platform.OS === 'ios' ? hp(1.5):hp(1.6),
      color:"#00000090",
      position:'absolute',
      bottom:hp(1),
      left:wp(5)
  },
  track:{
    ...globalStyles.semiBoldFont,
    fontSize:Platform.OS === 'ios' ? hp(1.1):hp(1.3),
    color:"#00000070"
  }
});

export default GenresComponent;
