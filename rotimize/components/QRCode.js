import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Alert, Linking } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

function QRCode() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  // Função para abrir URLs externos
  const openLink = async (url) => {
    try {
      await Linking.openURL(url);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível abrir o link.");
    }
  };

  // Função para escanear o QR CODE
  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);

    if (data === '1') {
      openLink("https://drive.google.com/file/d/1lcv_AJRyfJo_N4ZvorQihAG7jH7_AcMp/view");
    } else if (data === '2') {
      openLink("https://drive.google.com/file/d/1BrDNx_4igKA4SbADERaqwYNafQ_0f9bR/view");
    } else {
      Alert.alert('Erro', 'QR Code não reconhecido!');
    }
  };

  if (hasPermission === null) {
    return <Text>Solicitando permissão para usar a câmera...</Text>;
  }
  if (hasPermission === false) {
    return <Text>Sem permissão para acessar a câmera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <Button title="Toque para escanear novamente" onPress={() => setScanned(false)} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default QRCode;