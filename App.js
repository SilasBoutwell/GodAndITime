import { StatusBar } from 'expo-status-bar';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHouse as fHr, faUser as fUr } from '@fortawesome/free-regular-svg-icons';
import { faBars, faHouse as fHB, faUser as fUB, faAdd, faUserGroup } from '@fortawesome/free-solid-svg-icons';

import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import { GlobalStyles } from './constants/styles';
import IconButton from './components/UI/IconButton';
import DevotionTabButton from './components/UI/DevotionTabButton';
import Home from './screens/Home';
import Profile from './screens/Profile';
import More from './screens/More';
import Devotion from './screens/Devotion';
import Share from './screens/Share';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
const RootStack = createNativeStackNavigator();
const tintColor = GlobalStyles.colors.Accent500;

function AppNavigation() {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="Tabs" component={BottomTabs} />
        <RootStack.Screen name="DevotionStack" component={DevotionStack} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

function DevotionStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Devotion"
        component={Devotion}
        options={{
          title: 'Devotion',
          headerShown: true,
          headerBackTitle: 'Back',
        }}
      />
    </Stack.Navigator>
  );
}

function BottomTabs() {
  return (
    <BottomTab.Navigator
      screenOptions={({ navigation }) => ({
        headerTitleStyle: { color: 'black', fontWeight: 'bold', fontSize: 18 },
        headerTintColor: tintColor,
        tabBarActiveTintColor: tintColor,
        headerStyle: { backgroundColor: GlobalStyles.colors.Accent50 },
        tabBarStyle: { backgroundColor: GlobalStyles.colors.Accent50 },
        headerRight: ({ tintColor }) =>
          <IconButton
            icon={faAdd}
            size={22}
            color={tintColor}
            onPress={() => navigation.navigate('DevotionStack')}
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
        name="Share"
        component={Share}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faUserGroup} size={size} color={color} />
          ),
          title: 'Friends',
          tabBarLabel: 'Friends',
        }}
      />
      <BottomTab.Screen
        name="Devotion"
        options={({ route }) => ({
          title: 'Devotion',
          tabBarLabel: '',
          tabBarButton: (props) => (
            <DevotionTabButton
              {...props}
              color={tintColor}
            />
          )
        })}
      >{() => null}</BottomTab.Screen>

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
      <AppNavigation />
    </>
  );
}
