import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {useState} from 'react';

export default function App() {
  const [selectedRadio, setSelectedRadio] = useState(1);

  return (
    <View style={styles.main}>
      <TouchableOpacity
        onPress={() => {
          setSelectedRadio(1);
        }}>
        <View style={{alignItems: 'center', flexDirection: 'row'}}>
          <View style={styles.radio}>
            {selectedRadio === 1 ? <View style={styles.radioBg}></View> : null}
          </View>
          <Text style={styles.radioText}>Radio 1</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setSelectedRadio(2);
        }}>
        <View style={{alignItems: 'center', flexDirection: 'row'}}>
          <View style={styles.radio}>
            {selectedRadio === 2 ? <View style={styles.radioBg}></View> : null}
          </View>
          <Text style={styles.radioText}>Radio 2</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioText: {
    fontSize: 20,
  },
  radio: {
    height: 40,
    width: 40,
    borderColor: 'black',
    borderRadius: 20,
    borderWidth: 2,
    margin: 10,
  },
  radioBg: {
    backgroundColor: 'black',
    height: 28,
    width: 28,
    borderRadius: 20,
    margin: 4,
  },
});
