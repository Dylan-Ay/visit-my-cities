import { ImageBackground, StyleSheet, View, Text } from "react-native"
import { ScreenWrapper } from "../components"
import SearchInput from "../components/SearchInput";

export const HomeScreen = ({ navigation }) => {
  return (
   <View>
      <ImageBackground
         source={require('../../assets/HomeScreenBanner.png')}
         style={styles.banner}
      >
         <Text style={styles.bannerText}>Découvrez les bâtiments du monde entier !</Text>
      </ImageBackground>
      
      <ScreenWrapper useEdges={false}>
         <SearchInput placeholder={"Rechercher une ville"}></SearchInput>
      </ScreenWrapper>
   </View>
  )
}

const styles = StyleSheet.create({
  banner: {
   height: 280,
   justifyContent: 'flex-end',
   alignItems: 'center',
   paddingHorizontal: 16,
  },

  bannerContainer: {
   gap: 12,
   width: '100%'
  },
  
  bannerText: {
   color: '#fff',
   fontSize: 30,
   fontWeight: 'bold',
   marginBottom: 5
  }
})