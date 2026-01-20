import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TabNavigator from './src/screens/TabNavigator';

export default function App() {
  return (
    <View style={styles.container}>
      <TabNavigator />
      <Text style={styles.text}>Open up App.js to start working on your app!</Text>
      <Text style={styles.textSecondary}>Je suis le texte secondaire</Text>
      <Text style={styles.textPrincipal}>Je suis le texte principal</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: '#222222'
  },

  textPrincipal: {
    color: '#2F3E46'
  },

  textSecondary: {
    color: '#84A98C'
  }
});

// Couleur principale : Bleu ardoise (#2F3E46)

// Couleur secondaire : Vert sauge (#84A98C)

// Accent : Ocre / pierre (#E9C46A)

// Texte principal : Noir doux (#222222)