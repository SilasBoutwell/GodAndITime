import { useState } from "react";
import { Modal, View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { auth, db } from "../../firebase";
import { doc, deleteDoc } from "firebase/firestore";
import { EmailAuthProvider, reauthenticateWithCredential, deleteUser } from "firebase/auth";

export default function DeleteAccountModal({ visible, onClose, navigation, email }) {
  const [password, setPassword] = useState("");

  async function confirmDelete() {
    try {
      const user = auth.currentUser;
      if (!user) {
        Alert.alert("Error", "No user is currently signed in.");
        return;
      }

      // Reauthenticate
      const credential = EmailAuthProvider.credential(email, password);
      await reauthenticateWithCredential(user, credential);

      // Delete Firestore doc
      await deleteDoc(doc(db, "users", user.uid));

      // Delete Auth user
      await deleteUser(user);

      onClose();
    } catch (err) {
      console.error("Delete failed:", err);
      if (err.code === "auth/requires-recent-login") {
        Alert.alert("Error", "Please re-login before deleting your account.");
      } else {
        Alert.alert("Error", "Failed to delete account. Try again.");
      }
    }
  }

  return (
    <Modal visible={visible} transparent={true} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Text style={styles.title}>Confirm Account Deletion</Text>
          <Text style={styles.message}>Enter your password to confirm:</Text>
          <TextInput
            secureTextEntry
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
          />
          <Button title="Delete Account" color="#E53E3E" onPress={confirmDelete} />
          <Button title="Cancel" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modal: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 8,
    width: "80%",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  message: {
    marginBottom: 12,
    fontSize: 16,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    padding: 10,
    marginBottom: 12,
  },
});