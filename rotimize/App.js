import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaCadastro from './components/Cadastro';
import TelaPrincipal from './components/Principal';
import Atividades from './components/Atividades';
import QRCode from './components/QRCode';

function TelaLogin({ navigation }) {
  const [usuario, setUsuario] = useState(''); // Armazena o usuário
  const [senha, setSenha] = useState(''); // Armazena a senha
  const [erro, setErro] = useState(''); // Armazena a mensagem de validação

  const validarLogin = () => {
    if (usuario === 'admin' && senha === 'admin') {
      setErro(''); //Tira a mensagem se for validado o acesso
      navigation.navigate('Principal');
    } else {
      setErro('Usuário ou senha incorretos.'); //Mensagem de erro 
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" /> 
      <Text style={styles.nomeApp}>Rotimize  </Text>
      <TextInput
        style={styles.caixatexto}
        placeholder="Digite o usuário"
        value={usuario}
        onChangeText={setUsuario}
      />
      <TextInput
        secureTextEntry={true}
        style={styles.caixatexto}
        placeholder="Digite a senha"
        value={senha}
        onChangeText={setSenha}
      />
      {erro ? <Text style={styles.mensagemErro}>{erro}</Text> : null}
      <View style={styles.grupobotoes}>
        <Button title="Entrar" onPress={validarLogin} />

      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={TelaLogin} />
        <Stack.Screen name="Principal" component={TelaPrincipal} />
        <Stack.Screen name="Cadastro" component={TelaCadastro} />
        <Stack.Screen name="Atividades" component={Atividades} />
        <Stack.Screen name="QRCode" component={QRCode} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0', // Fundo cinza claro
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20, 
  },
  nomeApp: {
    color: '#007bff', // Cor azul 
    fontSize: 40,
    marginBottom: 50,
    fontWeight: 'bold', // Negrito
  },
  caixatexto: {
    backgroundColor: '#fff', // Fundo branco
    marginBottom: 25,
    width: '100%', // Largura para os campos de texto
    fontSize: 17,
    padding: 10, 
    borderRadius: 5, // Borda arredondada 
    borderColor: '#ccc', // Borda cinza clara
  },
  grupobotoes: {
    width: '100%',
    flexDirection: 'row', // Botões horizontalmente
    justifyContent: 'space-between', // Espalha os botões igualmente
    marginTop: 20, // Adiciona uma margem superior para espaço
  },
  mensagemErro: {
    color: 'red', // Cor vermelha para destacar erros
    marginBottom: 20,
  },
});

export default App;