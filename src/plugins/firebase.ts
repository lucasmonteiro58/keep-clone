import { initializeApp } from "firebase/app";

const firebaConfig = {
  apiKey: "AIzaSyABI895_VHVFN64_70lkjxu1OM97i4Lv3s",
  authDomain: "keep-vue-38a03.firebaseapp.com",
  projectId: "keep-vue-38a03",
  storageBucket: "keep-vue-38a03.appspot.com",
  messagingSenderId: "784004523043",
  appId: "1:784004523043:web:2b0ea5af44c41d6eb07d96",
  measurementId: "G-8HTCT8B4RJ",
};

const app = initializeApp(config);

const db = getFirestore(firebaseApp);
export const notesCollection = collection(db, "notes");

export const createNote = () => {
  console.log(notesCollection);
};
