import React, { useState } from 'react';
import { StyleSheet, TextInput, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function TabTwoScreen() {
  const [clinicDate, setClinicDate] = useState('');
  const [ailmentNature, setAilmentNature] = useState('');
  const [medicinePrescribed, setMedicinePrescribed] = useState('');
  const [procedureUndertaken, setProcedureUndertaken] = useState('');
  const [dateOfNextAppt, setDateOfNextAppt] = useState('');

  const handleSubmit = () => {
    console.log('Form submitted');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('/Users/nneomaosuji/Library/CloudStorage/OneDrive-Personal/Documents/YEAR 2 SEMESTER 2/COS 202/csc202-set2022/mobile dev/cliniHealth/assets/images/Princess clinic.png')} style={styles.logo} />
      <Text style={styles.title}>Clinical Records</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Clinic date</Text>
        <TextInput
          style={styles.input}
          placeholder="Clinic date"
          value={clinicDate}
          onChangeText={setClinicDate}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nature of ailment</Text>
        <TextInput
          style={styles.input}
          placeholder="Nature of ailment"
          value={ailmentNature}
          onChangeText={setAilmentNature}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Medicine prescribed</Text>
        <TextInput
          style={styles.input}
          placeholder="Medicine prescribed"
          value={medicinePrescribed}
          onChangeText={setMedicinePrescribed}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Procedure undertaken</Text>
        <TextInput
          style={styles.input}
          placeholder="Procedure undertaken"
          value={procedureUndertaken}
          onChangeText={setProcedureUndertaken}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Date of next appointment</Text>
        <TextInput
          style={styles.input}
          placeholder="Date of next appointment"
          value={dateOfNextAppt}
          onChangeText={setDateOfNextAppt}
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
  button: {
    backgroundColor: '#607D8B', 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10, 
    alignItems: 'center',
    width: '80%',
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
