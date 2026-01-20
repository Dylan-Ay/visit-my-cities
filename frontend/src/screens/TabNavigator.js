import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <NavigationContainer>
        <Tab.Navigator>
            {/* <Tab.Screen name="Accueil" component={''} />
            <Tab.Screen name="Explorer" component={''} />
            <Tab.Screen name="À visiter" component={''} />
            <Tab.Screen name="Ajouter" component={''} />
            <Tab.Screen name="Profil" component={''} /> */}
        </Tab.Navigator>
    </NavigationContainer>
  );
}