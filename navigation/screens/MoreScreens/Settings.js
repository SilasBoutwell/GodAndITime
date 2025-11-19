import { useRef, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Animated, Text, ScrollView, StyleSheet, Alert } from "react-native";
import { faPalette, faUser, faSliders, faTrash, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { auth } from "../../../firebase";
import { logout } from "../../../auth";

import MoreButton from "../../../components/UI/MoreButton";
import DeleteAccountModal from "../../../components/Modals/DeleteAccountModal";

function Settings({ bgColor }) {
  const navigation = useNavigation();
  const fadeOpacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(30)).current;

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  async function handleLogout() {
    try {
      await logout();
    } catch (err) {
      console.error("Logout failed:", err);
    }
  }

  const items = [
    { label: "Theme", icon: faPalette, onPress: () => navigation.navigate("Theme") },
    { label: "Manage Profile", icon: faUser, onPress: () => navigation.navigate("ProfileManagement") },
    { label: "App Preferences", icon: faSliders, onPress: () => navigation.navigate("Preferences") },
    { label: "Logout", icon: faSignOut, onPress: () => handleLogout() },
    {
      label: "Delete Account",
      icon: faTrash,
      color: '#AD2525FF',
      iconColor: '#D64A4AFF',
      onPress: () => {
        Alert.alert(
          "Delete Account",
          "Are you sure you want to delete your account? This action cannot be undone.",
          [
            { text: "Cancel", style: "cancel" },
            { text: "Delete", style: "destructive", onPress: () => setShowDeleteModal(true) }
          ]
        );
      },
    },
  ];

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeOpacity, {
        toValue: 1,
        duration: 1000,
        delay: 100,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
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
              color={item.color}
              iconColor={item.iconColor}
            />
          ))}
        </View>

        <Animated.View
          style={[
            styles.footerContainer,
            {
              opacity: fadeOpacity,
              transform: [{ translateY }],
            },
          ]}
        >
          <Text style={styles.footerNote}>
            Manage your preferences and account securely.
          </Text>
        </Animated.View>
      </View>

      {/* Delete Account Modal */}
      <DeleteAccountModal
        visible={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        navigation={navigation}
        email={auth.currentUser?.email}
      />
    </ScrollView>
  );
}

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    flex: 1,
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  buttonContainer: {
    marginBottom: 20,
  },
  footerContainer: {
    paddingHorizontal: 8,
    paddingBottom: 40,
    alignItems: "center",
  },
  footerNote: {
    fontSize: 14,
    fontStyle: "italic",
    color: "#718096",
    textAlign: "center",
  },
});