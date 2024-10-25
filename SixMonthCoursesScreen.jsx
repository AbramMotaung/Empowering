import React from 'react';
import { View, Text, FlatList } from 'react-native';

const SixMonthCoursesScreen = () => {
  const courses = [
    { id: 1, name: 'Course 1', fee: 'R10,000' },
    { id: 2, name: 'Course 2', fee: 'R12,000' },
    { id: 3, name: 'Course 3', fee: 'R15,000' },
  ];

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Six-Month Courses</Text>
      <FlatList
        data={courses}
        renderItem={({ item }) => (
          <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
            <Text style={{ fontSize: 18 }}>{item.name}</Text>
            <Text style={{ fontSize: 16, color: 'gray' }}>{item.fee}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default SixMonthCoursesScreen;