import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  Button,
} from "react-native";
import styles from "../styles";

export default function Lancheria() {
  const [ModalVisible, setModalVisible] = useState(false);
  const [descricao, setDescricao] = useState("");

  const Lanches = [
    {
      id: 1,
      nome:"Tuca Lanches",
      imagem: require("../assets/tuca.png"),
      descricao:
        "Lancheria que fica perto da praça daestação, a lancheria tem varios tipos de lanches e com preços apartir de R$8,00.",
    },
    {
      id: 2,
      nome:"X ao cubo",
      imagem: require("../assets/xaocubo.png"),
      descricao:
        "Lancheria para pessoas de exatas, seus lanches tem nomes de cientistas da area de fisica e matematica.",
    },
  ];

  const criaItem = ({ item }) => (
    <TouchableOpacity
      style={styles.listaitem}
      onPress={() => {
        setModalVisible(true);
        setDescricao(item.descricao);
      }}
      onLongPress={() => Linking.openURL(item.url)}
    >
      <Image source={item.imagem} style={styles.imagem} />
      <View>
        <Text>Código: {item.id} </Text>
        <Text>Nome: {item.nome}</Text>

      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text>Lancherias</Text>

      <FlatList
        data={Lanches}
        fade
        renderItem={criaItem}
        keyExtractor={(item) => item.id}
      />

      <Modal visible={ModalVisible} transparent={true} animation="fade">
        <View style={styles.modalconteiner}>
          <View style={styles.modal}>
            <Text>Clicou no item</Text>
            <Text style={styles.modalTitulo}>Descrição:</Text>
            <Text style={styles.modalTexto}>{descricao}</Text>
            <Button
              title="Fechar"
              onPress={() => setModalVisible(false)}
            ></Button>
          </View>
        </View>
      </Modal>
    </View>
  );
}
