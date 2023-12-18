import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import SearchScreen from './src/screens/SearchScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import { PaperProvider } from 'react-native-paper';

const BottomTabs = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <BottomTabs.Navigator
          initialRouteName='Search'
          screenOptions={{
            cardStyle: {
              width: '100%',
              flex: 1,
            },
            headerStyle: {
              backgroundColor: '#4f627a',
            },
            headerShadowVisible: false,
            headerTintColor: 'white',
            tabBarStyle: {
              backgroundColor: '#4f627a',
              borderTopWidth: 1,
              borderTopColor: '#4b5561',
            },
            tabBarActiveTintColor: '#ffffff',
            headerTitle: 'The Searcher',
            headerTitleStyle: {
              alignItems: 'center',
              fontSize: 24,
            },
          }}
        >
          <BottomTabs.Screen
            name='Settings'
            component={SettingsScreen}
            options={{
              title: 'Settings',
              tabBarLabel: 'Settings',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name='settings-outline' size={size} color={color} />
              ),
            }}
          />
          <BottomTabs.Screen
            name='Search'
            component={SearchScreen}
            options={{
              title: 'Search',
              tabBarLabel: 'Search',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name='search-outline' size={size} color={color} />
              ),
              color: 'black',
            }}
          />
        </BottomTabs.Navigator>
      </NavigationContainer>
    </>
  );
}
