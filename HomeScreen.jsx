import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from './expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={require('./logo.png')} style={{ width: 100, height: 100 }} />
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Empowering the Nation</Text>
      <TouchableOpacity onPress={() => navigation.navigate('SixMonthCourses')}>
        <Text style={{ fontSize: 18, color: 'blue' }}>Six-Month Courses</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SixWeekCourses')}>
        <Text style={{ fontSize: 18, color: 'blue' }}>Six-Week Courses</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;