import React, { useState } from 'react';
import { View,Image,Text, TextInput, Button, StyleSheet } from 'react-native';

const Profile = () => {
  const [studentNo, setStudentNo] = useState('');
  const [father, setFather] = useState('');
  const [mother, setMother] = useState('');
  const [address, setAddress] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [medium, setMedium] = useState('');
  const [fatherNo, setFatherNo] = useState('');

  const handleFormSubmit = () => {
    // Handle form submission here, you can send the data to a server or do something else with it
    console.log({
      studentNo,
      father,
      mother,
      address,
      dob,
      gender,
      medium,
      fatherNo
    });
    // Clear form fields after submission
    setStudentNo('');
    setFather('');
    setMother('');
    setAddress('');
    setDob('');
    setGender('');
    setMedium('');
    setFatherNo('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Text>Student Profile</Text>
      <Image
          resizeMode="contain"
          source={require("../../assets/profile.jpeg")}
        />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Registration Number"
        value={studentNo}
        onChangeText={text => setStudentNo(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Father's Name"
        value={father}
        onChangeText={text => setFather(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Mother's Name"
        value={mother}
        onChangeText={text => setMother(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        value={address}
        onChangeText={text => setAddress(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Date of Birth"
        value={dob}
        onChangeText={text => setDob(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Gender"
        value={gender}
        onChangeText={text => setGender(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Medium"
        value={medium}
        onChangeText={text => setMedium(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Father's Phone Number"
        value={fatherNo}
        onChangeText={text => setFatherNo(text)}
      />
      <Button title="Submit" onPress={handleFormSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor:"pink"
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  profile:{
    backgroundColor:"pink"
  }
});


export default Profile;
