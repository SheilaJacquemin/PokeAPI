import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, FlatList, ImageBackground } from 'react-native';
import traer from '../services/ConsumirApi';

export default function PersonajesScreen() {
  const [personajes, setPersonajes] = useState([]);

  const cargarPersonajes = async () => {
    const resultado = await traer();
    setPersonajes(resultado.slice(0, 20)); // Mostrar solo los primeros 20 personajes
  };

  useEffect(() => {
    cargarPersonajes();
  }, []);

  const renderizarPersonaje = ({ item }) => {
    return (
      <View style={styles.tarjeta} key={item.nombre}>
        {item.imagen && <Image style={styles.imagen} source={{ uri: item.imagen }} />}
        <Text style={styles.nombre}>{item.nombre}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/hogwarts.jpg')} resizeMode="cover" style={styles.imageBg}>
        <FlatList
          data={personajes}
          renderItem={renderizarPersonaje}
          keyExtractor={(item) => item.nombre}
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    ImageBackground: './assets/hgwrts.png'
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
    width: 200,
    height: 200,
    marginRight: 10,
  },
  nombre: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  imageBg: {
    justifyContent: 'center'
  }
});
