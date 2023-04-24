import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import traer from './Library/ConsumirApi';

export default function App() {
  const [personajes, setPersonajes] = useState([]);

  const cargarPersonajes = async () => {
    const resultado = await traer();
    setPersonajes(resultado);
  };

  useEffect(() => {
    cargarPersonajes();
  }, []);

  const renderizarPersonaje = ({ item }) => {
    return (
      <View style={styles.tarjeta} key={item.name}>
        <Image style={styles.imagen} source={{ uri: item.image }} />
        <Text style={styles.nombre}>{item.name}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={personajes}
        renderItem={renderizarPersonaje}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tarjeta: {
    backgroundColor: '#F2F2F2',
    padding: 20,
    borderRadius: 5,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imagen: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  nombre: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
