import { StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import { useState } from "react";
import styles from "../styles";

export default function App() {
  const [local, setLocal] = useState({
    latitude: -31.3291509,
    longitude: -54.10779,
  });

  return (
    <View style={styles.container}>
      <Text>Mapa de lancherias em Bagé</Text>

      <MapView
        style={styles.mapa}
        initialRegion={{
          latitude: -31.3291509,
          longitude: -54.10779,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        mapType="satellite"
        onPress={(ponto) => {
          setLocal({
            ...local,
            latitude: ponto.nativeEvent.coordinate.latitude,
            longitude: ponto.nativeEvent.coordinate.longitude,
          });
        }}
      >
        <Marker coordinate={local} />

        <Marker
          coordinate={{
            latitude: -31.3291963,
            longitude: -54.106559,
          }}
          title="Tuca Lanches"
          description="Lancheria famosinha e de lanches baratos."
        />
        <Marker
          coordinate={{
            latitude: -31.33003,
            longitude: -54.086639,
          }}
          title="X ao cubo"
          description="Lancheria focada em X, famosa pelo tamanho dos lanches."
        />
      </MapView>
    </View>
  );
}
