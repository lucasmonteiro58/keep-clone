<script setup lang="ts">
import { onMounted, ref, type Ref } from "vue";
import NoteCreator from "./components/NoteCreator.vue";
import NoteViewer from "./components/NoteViewer.vue";
import NoteModal from "./components/NoteModal.vue";
import LogosContainer from "./components/LogosContainer.vue";
import type { Note } from "./interfaces/Note";
import Api from "@/api";

const showNoteModal: Ref<boolean> = ref(false);
const notesCollection: Ref<Note[]> = ref([]);
const noteToEdit: Ref<Note> = ref({
  id: "",
  title: "",
  content: "",
  color: "bg-slate-50",
});

function openNoteModal(note: Note) {
  showNoteModal.value = true;
  noteToEdit.value = note;
}

function closeNoteModal() {
  showNoteModal.value = false;
}

async function getAllNotes() {
  const notes = await Api.getNotes();
  notesCollection.value = notes;
}

onMounted(() => {
  getAllNotes();
});
</script>

<template>
  <section class="min-h-screen w-screen bg-neutral-200 pb-6">
    <LogosContainer></LogosContainer>
    <div class="flex justify-center align-center p-6">
      <NoteCreator></NoteCreator>
    </div>
    <div class="grid grid-cols-notes gap-5 mx-5 md:mx-[100px]">
      <NoteViewer
        v-for="note in notesCollection"
        :key="note.id"
        :note="note"
        @click="openNoteModal(note)"
      ></NoteViewer>
    </div>
    <NoteModal
      v-if="showNoteModal"
      @close="closeNoteModal"
      :note="noteToEdit"
    ></NoteModal>
  </section>
</template>

<style scoped></style>
