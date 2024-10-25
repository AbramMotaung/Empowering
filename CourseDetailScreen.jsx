import React from 'react';
import { View, Text } from 'react-native';

const CourseDetailScreen = ({ route }) => {
  const { courseId } = route.params;

  const course = {
    id: courseId,
    name: 'Course 1',
    fee: 'R10,000',
    description: 'This is a course description',
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{course.name}</Text>
      <Text style={{ fontSize: 18, color: 'gray' }}>{course.fee}</Text>
      <Text style={{ fontSize:  16, color: 'gray' }}>{course.description}</Text>
    </View>
  );
};

export default CourseDetailScreen;