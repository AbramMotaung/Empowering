import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const CalculateFeesScreen = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [courses, setCourses] = useState([]);
  const [totalFee, setTotalFee] = useState(0);

  const handleCalculateFees = () => {
    // Calculate total fee logic here
    setTotalFee(10000);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Calculate Total Fee</Text>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, padding: 10 }}
      />
      <TextInput
        placeholder="Phone Number"
        value={phone}
        onChangeText={(text) => setPhone(text)}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, padding: 10 }}
      />
      <TextInput
        placeholder="Email Address"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, padding: 10 }}
      />
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
      <Button title="Calculate Total Fee" onPress={handleCalculateFees} />
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Total Fee: R{totalFee}</Text>
    </View>
  );
};

export default CalculateFeesScreen;