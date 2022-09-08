<script setup lang="ts">
import type { Note } from "@/interfaces/Note";

defineProps<{
  note: Note;
}>();
</script>

<template>
  <div
    class="w-full max-h-[600px] rounded-md px-4 py-2 shadow-md"
    :class="note.color"
  >
    <div class="w-full font-bold mb-2" :class="note.color">
      {{ note.title }}
    </div>
    <div
      class="w-full block min-h-[5em] max-h-[600px] h-fit resize-none pb-5 text-ellipsis"
      :class="note.color"
    >
      {{ note.content }}
    </div>
  </div>
</template>
