import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';

export default function App() {

const [texto, setTexto] = useState('Texto Normal')

const handleclick = () => {
  setTexto('Novo texto')
}

  return (
    <View>
      <Text> {texto} </Text>
      <Button title='Clique aqui' onPress={handleclick}/>
    </View>
  );
}