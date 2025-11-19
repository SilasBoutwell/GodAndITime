import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { auth } from "../../firebase";
import { getUserProfile } from "../../firestore";

function Profile({ bgColor }) {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    async function loadProfile() {
      if (auth.currentUser) {
        const data = await getUserProfile(auth.currentUser.uid);
        setProfile(data);
      }
    }
    loadProfile();
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      {profile ? (
        <>
          <Text>Name: {profile.firstName + ' ' + profile.lastName}</Text>
          <Text>Email: {profile.email}</Text>
        </>
      ) : (
        <Text>Loading profile...</Text>
      )}
    </View>
  );
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
