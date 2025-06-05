import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

function TelaPrincipal({ navigation }) {
  const handleLogout = () => {
    navigation.replace('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textoInicio}>Bem-vindo, Usuário!</Text>

      <View style={styles.botaoContainer}>
        <Button title="Atividades" onPress={() => navigation.navigate('Atividades')} />
      </View>

      <View style={styles.botaoContainer}>
        <Button title="Ler QR CODE" onPress={() => navigation.navigate('QRCode')} />
      </View>

      <TouchableOpacity onPress={handleLogout}> 
        <Text style={styles.textoSair}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  textoInicio: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  botaoContainer: {
    width: '80%',
    marginBottom: 20,
  },
  textoSair: {
    marginTop: 80,
    fontSize: 13,
    color: 'red', 
    textDecorationLine: 'underline',
  },
});

export default TelaPrincipal;
