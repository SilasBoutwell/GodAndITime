import { StatusBar } from 'expo-status-bar';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHouse as fHr, faUser as fUr } from '@fortawesome/free-regular-svg-icons';
import { faBars, faHouse as fHB, faUser as fUB, faAdd, faUserGroup } from '@fortawesome/free-solid-svg-icons';

import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import { GlobalStyles } from './constants/styles';
import IconButton from './components/UI/IconButton';
import DevotionTabButton from './components/UI/DevotionTabButton';
import Home from './screens/Home';
import Profile from './screens/Profile';
import Devotion from './screens/Devotion';
import Share from './screens/Share';
import MoreScreen from './screens/MoreScreens/MoreScreen';
import Settings from './screens/MoreScreens/Settings';
import About from './screens/MoreScreens/About';
import ContactSupport from './screens/MoreScreens/ContactSupport';
import PrivacyData from './screens/MoreScreens/PrivacyData';
import VersionInfo from './screens/MoreScreens/VersionInfo';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
const RootStack = createNativeStackNavigator();
const tintColor = GlobalStyles.colors.Accent500;
const navigationColor = GlobalStyles.colors.Accent50;
const bgColor = GlobalStyles.colors.BackgroundColor;

function AppNavigation() {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="Tabs" component={BottomTabs} />
        <RootStack.Screen name="DevotionStack" component={DevotionStack} />
        <RootStack.Screen name="MoreNavigator" component={MoreNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

function MoreNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="More">{props => <MoreScreen {...props} bgColor={bgColor} />}</Stack.Screen>
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="ContactSupport" component={ContactSupport} />
      <Stack.Screen name="PrivacyData" component={PrivacyData} />
      <Stack.Screen name="VersionInfo" component={VersionInfo} />
    </Stack.Navigator>
  );
}

function DevotionStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: tintColor,
        headerStyle: { backgroundColor: navigationColor },
        headerTitleStyle: { color: 'black', fontWeight: 'bold', fontSize: 18 },
      }}
    >
      <Stack.Screen
        name="Devotion"
        options={{
          title: 'Devotion',
          headerShown: true,
          headerBackTitle: 'Back',
        }}
      >
        {props => <Devotion {...props} bgColor={bgColor} />}
      </Stack.Screen>
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
        headerStyle: { backgroundColor: navigationColor },
        tabBarStyle: { backgroundColor: navigationColor },
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
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={fHB} size={size} color={color} />
          ),
          title: 'God & I Time',
          tabBarLabel: 'Home',
        }}
      >
        {props => <Home {...props} bgColor={bgColor} />}
      </BottomTab.Screen>
      <BottomTab.Screen
        name="Share"
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faUserGroup} size={size} color={color} />
          ),
          title: 'Friends',
          tabBarLabel: 'Friends',
        }}
      >
        {props => <Share {...props} bgColor={bgColor} />}
      </BottomTab.Screen>
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
      >
        {() => null}
      </BottomTab.Screen>
      <BottomTab.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={fUB} size={size} color={color} />
          ),
        }}
      >
        {props => <Profile {...props} bgColor={bgColor} />}
      </BottomTab.Screen>
      <BottomTab.Screen
        name="MoreNavigator"
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faBars} size={size} color={color} />
          ),
          title: 'More',
        }}
      >
        {props => <MoreNavigator {...props} bgColor={bgColor} />}
      </BottomTab.Screen>
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
