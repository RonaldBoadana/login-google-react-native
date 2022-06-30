import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "react-native";

import { Container, BackgroundImage, CardapioText } from "./styles";

import { Header } from "../../components/Header";

export function Menu() {
  async function handleLogout(): Promise<void> {}

  return (
    <>
      <StatusBar barStyle="dark-content" translucent />
      <Container>
        <Header headerTitle="Cardápio" onPress={handleLogout} />
        <BackgroundImage
          source={require("../../assets/back.png")}
        ></BackgroundImage>
      </Container>
    </>
  );
}
