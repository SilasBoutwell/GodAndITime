import { db } from "./firebase";
import { doc, setDoc, getDoc, addDoc, collection } from "firebase/firestore";

export async function createUserProfile(user) {
  const userRef = doc(db, "users", user.uid);
  await setDoc(userRef, {
    name: user.displayName || "Anonymous",
    email: user.email,
    createdAt: new Date(),
  }, { merge: true });
}

export async function getUserProfile(uid) {
  const userRef = doc(db, "users", uid);
  const snapshot = await getDoc(userRef);
  return snapshot.exists() ? snapshot.data() : null;
}

export async function createPost(authorId, content) {
  const postsRef = collection(db, "posts");
  await addDoc(postsRef, {
    authorId,
    content,
    createdAt: new Date(),
    likes: 0,
    visibility: "public",
  });
}
