import { Text, View } from "react-native";
import styles from "./styles";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialIcons";

import Home from "./screens/Home";
import Login from "./screens/Login.js";
import Config from "./screens/Config";
import Lancherias from "./screens/Lancherias";
import Favoritos from "./screens/Fav.js";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Inicio" component={Home} />
        <Tab.Screen name="Lancherias" component={Lancherias} />
        <Tab.Screen name="Favoritas" component={Favoritos} />
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Config" component={Config} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
