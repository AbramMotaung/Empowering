import React from 'react';
import { View, Text, FlatList } from 'react-native';

const SixWeekCoursesScreen = () => {
  const courses = [
    { id: 1, name: 'Short Course 1', fee: 'R5,000' },
    { id: 2, name: 'Short Course 2', fee: 'R6,000' },
    { id: 3, name: 'Short Course 3', fee: 'R7,000' },
  ];

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Six-Week Courses</Text>
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

export default SixWeekCoursesScreen;