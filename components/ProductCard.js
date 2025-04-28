import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function ProductCard({ nome, preco, imagem }) {
  const [modalVisible, setModalVisible] = useState(false);

  const handleComprar = () => {
    setModalVisible(true);
  };

  const fecharModal = () => {
    setModalVisible(false);
  };

  return (
    <LinearGradient
      colors={['#000000', '#040404', '#0c0c0b']}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.card}
    >
      <Image source={imagem} style={styles.imagem} />
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.preco}>R$ {preco.toFixed(2)}</Text>

      <TouchableOpacity style={styles.botao} onPress={handleComprar}>
        <Text style={styles.textoBotao}>Comprar</Text>
      </TouchableOpacity>

      {/* Modal */}
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="fade"
        onRequestClose={fecharModal}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTexto}>Produto {nome} comprado!</Text>
            <TouchableOpacity style={styles.modalBotao} onPress={fecharModal}>
              <Text style={styles.modalTextoBotao}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
    margin: 10,
    width: 250,
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
    color: '#fff',
  },
  preco: {
    marginTop: 5,
    fontSize: 14,
    color: 'lightgreen',
  },
  botao: {
    marginTop: 10,
    backgroundColor: '#222222',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: 250,
    backgroundColor: '#111111',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    elevation: 10,
  },
  modalTexto: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff',
  },
  modalBotao: {
    backgroundColor: '#222222',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  modalTextoBotao: {
    color: '#fff',
    fontSize: 16,
  },
});
