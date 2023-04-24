import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';


const API = 'https://pokeapi.co/api/v2/pokemon/';

export default function App() {
  const [pokemonList, setPokemonList] = useState([]);

  const handleButtonPress = async () => {
    try {
      const response = await fetch(`${API}?limit=20`);
      const data = await response.json();
      const pokemonNames = data.results.map(pokemon => pokemon.name);
      setPokemonList(pokemonNames);
    } catch (error) {
      console.error('Se produjo un error: ', error);
    }
  };

  const renderItem = ({ item }) => (
    <View style={{ paddingVertical: 10 }}>
      <Text>{item}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={handleButtonPress}>
        <Text style={{ fontSize: 20 }}>Mostrar Pokemones</Text>
      </TouchableOpacity>
      <FlatList
        data={pokemonList}
        renderItem={renderItem}
        keyExtractor={item => item}
        style={{ marginTop: 20 }}
      />
    </View>
  );
}
