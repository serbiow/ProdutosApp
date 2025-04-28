import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import ProductCard from './components/ProductCard';

export default function App() {
  const produtos = [
    {
      id: 1,
      nome: 'Tênis Esportivo',
      preco: 199.90,
      imagem: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      nome: 'Camisa Polo',
      preco: 89.90,
      imagem: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      nome: 'Relógio Digital',
      preco: 299.90,
      imagem: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      nome: 'Fone Bluetooth',
      preco: 159.90,
      imagem: 'https://via.placeholder.com/150',
    },
    {
      id: 5,
      nome: 'Mochila Executiva',
      preco: 249.90,
      imagem: 'https://via.placeholder.com/150',
    },
    {
      id: 6,
      nome: 'Óculos de Sol',
      preco: 129.90,
      imagem: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
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
  },
  listaProdutos: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});
