import { StyleSheet, Text, View, Image, TextInput, Button } from "react-native";
import { useState } from "react";
import styles from "../styles";
export default function Login(){
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const salvar = () => {
    alert("Salvou! \n\n" + "Nome: " + nome + "\n" + "Email: " + email);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bem vindo 6 INFO!!!</Text>
      <Text style={styles.subtitulo}>
        Desenvolvimento para Dispositivos Móveis I
      </Text>
      {/* <Image
        source={require("../assets/corsarios.png")}
        style={{ width: 280, height: 280 }}
      /> */}
      <TextInput
        placeholder="Nome"
        style={styles.input}
        autoCaptalize="characters"
        onChangeText={(nome) => setNome(nome)}
      />
      <TextInput
        placeholder="Email"
        style={styles.input}
        inputMode="email"
        onChangeText={(email) => setEmail(email)}
      />
      <TextInput
        placeholder="Senha"
        style={styles.input}
        securityTextentry={true}
        onChangeText={(senha) => setSenha(senha)}
      />

      <Button
        title="Salvar"
        onPress={() => alert("Salvo com sucesso " + nome)}
      />
      <Button title="Salvar e mostrar" onPress={salvar} />
    </View>
  );

}

;
