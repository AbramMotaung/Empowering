import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const SixWeekCoursesScreen = ({ navigation }) => {
  const courses = [
    { id: 5, name: 'Child Minding', fee: 'R750' }, 
    { id: 6, name: 'Cooking', fee: 'R750' },
    { id: 7, name: 'Garden Maintenance', fee: 'R750' },
  ];

  const handleCoursePress = (courseId) => {
    navigation.navigate('CourseDetail', { courseId }); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Six-Week Courses</Text>
      <FlatList
        data={courses}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleCoursePress(item.id)}>
            <View style={styles.courseItem}>
              <Text style={styles.courseName}>{item.name}</Text>
              <Text style={styles.courseFee}>{item.fee}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  courseItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  courseName: {
    fontSize: 18,
  },
  courseFee: {
    fontSize: 16,
    color: 'gray',
  },
});

export default SixWeekCoursesScreen;