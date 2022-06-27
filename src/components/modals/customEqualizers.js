import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View,TouchableOpacity } from "react-native";


import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import { colors } from "../../styles/colors";
import { globalStyles } from "../../styles/globalStyles";
const CustomEqualizerModal = ({modalVisible, setModalVisible}) => {
  const options = ['custom', 'Normal', "Classical", 'Dance', 'Flat', 'Folk', 'Heavy Metal', 'Hip Hop', 'Jazz', 'Pop', 'Rock']
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
         
          setModalVisible(!modalVisible);
        }}
      >
        <TouchableOpacity style={styles.centeredView} activeOpacity={1} onPress={()=>{ setModalVisible(!modalVisible)}}>
          <View style={styles.modalView}>
            {
                options.map((item, index)=>(
                    <TouchableOpacity
                    onPress={()=>{ setModalVisible(!modalVisible)}}
                    >
                        <Text style={styles.optionText} >{item}</Text>
                    </TouchableOpacity>
                ))
            }
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom:hp(14)
    
  },
  modalView: {
    margin: hp(2),
    backgroundColor: "#00000090",
    paddingHorizontal:wp(4),
    paddingVertical:hp(2),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderTopRightRadius:hp(2),
    borderBottomLeftRadius:hp(2)
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  optionText:{
      color:colors.white,
      ...globalStyles.boldFont,
        fontSize:Platform.OS === 'ios' ? hp(1.8):hp(2)   
  }
});

export default CustomEqualizerModal;