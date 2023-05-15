import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ImageBackground } from 'react-native';
import traer from '../Library/ConsumirApi';

export default function PersonajesScreen() {
  const [personajes, setPersonajes] = useState([]);
  const [mostrarPersonajes, setMostrarPersonajes] = useState(false);

  const cargarPersonajes = async () => {
    const resultado = await traer();
    setPersonajes(resultado);
  };

  useEffect(() => {
    cargarPersonajes();
  }, []);

  const renderizarPersonaje = ({ item }) => {
    return (
      <View style={styles.tarjeta} key={item.nombre}>
        <Image style={styles.imagen} source={{ uri: item.imagen }} />
        <Text style={styles.nombre}>{item.nombre}</Text>
      </View>
    );
  };

  const toggleMostrarPersonajes = () => {
    setMostrarPersonajes(!mostrarPersonajes);
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/hogwarts.jpg')} resizeMode="cover" style={styles.imageBg}>

      <TouchableOpacity style={styles.boton} onPress={toggleMostrarPersonajes}>
        <Text style={styles.textoBoton}>
          {mostrarPersonajes ? 'Ocultar Personajes' : 'Mostrar Personajes'}
        </Text>
      </TouchableOpacity>
      {mostrarPersonajes && (
        <FlatList
       
        data={personajes}
        renderItem={renderizarPersonaje}
        key={(item) => item.name}
        />
        )}
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
  boton: {
    backgroundColor: '#4285F4',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  textoBoton: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
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
