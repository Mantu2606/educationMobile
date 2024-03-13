
 import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Calendar } from 'react-native-calendars';
 
function Attand() {
  const [markedDates, setMarkedDates] = useState({});
  const [attendanceCount, setAttendanceCount] = useState(0);
  const [leaveCount, setLeaveCount] = useState(0);
  const [absentCount, setAbsentCount] = useState(0);

  const handleDayPress = (day) => {
    const { dateString } = day;
    const updatedMarkedDates = { ...markedDates };

    // Toggle marking on the calendar
    if (!updatedMarkedDates[dateString]) {
      updatedMarkedDates[dateString] = {
        selected: true,
        selectedColor: '#2ECC71',
      };
    } else {
      delete updatedMarkedDates[dateString];
    }

    setMarkedDates(updatedMarkedDates);
    calculateCounts();
  };

  const handlePresent = () => {
    const today = new Date();
    const dateString = today.toISOString().split('T')[0];
    const updatedMarkedDates = { ...markedDates };

    updatedMarkedDates[dateString] = {
      selected: true,
      selectedColor: '#2ECC71',
    };

    setMarkedDates(updatedMarkedDates);
    calculateCounts();
  };

  const handleLeave = () => {
    const today = new Date();
    const dateString = today.toISOString().split('T')[0];
    const updatedMarkedDates = { ...markedDates };

    updatedMarkedDates[dateString] = {
      selected: true,
      selectedColor: '#FFA500',
    };

    setMarkedDates(updatedMarkedDates);
    calculateCounts();
  };

  const handleAbsent = () => {
    const today = new Date();
    const dateString = today.toISOString().split('T')[0];
    const updatedMarkedDates = { ...markedDates };

    updatedMarkedDates[dateString] = {
      selected: true,
      selectedColor: '#FF5733',
    };

    setMarkedDates(updatedMarkedDates);
    calculateCounts();
  };

  const calculateCounts = () => {
    const dates = Object.keys(markedDates);
    let attendance = 0;
    let leave = 0;
    let absent = 0;

    dates.forEach((date) => {
      if (markedDates[date].selectedColor === '#2ECC71') {
        attendance++;
      } else if (markedDates[date].selectedColor === '#FFA500') {
        leave++;
      } else if (markedDates[date].selectedColor === '#FF5733') {
        absent++;
      }
    });

    setAttendanceCount(attendance);
    setLeaveCount(leave);
    setAbsentCount(absent);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Attendance Sheet</Text>
      <View style={styles.buttonContainer}>
        <Button title="Present" onPress={handlePresent} />
        <Button title="Leave" onPress={handleLeave} />
        <Button title="Absent" onPress={handleAbsent} />
      </View>
      <Calendar
        markedDates={markedDates}
        onDayPress={handleDayPress}
        markingType={'custom'}
      />
      <View style={styles.countContainer}>
        <Text>Attendance: {attendanceCount}</Text>
        <Text>Leave: {leaveCount}</Text>
        <Text>Absent: {absentCount}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor:"pink"
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    backgroundColor:"pink"
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 10,
  },
  countContainer: {
    marginTop: 20,
  },
});

export default Attand
