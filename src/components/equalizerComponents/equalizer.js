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
import ToggleSwitch from 'toggle-switch-react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import VerticalSlider from 'rn-vertical-slider';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import CustomEqualizerModal from '../modals/customEqualizers';
import Slider from '@react-native-community/slider';

const STARTING_VALUE = 1;

const EqualizerComponent = () => {
  const {isDarkMode} = useContext(Context);
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [sliderValue, setSliderValue] = useState(STARTING_VALUE);
  const [completeValue, setCompleteValue] = useState(STARTING_VALUE);
  const caret = isDarkMode == 'dark' ? require('../../assets/icons/caret-white.png') : require('../../assets/icons/caretUp.png')
  const [modalVisible, setModalVisible] = useState(false);
  const [distance, setDistance] = useState([0]);
  const distanceValuesChange = distance => {
    setDistance(distance);
  };
  return (
    <SafeAreaView>
      {/* toggle */}
      <View
        style={{
          alignSelf: 'flex-end',
          paddingHorizontal: wp(4),
          paddingVertical: hp(2),
        }}>
        <ToggleSwitch
          isOn={toggle}
          onColor={colors.primary}
          size="normal"
          onToggle={() => {
            setToggle(!toggle);
          }}
          thumbOnStyle={{
            backgroundColor: colors.primary,
          }}
          trackOnStyle={{
            backgroundColor: '#18d1fa80',
          }}
          thumbOffStyle={{
            backgroundColor: colors.black,
            borderWidth: 3,
            borderColor: colors.primary,
          }}
        />
      </View>

      {/* sliders */}
      <View style={{ height:hp(55),transform:[{rotate: "-90deg"}],
      justifyContent:'center',
      alignItems:'center'
      }} >
          {
              [1,2,3,4,5].map((item, index)=>(
                  <View  
                    style={{
                        // marginLeft:index == 0 ? 0 : wp(10),
                        alignItems:'center',
                        flexDirection:'row'
                    }}
                  >
                     <Text style={[styles.dbHzText, {marginTop: hp(1),
        color:isDarkMode == 'dark' ? colors.white : '#00000090',
        transform:[{rotate: "90deg"}]
        }]}>60 Hz</Text>
     
     <View
     
     
     >
     <Slider
  style={{width: wp(90), height: hp(8)}}
  minimumValue={0}
  maximumValue={1}
  minimumTrackTintColor={colors.primary}
  maximumTrackTintColor={'grey'}
  value={sliderValue}
  onSlidingStart={value=>{
    setSliderValue(value)
  }}
  onSlidingComplete={value=>{
    setSliderValue(value)
  }}
  
  thumbTintColor={colors.primary}
/>
     </View>

     <Text style={[styles.dbHzText, {marginBottom: hp(1),
                            color:isDarkMode == 'dark' ? colors.white : '#00000090',
                            transform:[{rotate: "90deg"}]
                        }]}>0 DB</Text>
                  </View>
              ))
          }
      </View>
      <TouchableOpacity style={{
          flexDirection:'row',
          justifyContent:'space-between',
          paddingHorizontal:wp(6),
          marginTop:hp(2)
      }}
      onPress={()=>{
        setModalVisible(!modalVisible);
      }}
       
      >
          <Text style={[styles.dbHzText, {
        color:isDarkMode == 'dark' ? colors.white : '#00000090',

        paddingHorizontal:wp(4)
        }]} >Custom</Text>
          <FastImage 
            resizeMode={FastImage.resizeMode.contain}
            source={caret}
            style={{
                height:hp(2),
                width:hp(2)
            }}
          />
      </TouchableOpacity>
      <CustomEqualizerModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // paddingBottom:hp(10)   ,
  },
  boxWrapper: {
    height: Platform.OS === 'ios' ? hp(8) : hp(8),
    width: Platform.OS === 'ios' ? wp(18) : wp(18),
    ...globalStyles.shadow,
    borderRadius: hp(1.5),
    margin: hp(1),
    justifyContent: 'center',
    alignItems: 'center',
  },
  dbHzText: {
    ...globalStyles.semiBoldFont,
    fontSize: Platform.OS === 'ios' ? hp(1.5) : hp(1.6),
    color: '#00000090',
    marginLeft: wp(-2.5),
  },
  markerStyle:{
    height:hp(2),
    width:hp(2),
    borderRadius:100/2,
    backgroundColor:colors.primary
}
});

export default EqualizerComponent;
