import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {useState} from 'react';

const skills = [
  {
    id: 1,
    name: 'radio 1',
  },
  {
    id: 2,
    name: 'radio 2',
  },
  {
    id: 3,
    name: 'radio 3',
  },
  {
    id: 4,
    name: 'radio 4',
  },
  {
    id: 5,
    name: 'radio 5',
  },
];

export default function App() {
  const [selectedRadio, setSelectedRadio] = useState(1);

  return (
    <View style={styles.main}>
      {skills.map(item => (
        <TouchableOpacity
        key={item.id}
          onPress={() => {
            setSelectedRadio(item.id);
          }}>
          <View style={{alignItems: 'center', flexDirection: 'row'}}>
            <View style={styles.radio}>
              {selectedRadio === item.id ? (
                <View style={styles.radioBg}></View>
              ) : null}
            </View>
            <Text style={styles.radioText}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
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
