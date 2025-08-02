import { StatusBar } from 'expo-status-bar';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHouse as fHr, faUser as fUr } from '@fortawesome/free-regular-svg-icons';
import { faBars, faHouse as fHB, faUser as fUB, faAdd } from '@fortawesome/free-solid-svg-icons';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import IconButton from './components/UI/IconButton';
import Home from './screens/Home';
import Profile from './screens/Profile';
import More from './screens/More';
import Devotion from './screens/Devotion';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <BottomTab.Navigator
      screenOptions={({ navigation }) => ({
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerRight: ({ tintColor }) =>
          <IconButton
            icon={faAdd}
            size={22}
            color={tintColor}
            onPress={() => navigation.navigate('Devotion')}
          />,
      })}>
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={fHB} size={size} color={color} />
          ),
          title: 'God & I Time',
          tabBarLabel: 'Home',
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={fUB} size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="More"
        component={More}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faBars} size={size} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator >
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="GodAndITime"
            component={BottomTabs}
            options={{
              headerShown: false,
              title: 'Home',
            }}
          />
          <Stack.Screen
            name="Devotion"
            component={Devotion}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
