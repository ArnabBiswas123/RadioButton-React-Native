import React from 'react';
import {View, Modal, Button, StyleSheet, Text} from 'react-native';
import {useState} from 'react';

export default function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <View style={styles.main}>
      <Modal transparent={true} visible={showModal} animationType='slide'>
        <View style={styles.centerrview}>
          <View style={styles.modalview}>
            <Text style={{fontSize: 20, margin: 20}}>
              Hello Welcome to the Modal
            </Text>
            <Button
              title="Close Modal"
              onPress={() => {
                setShowModal(false);
              }}
            />
          </View>
        </View>
      </Modal>
      <Button
        title="Open Modal"
        onPress={() => {
          setShowModal(true);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  centerrview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalview: {
    backgroundColor: 'skyblue',
    padding: 50,
    borderRadius: 20,
    shadowColor: 'black',
    elevation: 5,
  },
});
