import React, { useState, useEffect } from "react";
import { View, Text, Image, Button, Dimensions } from "react-native";

import { styles } from "./styles";
import { Card } from "../../components/index";
import { colors } from "../../constants";

const GameOver = ({ rounds, selectedNumber, onHandleRestartGame }) => {
  const [isPortrait, setIsPortrait] = useState(true);

  const onPortrait = () => {
    const dim = Dimensions.get("screen");
    return dim.height >= dim.width;
  };

  const statePortrait = () => {
    setIsPortrait(onPortrait);
  };

  useEffect(() => {
    const suscription = Dimensions.addEventListener("change", statePortrait);

    return () => {
      suscription.remove();
    };
  });

  console.warn("isPortrait", isPortrait);

  return (
    <View style={styles.container}>
      <Card style={isPortrait ? styles.content : styles.contentLandscape}>
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/1687/1687666.png",
          }}
          style={styles.image}
        />
        <Text style={styles.text}>Rondas: {rounds}</Text>
        <Text style={styles.text}>Numero seleccionado: {selectedNumber}</Text>
        <Button title="Reiniciar juego" onPress={onHandleRestartGame} color={colors.primary} />
      </Card>
    </View>
  );
};

export default GameOver;
