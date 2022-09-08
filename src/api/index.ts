import { db } from "@/plugins/firebase";
import type { Note } from "@/interfaces/Note";
import {
  collection,
  getDocs,
  setDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

const api = {
  async getNotes() {
    const querySnapshot = await getDocs(collection(db, "notes"));
    const notes: Array<Note> = [];
    querySnapshot.forEach((doc) => {
      notes.push(doc.data() as Note);
    });
    return notes;
  },
  async addNote(note: Note) {
    await setDoc(doc(db, "notes", note.id), note);
  },
  async updateNote(note: Note) {
    await setDoc(doc(db, "notes", note.id), note);
  },
  async deleteNote(note: Note) {
    await deleteDoc(doc(db, "notes", note.id));
  },
};

export default api;
