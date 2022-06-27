import React, {useContext, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {Context} from '../../../App';
import {colors, darkModeColors, lightModeColors} from '../../styles/colors';
import {globalStyles, height, width} from '../../styles/globalStyles';

const RecentlyAddedComponent = () => {
  const {isDarkMode} = useContext(Context);
  const [data, setData] = useState([
    1, 2, 3, 4, 5 ,6 ,7, 8,
  ]);
  let tools =isDarkMode == 'dark' ? require('../../assets/icons/tools-light.png') : require('../../assets/icons/tools-dark.png') 
  let headPhone = isDarkMode == 'dark' ? require('../../assets/icons/whiteHeadPhone.png') : require('../../assets/icons/blackHeadePhone.png')
  return (
    <SafeAreaView>
        <Text style={[styles.headline,{
            paddingLeft: wp(5), 
            paddingTop:hp(3),
        }]} >Albums</Text>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View
            style={[
              styles.boxWrapper,
              {
                backgroundColor:
                  isDarkMode == 'dark' ? colors.black : colors.white,
              },
            ]}>
            <Text
              style={[
                styles.trackName,
                {
                  color: isDarkMode == 'dark' ? colors.white : colors.black,
                },
              ]}>
              Track Name
            </Text>
          </View>
        )}
        contentContainerStyle={{
          alignSelf: 'center',
          backgroundColor:
            isDarkMode == 'dark'
              ? darkModeColors.background
              : lightModeColors.background,
          marginLeft:wp(2)
          
        }}
        horizontal
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        bounces={false}

      />
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
                <View style={[globalStyles.configureWrapper]} >
                   <View style={[styles.suffleboxWrapper,{
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
                           <Text style={[styles.suffletrackName,{
                                    color:isDarkMode == 'dark' ? colors.white :"#00000090"
                           }]} >Track Name</Text>
                           <Text style={[styles.suffletrack,{
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: hp(10),
  },
  boxWrapper: {
    height: Platform.OS === 'ios' ? hp(12) : hp(13),
    width: Platform.OS === 'ios' ? wp(25) : wp(23),
    ...globalStyles.shadow,

    borderRadius: hp(1.5),
    marginHorizontal: wp(2),
    marginVertical:hp(1)
  },
  trackName:{
    ...globalStyles.semiBoldFont,
    fontSize:Platform.OS === 'ios' ? hp(1.5):hp(1.3),
    textAlign:'center',
    position:'absolute',
    bottom:hp(1),
    alignSelf:'center'
},
  blueBanner: {
    backgroundColor: colors.primary,
    justifyContent: 'space-between',
    paddingHorizontal: wp(12),
    paddingVertical: hp(1),
  },
  textBar: {
    ...globalStyles.semiBoldFont,
    fontSize: Platform.OS === 'ios' ? hp(1.6) : hp(1.8),
    paddingLeft: wp(3),
    textTransform: 'uppercase',
  },
  headline:{
    ...globalStyles.boldFont,
    fontSize: Platform.OS === 'ios' ? hp(1.6) : hp(1.8),
    
    textTransform: 'uppercase',
  },
  suffleboxWrapper:{
    height:Platform.OS === 'ios' ? hp(8):hp(8),
    width:Platform.OS === 'ios' ? wp(18):wp(18),
    ...globalStyles.shadow,
    borderRadius:hp(1.5),
    margin:hp(1),
    justifyContent:'center',
    alignItems:'center'
},
suffletrackName:{
    ...globalStyles.semiBoldFont,
    fontSize:Platform.OS === 'ios' ? hp(1.5):hp(1.6),
    color:"#00000090"
},
suffletrack:{
    ...globalStyles.semiBoldFont,
    fontSize:Platform.OS === 'ios' ? hp(1.1):hp(1.3),
    color:"#00000070"
  },
});

export default RecentlyAddedComponent;
