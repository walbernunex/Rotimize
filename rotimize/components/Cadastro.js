import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const validarCPF = (cpf) => {
    // Tira os caracteres especiais e valida se o CPF possui 11 dígitos)
    cpf = cpf.replace(/\D/g, '');
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;
    let soma = 0;
    let resto;
    for (let i = 1; i <= 9; i++) soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(9, 10))) return false;
    soma = 0;
    for (let i = 1; i <= 10; i++) soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(10, 11))) return false;
    return true;
  };

  const handleCadastrar = () => {
    if (!validarCPF(cpf)) {
      Alert.alert('Erro', 'CPF inválido!');
      return;
    }
    if (senha !== confirmarSenha) {
      Alert.alert('Erro', 'As senhas não coincidem!');
      return;
    }
    Alert.alert('Sucesso', 'Usuário cadastrado com sucesso!');
    limparCampos();
  };
//limpa todos os campos do formulário
  const limparCampos = () => {
    setNome('');
    setCpf('');
    setTelefone('');
    setEmail('');
    setSenha('');
    setConfirmarSenha('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome Completo:</Text>
      <TextInput
        style={styles.caixadetexto}
        value={nome}
        onChangeText={setNome}
        placeholder="Digite o nome completo"
      />
      
      <Text style={styles.label}>CPF:</Text>
      <TextInput
        style={styles.caixadetexto}
        value={cpf}
        onChangeText={setCpf}
        placeholder="Digite o CPF"
        keyboardType="numeric"
      />
      
      <Text style={styles.label}>Telefone:</Text>
      <TextInput
        style={styles.caixadetexto}
        value={telefone}
        onChangeText={setTelefone}
        placeholder="Digite o telefone"
        keyboardType="phone-pad"
      />
      
      <Text style={styles.label}>E-mail:</Text>
      <TextInput
        style={styles.caixadetexto}
        value={email}
        onChangeText={setEmail}
        placeholder="Digite o e-mail"
        keyboardType="email-address"
      />
      
      <Text style={styles.label}>Senha:</Text>
      <TextInput
        style={styles.caixadetexto}
        value={senha}
        onChangeText={setSenha}
        placeholder="Digite a senha"
        secureTextEntry
      />
      
      <Text style={styles.label}>Confirme a Senha:</Text>
      <TextInput
        style={styles.caixadetexto}
        value={confirmarSenha}
        onChangeText={setConfirmarSenha}
        placeholder="Repita a senha"
        secureTextEntry
      />
      
      <View style={styles.botoes}>
        <Button title="Cadastrar" onPress={handleCadastrar} />
        <Button title="Limpar" onPress={limparCampos} color="red" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',   // Centraliza os itens tanto na horizontal quanto na vertical
    backgroundColor: '#f5f5f5', //Cor de fundo
    padding: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333', // Utiliza uma cor mais escura 
  },
  caixadetexto: {
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5, // Adiciona cantos arredondados
    marginBottom: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff', // Adiciona um fundo branco
  },
  botoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%', // Garante que os botões ocupem toda a largura
  },
});

export default Cadastro;