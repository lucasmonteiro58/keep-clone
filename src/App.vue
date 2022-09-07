<script setup lang="ts">
import { ref, type Ref } from "vue";
import NoteCreator from "./components/NoteCreator.vue";
import NoteViewer from "./components/NoteViewer.vue";
import NoteModal from "./components/NoteModal.vue";
import LogosContainer from "./components/LogosContainer.vue";

const showNoteModal: Ref<boolean> = ref(false);

function openNoteModal() {
  showNoteModal.value = true;
}
function closeNoteModal() {
  showNoteModal.value = false;
}
</script>

<template>
  <section class="min-h-screen w-screen bg-neutral-200 pb-6">
    <LogosContainer></LogosContainer>
    <div class="flex justify-center align-center p-6">
      <NoteCreator></NoteCreator>
    </div>
    <div class="grid grid-cols-notes gap-5 mx-5 md:mx-[100px]">
      <NoteViewer @click="openNoteModal"></NoteViewer>
      <NoteViewer></NoteViewer>
      <NoteViewer></NoteViewer>
    </div>
    <NoteModal v-if="showNoteModal" @close="closeNoteModal"></NoteModal>
  </section>
</template>

<style scoped></style>
