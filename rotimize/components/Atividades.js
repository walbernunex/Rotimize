import React from 'react'; 
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert, Linking } from 'react-native';

function Atividades() {
  const atividades = [
    "Atividade 1: PLANO DE ABANDONO DIAMONDMALL",
    "Atividade 2: POP Teste Semanal das Bombas de Incêndio",
    "Atividade 3: POP Tomada de decisão em caso de anomalias na casa de bombas",
    "Atividade 4: POP Vistoria Diária de Casa da Bombas",
    "Atividade 5: POP Drenagem e Pressurização de VG",
    "Atividade 6: POP Preventiva mensal de VGs",
    "Atividade 7: POP Utilização de By-Pass e Manobra de Transbordos",
    "Atividade 8: POP Central SDAI",
    "Atividade 9: POP Combate a Incêndios e Apoio das equipes Manserv e Segurança N",
    "Atividade 10: POP Drenagem e Pressurização geral das redes de incêndio - HI e SPK",
    "Atividade 11: POP Acionamento do sistema de pressurização V01- V02",
    "Atividade 12: POP Acionamento do sistema de pressurização V03 - V04",
    "Atividade 13: POP Acionamento do sistema de pressurização V05 - V06",
    "Atividade 14: POP Acionamento do sistema de pressurização V07 - V08",
    "Atividade 15: POP Sistema de Exaustão e Sistema Fixo de SPCI em Cozinhas",
    "Atividade 16: POP Abastecimento e Operação da Central de GLP",
    "Atividade 17: POP Casa de Bombas de Água Potável",
    "Atividade 18: POP Atendimento a vítima em tentativa e-ou consumação de autoexterminio",
    "Atividade 19: Atendimento a vítima em APM Agitação Psicomotora (surto psiquiátrico)",
    "Atividade 20: POP Acompanhamento de trabalho em espaços confinados",
    "Atividade 21: POP Orientações Operacionais para Ocorrência de Atirador Ativo - Ataque em massa",
    "Atividade 22: POP Atendimento a vítimas com hemorragias exanguinantes",
    "Atividade 23: POP Atendimento de Primeiros Socorros SBV - PC e PCR",
    "Atividade 24: POP Atendimento de Primeiros Socorros - PROTOCOLO NEXUS E RMC",
    "Atividade 25: POP Atendimento de Primeiros Socorros - da Lipotimia a PCR",
    "Atividade 26: POP Primeiros Socorros Geral - SBV"
  ];

  const openPDF = async (index) => {
    let url;

    if (index === 0) url = "https://drive.google.com/file/d/1ShhWC64npUyxRT7OPnATmN-2kVBL3IV6/view?usp=drive_link";
    else if (index === 1) url = "https://drive.google.com/file/d/1Ck9ygl2wpYjGqnSUzeyQXmDU6oTBhD_S/view?usp=drive_link";
    else if (index === 2) url = "https://drive.google.com/file/d/1fG_0uLnlbzbeZceBSJfhXIrBqDLr4MgR/view?usp=drive_link";
    else if (index === 3) url = "https://drive.google.com/file/d/1_WTUULiRmFE79L_TExwyIY8jamXwTWM8/view?usp=drive_link";
    else if (index === 4) url = "https://drive.google.com/file/d/12uBWSCErLtXvrclDv___4LmDB9Xl59D_/view?usp=drive_link";
    else if (index === 5) url = "https://drive.google.com/file/d/18Yf52ETOLmTJO5ZbMyi3uIvj3QpeF0gC/view?usp=drive_link";
    else if (index === 6) url = "https://drive.google.com/file/d/1309_5_NKMma2itC_p76CxMILGR5GRj9v/view?usp=drive_link";
    else if (index === 7) url = "https://drive.google.com/file/d/1nVyEr3ox46-o11Wc-nxfaH8z0q5JHwPx/view?usp=drive_link";
    else if (index === 8) url = "https://drive.google.com/file/d/1F8FkH2lSRIVqhT-QYY7lJ0LfcI8F6nYI/view?usp=drive_link";
    else if (index === 9) url = "https://drive.google.com/file/d/1sFKdx6SheXpIC3UaiqhEDfPAS3oqguI6/view?usp=drive_link";
    else if (index === 10) url = "https://drive.google.com/file/d/1zrZhuMTGWCOF8WkEOrykK7Oq1LzfMMMG/view?usp=drive_link";
    else if (index === 11) url = "https://drive.google.com/file/d/19ThcZnc-YvZPN3XiMpGPzsh-taHh7utn/view?usp=drive_link";
    else if (index === 12) url = "https://drive.google.com/file/d/1r45b4UPY4zS2nr14UrGQOUvIie7I4-KT/view?usp=drive_link";
    else if (index === 13) url = "https://drive.google.com/file/d/1zgPzr7mrSDh97sLSwVdokSdPYvTPOREd/view?usp=drive_link";
    else if (index === 14) url = "https://drive.google.com/file/d/1OuOK8jT03vgjVeo6ep2LK8nRw4fdiM4s/view?usp=drive_link";
    else if (index === 15) url = "https://drive.google.com/file/d/1fVf66bQGEYz81m0PDSiYhjyC8jys3PE2/view?usp=drive_link";
    else if (index === 16) url = "https://drive.google.com/file/d/1vjEMqLoWTBNEFpI5Ir5wwxCobOcFeP5o/view?usp=drive_link";
    else if (index === 17) url = "https://drive.google.com/file/d/1gSRLAOKyt1UTZ15KKq8VD_e38YDepcVQ/view?usp=drive_link";
    else if (index === 18) url = "https://drive.google.com/file/d/1XjtdtttNF3-m77OCe1vWprca4HQAIiKR/view?usp=drive_link";
    else if (index === 19) url = "https://drive.google.com/file/d/14bHHLC0KeIVrpsWPyQdYfWX7fjGQmkQY/view?usp=drive_link";
    else if (index === 20) url = "https://drive.google.com/file/d/1ft2seZhP1bwKPyghU9vOcaAltRiPjlwj/view?usp=drive_link";
    else if (index === 21) url = "https://drive.google.com/file/d/1OZGLyq6KNDbzyHOep_LqP0gdQNUJr0J1/view?usp=drive_link";
    else if (index === 22) url = "https://drive.google.com/file/d/1OT30IIpuuYS6qsSTMWEeA-ez-YUtianL/view?usp=drive_link";
    else if (index === 23) url = "https://drive.google.com/file/d/1bBQloz_5MKtdK0silbCZgmrGl602lmss/view?usp=drive_link";
    else if (index === 24) url = "https://drive.google.com/file/d/1CGh1GjB0NLD--K0JleBzk2wyEVueeKVS/view?usp=drive_link";
    else if (index === 25) url = "https://drive.google.com/file/d/1v6LqdEzo0KIk9Uxed8Gr8dptZNa6gCkf/view?usp=drive_link";
    else {
      Alert.alert("PDF não disponível", "Esta atividade não possui um link associado.");
      return;
    }

    try {
      await Linking.openURL(url);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível abrir o link.");
    }
  };


  return (
    <View style={styles.container}>
      <Text style={styles.header}>Listagem de Atividades</Text>
      <ScrollView style={styles.activityList}>
        {atividades.map((atividade, index) => (
          <TouchableOpacity key={index} style={styles.activityItem} onPress={() => openPDF(index)}>
            <Text style={styles.activityText}>{atividade}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f8f8f8" },
  header: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  activityList: { flex: 1 },
  activityItem: { padding: 15, backgroundColor: "#e8e8e8", borderRadius: 8, marginBottom: 10 },
  activityText: { fontSize: 16 },
});

export default Atividades;
