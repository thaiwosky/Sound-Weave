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

const STARTING_VALUE = 1;

const SoundEffectComponent = () => {
  const {isDarkMode} = useContext(Context);
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [sliderValue, setSliderValue] = useState(STARTING_VALUE);
  const [completeValue, setCompleteValue] = useState(STARTING_VALUE);

  const [distance, setDistance] = useState([0]);
  const distanceValuesChange = distance => {
    setDistance(distance);
  };
  const caret =
    isDarkMode == 'dark'
      ? require('../../assets/icons/caret-white.png')
      : require('../../assets/icons/caretUp.png');
  const soundIcon =
    isDarkMode == 'dark'
      ? require('../../assets/icons/sound-dark.png')
      : require('../../assets/icons/sound-light.png');
  return (
    <SafeAreaView>
        <ScrollView contentContainerStyle={{paddingHorizontal:wp(4), paddingBottom:hp(25)}} >
      {/* BASS BOOST */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: hp(2),
        }}>
        <Text
          style={[
            styles.headline,
            {
              color: isDarkMode == 'dark' ? colors.white : colors.black,
            },
          ]}>
          BASS BOOST
        </Text>
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
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: hp(-2),
        }}>
        <MultiSlider
          values={[distance[0]]}
          sliderLength={Platform.OS === 'ios' ? 316 : wp(82)}
          onValuesChange={distanceValuesChange}
          min={0}
          max={100}
          step={1}
          markerStyle={{backgroundColor: colors.primary}}
          selectedStyle={{backgroundColor: colors.primary}}
          containerStyle={{
            marginLeft: wp(3),
          }}
          customMarker={()=>(
            <View style={styles.markerStyle} />
          )}
        />
        <Text
          style={[
            styles.ageHeadStats,
            {
              color: isDarkMode == 'dark' ? colors.white : colors.black,
            },
          ]}>
          {distance} %
        </Text>
      </View>
      {/* VIRTUALIZER */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',

          paddingVertical: hp(2),
        }}>
        <Text
          style={[
            styles.headline,
            {
              color: isDarkMode == 'dark' ? colors.white : colors.black,
            },
          ]}>
          VIRTUALIZER
        </Text>
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
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: hp(-2),
        }}>
        <MultiSlider
          values={[distance[0]]}
          sliderLength={Platform.OS === 'ios' ? 316 : wp(82)}
          onValuesChange={distanceValuesChange}
          min={0}
          max={100}
          step={1}
          markerStyle={{backgroundColor: colors.primary}}
          selectedStyle={{backgroundColor: colors.primary}}
          containerStyle={{
            marginLeft: wp(3),
          }}
          customMarker={()=>(
            <View style={styles.markerStyle} />
          )}
        />
        <Text
          style={[
            styles.ageHeadStats,
            {
              color: isDarkMode == 'dark' ? colors.white : colors.black,
            },
          ]}>
          {distance} %
        </Text>
      </View>
      {/* REVERBS */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          
          
        }}>
        <Text
          style={[
            styles.headline,
            {
              color: isDarkMode == 'dark' ? colors.white : colors.black,
            },
          ]}>
          REVERBS
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingRight:wp(3)
        }}>
        <Text style={styles.textInfo}>None</Text>
        <FastImage
          source={caret}
          resizeMode={FastImage.resizeMode.contain}
          style={{
            height: hp(1.5),
            width: hp(1.5),
            transform: [{rotate: '180deg'}],
          }}
        />
      </View>
      {/* SOUND BALANCE */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',

          paddingVertical: hp(2),
        }}>
        <Text
          style={[
            styles.headline,
            {
              color: isDarkMode == 'dark' ? colors.white : colors.black,
            },
          ]}>
          SOUND BALANCE
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          
          marginTop: hp(-1),
        }}>
        <Text style={{
            ...globalStyles.regularFont,
            color:isDarkMode == 'dark' ? colors.white : colors.black,
            fontSize:hp(1.5)

        }} >LEFT</Text>
        <MultiSlider
          values={[distance[0]]}
          sliderLength={Platform.OS === 'ios' ? 270 : wp(69.5)}
          onValuesChange={distanceValuesChange}
          min={0}
          max={100}
          step={1}
          markerStyle={{backgroundColor: colors.primary}}
          selectedStyle={{backgroundColor: colors.primary}}
          containerStyle={{
            // marginHorizontal: wp(3),
            marginLeft:wp(7.9)
          }}
          customMarker={()=>(
            <View style={styles.markerStyle} />
          )}
        />
        <Text
          style={[
            styles.ageHeadStats,
            {
              color: isDarkMode == 'dark' ? colors.white : colors.black,
            },
          ]}>
          {distance} %
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: hp(-1),
        }}>
        <Text 
        style={{
            ...globalStyles.regularFont,
            color:isDarkMode == 'dark' ? colors.white : colors.black,
            fontSize:Platform.OS === 'ios' ? hp(1.5) : hp(1.5),
            
        }}
        >RIGHT</Text>
        <MultiSlider
          values={[distance[0]]}
          sliderLength={Platform.OS === 'ios' ? 270 : wp(68)}
          onValuesChange={distanceValuesChange}
          min={0}
          max={100}
          step={1}
          markerStyle={{backgroundColor: colors.primary}}
          selectedStyle={{backgroundColor: colors.primary}}
          containerStyle={{
            marginLeft: Platform.OS === 'ios'  ? wp(5) : wp(7.5),
          }}
          customMarker={()=>(
            <View style={styles.markerStyle} />
          )}
        />
        <Text
          style={[
            styles.ageHeadStats,
            {
              color: isDarkMode == 'dark' ? colors.white : colors.black,
            },
          ]}>
          {distance} %
        </Text>
      </View>
      {/* SOUND */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          
          paddingVertical: hp(2),
        }}>
        <Text
          style={[
            styles.headline,
            {
              color: isDarkMode == 'dark' ? colors.white : colors.black,
            },
          ]}>
          SOUND
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        marginLeft:wp(-5),
          marginTop: hp(-2),
        }}>
        <FastImage
          require={require('../../assets/icons/sound-light.png')}
          resizeMode={FastImage.resizeMode.contain}
          style={{
            height: hp(2.5),
            width: hp(2.5),
          }}
        />
        <FastImage
          source={soundIcon}
          resizeMode={FastImage.resizeMode.contain}
          style={{
            height: hp(1.5),
            width: hp(1.5),
          }}
        />
        <MultiSlider
          values={[distance[0]]}
          sliderLength={Platform.OS === 'ios' ? 290 : wp(75)}
          onValuesChange={distanceValuesChange}
          min={0}
          max={100}
          step={1}
          markerStyle={{backgroundColor: colors.primary}}
          selectedStyle={{backgroundColor: colors.primary}}
          containerStyle={{marginLeft: wp(6)}}
          customMarker={()=>(
            <View style={styles.markerStyle} />
          )}
        />
        <Text
          style={[
            styles.ageHeadStats,
            {
              color: isDarkMode == 'dark' ? colors.white : colors.black,
            },
          ]}>
          {distance} %
        </Text>
      </View>
      {/* Amplifer */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: hp(2),
        }}>
        <Text
          style={[
            styles.headline,
            {
              color: isDarkMode == 'dark' ? colors.white : colors.black,
            },
          ]}>
          AMPLIFIER
        </Text>
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
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: hp(-2),
        }}>
        <MultiSlider
          values={[distance[0]]}
          sliderLength={Platform.OS === 'ios' ? 316 : wp(82)}
          onValuesChange={distanceValuesChange}
          min={0}
          max={100}
          step={1}
          markerStyle={{backgroundColor: colors.primary}}
          selectedStyle={{backgroundColor: colors.primary}}
          containerStyle={{
            marginLeft: wp(3),
          }}
          customMarker={()=>(
            <View style={styles.markerStyle} />
          )}
        />
        <Text
          style={[
            styles.ageHeadStats,
            {
              color: isDarkMode == 'dark' ? colors.white : colors.black,
            },
          ]}>
          {distance} %
        </Text>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={[
            styles.headline,
            {
              color: isDarkMode == 'dark' ? '#ffffff80' : '#000000080',
            },
          ]}>
          WARNING
        </Text>
        <Text
          style={{
            color: isDarkMode == 'dark' ? '#ffffff80' : '#00000080',
            ...styles.headline,
            ...globalStyles.regularFont,
          }}>
          High Volume may damage hardware
        </Text>
      </View>
        </ScrollView>
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
  headline: {
    ...globalStyles.boldFont,
    fontSize: Platform.OS === 'ios' ? hp(1.6) : hp(1.8),
    textTransform:'uppercase'
  },
  textInfo: {
    ...globalStyles.regularFont,
    fontSize: Platform.OS === 'ios' ? hp(1.6) : hp(1.8),
  },
  ageHeadStats: {
    ...globalStyles.regularFont,
    fontSize: Platform.OS === 'ios' ? hp(1.6) : hp(1.8),
    marginHorizontal: wp(1),
  },
  markerStyle:{
      height:hp(2),
      width:hp(2),
      borderRadius:100/2,
      backgroundColor:colors.primary
  }
});

export default SoundEffectComponent;
