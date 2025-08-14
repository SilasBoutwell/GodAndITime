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
import Home from './navigation/screens/Home';
import Profile from './navigation/screens/Profile';
import Devotion from './navigation/screens/Devotion';
import Share from './navigation/screens/Share';
import MoreScreen from './navigation/screens/MoreScreen';
import Settings from './navigation/screens/MoreScreens/Settings';
import About from './navigation/screens/MoreScreens/About';
import ContactSupport from './navigation/screens/MoreScreens/ContactSupport';
import PrivacyData from './navigation/screens/MoreScreens/PrivacyData';
import VersionInfo from './navigation/screens/MoreScreens/VersionInfo';


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
        <RootStack.Screen name="SettingsStack" component={SettingsStack} />
        <RootStack.Screen name="AboutStack" component={AboutStack} />
        <RootStack.Screen name="ContactSupportStack" component={ContactSupportStack} />
        <RootStack.Screen name="PrivacyDataStack" component={PrivacyDataStack} />
        <RootStack.Screen name="VersionInfoStack" component={VersionInfoStack} />
      </RootStack.Navigator>
    </NavigationContainer>
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
          headerBackTitle: '',
        }}
      >
        {props => <Devotion {...props} bgColor={bgColor} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

function SettingsStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: tintColor,
        headerStyle: { backgroundColor: navigationColor },
        headerTitleStyle: { color: 'black', fontWeight: 'bold', fontSize: 18 },
      }}
    >
      <Stack.Screen
        name="Settings"
        options={{
          title: 'Settings',
          headerShown: true,
          headerBackTitle: '',
        }}>
        {props => <Settings {...props} bgColor={bgColor} />}
      </Stack.Screen>
    </Stack.Navigator>
  )
}

function AboutStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: tintColor,
        headerStyle: { backgroundColor: navigationColor },
        headerTitleStyle: { color: 'black', fontWeight: 'bold', fontSize: 18 },
      }}
    >
      <Stack.Screen
        name="About"
        options={{
          title: 'About',
          headerShown: true,
          headerBackTitle: '',
        }}
      >
        {props => <About {...props} bgColor={bgColor} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

function ContactSupportStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: tintColor,
        headerStyle: { backgroundColor: navigationColor },
        headerTitleStyle: { color: 'black', fontWeight: 'bold', fontSize: 18 },
      }}
    >
      <Stack.Screen
        name="ContactSupport"
        options={{
          title: 'Contact & Support',
          headerShown: true,
          headerBackTitle: '',
        }}
      >
        {props => <ContactSupport {...props} bgColor={bgColor} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

function PrivacyDataStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: tintColor,
        headerStyle: { backgroundColor: navigationColor },
        headerTitleStyle: { color: 'black', fontWeight: 'bold', fontSize: 18 },
      }}
    >
      <Stack.Screen
        name="PrivacyData"
        options={{
          title: 'Privacy & Data',
          headerShown: true,
          headerBackTitle: '',
        }}
      >
        {props => <PrivacyData {...props} bgColor={bgColor} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

function VersionInfoStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: tintColor,
        headerStyle: { backgroundColor: navigationColor },
        headerTitleStyle: { color: 'black', fontWeight: 'bold', fontSize: 18 },
      }}
    >
      <Stack.Screen
        name="VersionInfo"
        options={{
          title: 'Version Info',
          headerShown: true,
          headerBackTitle: '',
        }}
      >
        {props => <VersionInfo {...props} bgColor={bgColor} />}
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
        name="More"
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faBars} size={size} color={color} />
          ),
          title: 'More',
        }}
      >
        {props => <MoreScreen {...props} bgColor={bgColor} />}
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
