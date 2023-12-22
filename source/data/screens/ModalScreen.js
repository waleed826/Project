import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import Modal from "react-native-modal";

const ModalScreen= ()  => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={{ flex: 1 }}>
      <Button title="Show modal" onPress={toggleModal} />

      <Modal isVisible={isModalVisible}
       onBackdropPress={()=>setModalVisible(false)}
      >
        <View style={{ flex: 0.5,backgroundColor:'white' }}>
          <Text style={{color:'black',fontSize:20}}>Hello!</Text>
          <Button title="Hide modal" onPress={toggleModal} />
        </View>
      </Modal>
    </View>
  )
}

export default ModalScreen;