import { createApp } from "vue";
import App from "./App.vue";

import "./assets/main.css";

import { notesCollection } from "@/plugins/firebase";
console.log(notesCollection);

const app = createApp(App);
app.mount("#app");
