import React from 'react';
import { Text, ScrollView, StyleSheet, View } from 'react-native';
import ProductCard from './components/ProductCard';

export default function App() {
  const produtos = [
    {
      id: 1,
      nome: 'Tênis Esportivo',
      preco: 199.90,
      imagem: require('./assets/tenis2.png'),
    },
    {
      id: 2,
      nome: 'Camisa Polo',
      preco: 89.90,
      imagem: require('./assets/camisa2.png'),
    },
    {
      id: 3,
      nome: 'Relógio Digital',
      preco: 299.90,
      imagem: require('./assets/relogio2.png'),
    },
    {
      id: 4,
      nome: 'Fone Bluetooth',
      preco: 159.90,
      imagem: require('./assets/fone2.png'),
    },
    {
      id: 5,
      nome: 'Mochila Executiva',
      preco: 249.90,
      imagem: require('./assets/mochila2.png'),
    },
    {
      id: 6,
      nome: 'Óculos de Sol',
      preco: 129.90,
      imagem: require('./assets/oculos2.png'),
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Camelô da Rocinha</Text>
      <View style={styles.listaProdutos}>
        {produtos.map((produto) => (
          <ProductCard
            key={produto.id}
            nome={produto.nome}
            preco={produto.preco}
            imagem={produto.imagem}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    backgroundColor: '#111111',
  },
  titulo: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 30,
    marginBottom: 15,
  },
  listaProdutos: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});
