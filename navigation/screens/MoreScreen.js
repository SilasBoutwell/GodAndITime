import { useRef, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Animated, Text, ScrollView, StyleSheet } from 'react-native';
import { faCog, faLock, faPersonWalking, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope, faFileLines } from '@fortawesome/free-regular-svg-icons';

import MoreButton from '../../components/UI/MoreButton';

const MoreScreen = ({ bgColor }) => {
  const verseOpacity = useRef(new Animated.Value(0)).current;
  const verseTranslateY = useRef(new Animated.Value(30)).current;
  const navigation = useNavigation();

  const items = [
    { label: 'Settings', icon: faCog, onPress: () => navigation.navigate('SettingsStack') },
    { label: 'About', icon: faCircleInfo, onPress: () => navigation.navigate('AboutStack') },
    { label: 'App Walkthrough', icon: faPersonWalking },
    { label: 'Contact & Support', icon: faEnvelope, onPress: () => navigation.navigate('ContactSupportStack') },
    { label: 'Privacy & Data', icon: faLock, onPress: () => navigation.navigate('PrivacyDataStack') },
    { label: 'Version Info', icon: faFileLines, onPress: () => navigation.navigate('VersionInfoStack') },
  ];

  useEffect(() => {
    Animated.parallel([
      Animated.timing(verseOpacity, {
        toValue: 1,
        duration: 1000,
        delay: 100,
        useNativeDriver: true,
      }),
      Animated.timing(verseTranslateY, {
        toValue: 0,
        duration: 1000,
        delay: 200,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: bgColor }]}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View style={styles.subContainer}>
        <View style={styles.buttonContainer}>
          {items.map((item, index) => (
            <MoreButton
              key={index}
              label={item.label}
              icon={item.icon}
              isLast={index === items.length - 1}
              onPress={item.onPress}
            />
          ))}
        </View>

        <Animated.View
          style={[
            styles.verseContainer,
            {
              opacity: verseOpacity,
              transform: [{ translateY: verseTranslateY }],
            },
          ]}
        >
          <Text style={styles.verse}>
            “Draw nigh to God, and he will draw nigh to you...” — James 4:8
          </Text>
        </Animated.View>
      </View>
    </ScrollView >
  );
};

export default MoreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  verseContainer: {
    paddingHorizontal: 8,
    paddingBottom: 40,
    alignItems: 'center',
  },
  verse: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#718096',
    textAlign: 'center',
  },
});
