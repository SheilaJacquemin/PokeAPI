import React, { useState, useEffect } from 'react';
import { FlatList, View, Text, Image, StyleSheet, Button } from 'react-native';
import axios from 'axios';

const API = 'https://hp-api.onrender.com/api/characters';

const CharacterList = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  const fetchData = async () => {
    try {
      const result = await axios(API);
      setCharacters(result.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
    </View>
  );

  return (
    <>
      <Button
        title={loading ? 'Cargando...' : 'Actualizar'}
        disabled={loading}
        onPress={() => {
          setLoading(true);
          fetchData();
        }}
      />
      <FlatList
        data={characters}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        style={styles.list}
      />
    </>
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CharacterList;
