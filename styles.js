import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapa: {
    width: "90%",
    height: "60%",
    backgroundColor: '#6CA0DC',
  },

  intro: {
    flex: 1,
    backgroundColor: "#fff",
    alignItem: "center",
    padding: '30px'
    
  },

  titulo: {
    fontSize: 24,
    color: "#053c54",
    fontWeight: "900",
    textShadowColor: "#1094cc",
    textShadowOffset: { width: 2, height: 5 },
    textShadowRadius: 2,
  },
  subtitulo: {
    fontSize: 18,
    color: "#053c54",
    fontWeight: "600",
  },

  input: {
    width: "80%",
    marginBottom: 10,
    paddingLeft: 5,
    borderRadius: 10,
    fontSize: 15,
    borderBottomWidth: 1.5,
    borderBottomColor: "#1094cc",
  },

  listaitem: {
    backgroundColor: "#6CA0DC",
    marginTop: 20,
    padding: 30,
    borderRadius: 12,
    flexDirection: "row",
  },

  imagem: {
    height: 100,
    width: 100,
  },

  modalconteiner: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "10%",
    width: "80%",
    height: 130,
  },

  modal: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#6CA0DC",
    width: "90%",
    height: 200,
    borderRadius: 10,
  },

  modalTitulo:{
    fontWeight:600,
    fontSize: 18,
    marginBottom: 10
  },

  modalTexto:{
    marginBottom:20,
    textAlign: 'justify'
  }
});
