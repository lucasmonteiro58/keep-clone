import { createApp } from "vue";
import App from "./App.vue";

import "./assets/main.css";

// import { db } from "@/plugins/firebase";

// import { collection, getDocs } from "firebase/firestore";

// const querySnapshot = await getDocs(collection(db, "notes"));
// querySnapshot.forEach((doc) => {
//   console.log(doc.data());
// });

// import { doc, setDoc } from "firebase/firestore";

// await setDoc(doc(db, "notes", "ID"), {
//   id: "02",
//   color: "red",
//   title: "Hello",
//   content: "World",
// });

const app = createApp(App);
app.mount("#app");
