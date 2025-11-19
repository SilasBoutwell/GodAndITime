import { auth, db } from "./firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
  sendPasswordResetEmail,
  sendEmailVerification
} from "firebase/auth";
import { doc, setDoc, serverTimestamp, updateDoc } from "firebase/firestore";

// Register a new user in Firebase Auth and Firestore
export async function register(email, password, { firstName, lastName }) {
  const cred = await createUserWithEmailAndPassword(auth, email, password);

  await updateProfile(cred.user, {
    displayName: `${firstName} ${lastName}`,
  });

  await setDoc(doc(db, "users", cred.user.uid), {
    email,
    firstName,
    lastName,
    createdAt: serverTimestamp(),
  });

  // Send verification email
  await sendEmailVerification(cred.user);

  return cred.user;
}

// Login with email and password
export async function login(email, password) {
  const cred = await signInWithEmailAndPassword(auth, email, password);
  return cred.user;
}

// Logout the current user
export async function logout() {
  return await signOut(auth);
}

// Send a password reset email
export async function resetPassword(email) {
  return await sendPasswordResetEmail(auth, email);
}

export async function updateUserProfile({ firstName, lastName, email }) {
  const user = auth.currentUser;
  if (!user) throw new Error("No user signed in");

  // Update Auth profile (displayName only)
  await updateProfile(user, {
    displayName: `${firstName} ${lastName}`,
  });

  // Update Firestore user doc
  const userRef = doc(db, "users", user.uid);
  await updateDoc(userRef, {
    firstName,
    lastName,
    email,
  });

  return true;
}