import React from 'react';
import { View, Text, Image, StyleSheet, Button, Alert } from 'react-native';

export default function ProductCard({ nome, preco, imagem }) {
  const handleComprar = () => {
    Alert.alert(`Produto ${nome} comprado!`);
  };

  return (
    <View style={styles.card}>
      <Image source={{ uri: imagem }} style={styles.imagem} />
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.preco}>R$ {preco.toFixed(2)}</Text>
      <Button title="Comprar" onPress={handleComprar} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
    margin: 10,
    width: 200,
  },
  imagem: {
    width: 150,
    height: 150,
    borderRadius: 8,
  },
  nome: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  preco: {
    marginTop: 5,
    fontSize: 14,
    color: 'green',
  },
});
