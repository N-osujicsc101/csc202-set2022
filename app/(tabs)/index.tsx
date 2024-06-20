import React, { useState } from 'react';
import { StyleSheet, TextInput, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function TabOneScreen() {
  const [firstName, setFirstName] = useState('');
  const [surname, setSurname] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [dob, setDob] = useState('');
  const [address, setAddress] = useState('');
  const [dateOfRegistration, setDateOfRegistration] = useState('');
  const [matriculationNumber, setMatriculationNumber] = useState('');

  const handleSubmit = () => {
    console.log('Form submitted');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('/Users/nneomaosuji/Library/CloudStorage/OneDrive-Personal/Documents/YEAR 2 SEMESTER 2/COS 202/csc202-set2022/mobile dev/cliniHealth/assets/images/Princess clinic.png')} style={styles.logo} />
      <Text style={styles.title}>Biodata</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <View style={styles.inputContainer}>
        <Text style={styles.label}>First name</Text>
        <TextInput
          style={styles.input}
          placeholder="First name"
          value={firstName}
          onChangeText={setFirstName}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Surname</Text>
        <TextInput
          style={styles.input}
          placeholder="Surname"
          value={surname}
          onChangeText={setSurname}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Middle name</Text>
        <TextInput
          style={styles.input}
          placeholder="Middle name"
          value={middleName}
          onChangeText={setMiddleName}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Date of birth</Text>
        <TextInput
          style={styles.input}
          placeholder="Date of birth"
          value={dob}
          onChangeText={setDob}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Home address</Text>
        <TextInput
          style={styles.input}
          placeholder="Home address"
          value={address}
          onChangeText={setAddress}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Date of registration</Text>
        <TextInput
          style={styles.input}
          placeholder="Date of registration"
          value={dateOfRegistration}
          onChangeText={setDateOfRegistration}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Matnumber</Text>
        <TextInput
          style={styles.input}
          placeholder="Matnumber"
          value={matriculationNumber}
          onChangeText={setMatriculationNumber}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
    padding: 20,
  },
  logo: {
    width: 200,  
    height: 100, 
    marginBottom: 20, 
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: '80%',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 10,
    marginTop: -10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    height: 30,
    borderColor: 'gray',
    borderWidth: 2, 
    paddingHorizontal: 10,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#607D8B', 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10, 
    alignItems: 'center',
    width: '80%',
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
